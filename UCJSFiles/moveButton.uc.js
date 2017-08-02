// ==UserScript==
// @name           moveButton.uc.js
// @description    移动或克隆按钮/菜单到任意位置
// @author         ywzhaiqi
// @namespace      ywzhaiqi@gmail.com
// @include        main
// @charset        UTF-8
// @version        2017.07.28
// version        2014.9.6
// @homepageURL    https://github.com/ywzhaiqi/userChromeJS/tree/master/moveButton
// @downloadURL    https://github.com/ywzhaiqi/userChromeJS/blob/master/moveButton/moveButton.uc.js
// @reviewURL      http://bbs.kafan.cn/thread-1572303-1-1.html
// @note           2014/06/03 增加对按钮或菜单属性的设置，修正 bar 必须设置 pos 才会生效的问题。
// @note           2013/06/03 ver0.0.3  改进一些情况下无法移动的问题。
// @note           2013/05/22 ver0.0.2，新增参数 clone: true（克隆按钮/菜单，原来的保留）
// @note           2013/05/21 初始版本
// @note           填写的 buttons 说明：
// @note           　　id: 要移动的按钮/菜单的 Id
// @note           - 示例1： 移动 "翻译按钮" 到 "scriptish按钮" 的前面
// @note           　　{ id: "translatorButton", insertBefore: "scriptish-button" },
// @note           - 示例2： 移动 "翻译按钮" 到 "scriptish按钮" 的后面
// @note           　　{ id: "translatorButton", insertAfter: "scriptish-button" },
// @note           - 示例3： 移动 "翻译按钮" 到 "附加组件栏" 的第一个位置
// @note           　　{ id: "translatorButton", bar: "addon-bar", pos: 1 },
// @note           - 示例4：移动 "翻译按钮" 到 原来的第一个位置。（不推荐，建议用css调整）
// @note           　　{ id: "translatorButton", pos: 1 },
// @note           -  示例5：移动 "工具菜单" 到 系统按钮弹出的菜单 "选项" 的下面。
// @note           　　{ id: "tools-menu", insertAfter: "appmenu_customize"},
// @note           - 示例6：克隆 "工具菜单" 到 系统按钮弹出的菜单 "选项" 的下面
// @note           　　 { id: "tools-menu", insertAfter: "appmenu_customize", clone: true },
// ==/UserScript==

/*
    参考的工具栏或按钮的Id：
        nav-bar（导航工具栏）
            unified-back-forward-button（前进后退按钮）
            urlbar-container（整个地址栏）
                urlbar-icons（地址栏图标，如地址栏下拉按钮、刷新按钮等，uc脚本一般插入的位置）
            search-container（整个搜索栏）
            home-button（主页按钮）

        PersonalToolbar（书签栏）
            personal-bookmarks（书签栏中书签部分）
        addon-bar（附加组件栏）
            status-bar（状态栏，在附加组件栏中，按钮为不可移动）

    主要参考了 addMenu.uc.js 和 rebuild_userChrome.uc.xul
 */

location == "chrome://browser/content/browser.xul" && (function(){

    var buttons = [
        // { id: "autoReaderButton", bar: "PersonalToolbar", pos: 1 },
        // { id: "showFlagS-icon", insertBefore: "bookmarks-menu-button" },
        // { id: "nosquint-status", bar: "dactyl-status-bar" },
        // { id: "uAutoPagerize-icon", bar: "dactyl-status-bar" },
        // { id: "SimpleMusicPlayer", insertAfter: "tabcinema-button" },
        // { id: "redirector-icon", bar: "dactyl-addon-bar" },
        // { id: "statusbar-translator", bar: "PersonalToolbar" },
        // { id: "userChromebtnMenu", bar: "dactyl-addon-bar" },
        // { id: "PanelUI-menu-button", bar: "PersonalToolbar" },

        // // 改 Greasemonkey 按钮为右键弹出菜单
        // {id: "greasemonkey-tbb",
        //     attr: {
        //         type: "",
        //         context: "_child"
        //     }
        // },

        // // 改 User Agent Overrider 按钮为右键弹出菜单
        // {id: "useragentoverrider-button",
        //     attr: {
        //         type: "",
        //         context: "_child"
        //     }
        // },

        // // 增加 Stylish 右键弹出菜单功能
        // {id: "stylish-toolbar-button",
        //     attr: {
        //         context: "stylish-popup"
        //     }
        // },

/*工具栏*/
//{ id: "QuickOpen", insertAfter: "ublock0-button" },//启动时会消失, 只好特殊处理
{ id: "RIL_toolbar_button", insertAfter: "downloads-button" },//启动时有个边框去不掉, 只好特殊处理
{ id: "Sidebar-button", insertBefore: "urlbar" },//移动到地址栏前, 前进后退按钮后
        
//不常用圖標移動到aidBar
{ id: "flashgot-media-tbb", bar: "TabsToolbar_aidBar", pos: 1 },//FlashGot扩展
//{ id: "foxyproxy-toolbar-icon", bar: "TabsToolbar_aidBar", pos: 2 },//FoxyProxy扩展
{ id: "lpt_lastpass-compact-btn", bar: "TabsToolbar_aidBar", pos: 3 },//Lastpass扩展(3.x)
{ id: "_446900e4-71c2-419f-a6a7-df9c091e268b_-browser-action", bar: "TabsToolbar_aidBar", pos: 4 },//BitWarden
//{ id: "toggle-button--supportlastpasscom-lastpass-button", bar: "TabsToolbar_aidBar", pos: 3 },//Lastpass扩展(4.x)


//保留在更多工具中
{ id: "InspectElement-menuitem", insertAfter: "flashgot-menu" },//InspectElementModY 默認不在MoreTools中，單獨移動
{ id: "wordhighlight-toolbar-menuitem", insertAfter: "flashgot-menu" },
{ id: "noscript-context-menu", insertAfter: "flashgot-menu" },//Noscript右鍵菜單
{ id: "GrabScroll_optionsMenu", insertAfter: "flashgot-menu" },
{ id: "gm_general_menu", insertAfter: "flashgot-menu" },//Greasemonkey菜单
{ id: "UserScriptLoader_Tools_Menu", insertAfter: "flashgot-menu" },//UserScriptloader菜单

//頁面右鍵菜單
{id: "frame", insertAfter: "menu_historySidebar"}, //页面右键本框架不能直接隱藏，只好移動到一個安全的位置

//SpeedMonitor放到地址栏图标框第1位
{ id: "urlbar-speedmonitor", bar: "urlbar-icons", pos: 1 },

//Greasemonkey圖標右鍵菜單
{id: "greasemonkey-tbb",
attr: {
type: "",
context: "_child"
}
},

//-------------------文本提示框-----------------------------
{id: "RIL_toolbar_button",attr: {tooltiptext:"左键: 稍后阅读\r\n右键: 查看列表",}},
{id: "RIL_urlbar_add",attr: {tooltiptext:"未添加",}},
{id: "RIL_urlbar_mark",attr: {tooltiptext:"已添加",}},
{id: "bookmarks-menu-button",attr: {tooltiptext:"书签",}},
{id: "downloads-button",attr: {tooltiptext:"左键: 显示下载列表\r\n右键: 新建下载任务",}},
{id: "urlbar-reload-button",attr: {tooltiptext:"左键: 刷新当前页面\r\n右键: 强制刷新当前页面",}},
{id: "titlebar-min",attr: {tooltiptext:"最小化",}},
{id: "titlebar-max",attr: {tooltiptext:"最大化/还原",}},
{id: "titlebar-close",attr: {tooltiptext:"关闭",}},

];

    if (window.MyMoveButton) {
        try {
            window.MyMoveButton.unint();
            delete window.MyMoveButton;
        } catch(e) {
            window.MyMoveButton = null;
        }
    }

    window.MyMoveButton = {
        buttons: [],
        interval: 200, // 200毫秒间隔
        maxcount: 100, // 最大100回，至少 200 * 100 毫秒
        count: 0,
        timer: null,

        init: function() {
            this.delayRun(0);

            let menuitem = $C('menuitem', {
                id: "uc-movebutton",
                label: "Movebutton 重新运行",
                tooltiptext: "重新按照脚本内的设置移动按钮的位置",
                oncommand: "MyMoveButton.delayRun();"
            });

            let ins = $('devToolsSeparator');
            ins.parentNode.insertBefore(menuitem, ins);

            // window.addEventListener('aftercustomization', this, false);
        },
        unint: function() {
            ['uc-movebutton'].forEach(function(id){
                var node = document.getElementById(id);
                if (node) node.parentNode.removeChild(node);
            });
            // window.removeEventListener('aftercustomization', this, false);
        },
        handleEvent: function(event) {
            switch (event.type) {
                case 'aftercustomization':
                    // debug('aftercustomization');
                    this.delayRun();
                    break;
            }
        },
        delayRun: function(time) {
            this.reset();

            var self = this;
            setTimeout(function() {
                self.run();
            }, time || 100);
        },
        reset: function() {
            this.buttons = buttons.slice(0); // 克隆一份
            this.count = 0;
            this.timer = null;
        },
        run: function() {
            if (this.buttons.length == 0) return;

            this.timer = setInterval(function(self) {
                if (++self.count > self.maxcount || self.move())
                    clearInterval(self.timer);
            }, this.interval, this);
        },
        move: function() {
            var i = 0,
                info, success;
            while (i < this.buttons.length) {
                info = this.buttons[i];
                success = this.moveOneButton(info);
                if (success) {
                    this.buttons.splice(i, 1);
                }
                i++;
            }
            return this.buttons.length === 0 ? true : false;
        },
        moveOneButton: function(info) {
            var button = $(info.id) || document.querySelector(info.id);
            // debug('check button id: ' + info.id);
            if (!button) return false;

            if (info.clone === true) {
                button = button.cloneNode(true);
            }

            // 先设置属性
            if (info.attr) {
                for (let [key, val] in Iterator(info.attr)) {
                    if (typeof val == "function")
                        info.attr[key] = val = "(" + val.toSource() + ").call(this, event);";
                    button.setAttribute(key, val);
                }
            }

            // 移动
            let ins;
            if (info.insertBefore && (ins = $(info.insertBefore))) {
                ins.parentNode.insertBefore(button, ins);
            } else if (info.insertAfter && (ins = $(info.insertAfter))) {
                ins.parentNode.insertBefore(button, ins.nextSibling);
            } else if (info.bar) {
                let bar = $(info.bar) || button.parentNode;
                ins = bar.children[parseInt(info.pos, 10) - 1];
                if (ins) {
                    bar.insertBefore(button, ins);
                } else {
                    bar.appendChild(button);
                }
            } else {
                return false;
            }

            return true;
        },
    };

    window.MyMoveButton.init();


    function debug() { Application.console.log('[MyMoveButton DEBUG] ' + Array.slice(arguments)); }
    function $(id) { return document.getElementById(id); }
    function $A(args) { return Array.prototype.slice(args); }
    function $C(name, attr) {
        var el = document.createElement(name);
        if (attr) Object.keys(attr).forEach(function(n) el.setAttribute(n, attr[n]));
        return el;
    }
})();