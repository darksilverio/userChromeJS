//2017.01.09
/**********************************************************************************
 *child:[  ]内为当前菜单的下一级菜单配置,支持多级
 *text 为运行参数，如果无需参数，直接删除text属性
 *exec 为打开路径，可以是任意文件和文件夹，支持相对路径，相对于配置文件夹；
 *【文件夹】不支持直接“\\”开头的相对路径，需要用【Services.dirsvc.get("ProfD", Ci.nsILocalFile).path】开头
 *oncommand 可以用function(){}；
 *小书签可以用oncommand:function(){
gBrowser.loadURI("javascript:内容")
 }；
 *-------------------------------
 *除了以上属性外，可以自定义添加其他属性，如果快捷键accesskey等
 *-------------------------------
 *{}, 为分隔条
 *-------------------------------
 *如果设置了id属性，会尝试获取此id并移动，如果在浏覧器中没有找到此id，则创建此id
 *************************************************************************************/

//下面添加菜单
var anomenu = [{
    id: "addMenu-rebuild"
},
{
    id: "anobtn_set"
},
{
    id: "redirector-icon"
},

{},
{
    label: "在IE中打开",
    text: "%u",
    exec: "C:\\Program Files\\Internet Explorer\\iexplore.exe",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVQ4jZXSnVuDYRQG8B8EQTAIgkEQBMEgDIIwGA4Hg0EYBMH+gyAIh0EwHIRBEARBEAzDwWAweIP3bD17rmd9nOu64X3ec9/3+eJ/cYpL9DHAwabEHZyjG7jAbQik0SsRHzBHlWGBYebaSclNvEfyFK8FkQoznCSGqxhGwmP0t9ggsBTZS8n7QbjHVSQ9oRUu3UJbN6lAB2O0E+d+CC/xnAnMU4F2uM1+KLuEtRmMs5+fmPyCZlpBrn5mPY7Ud5BiFXl/FUZoJOS8vdGS3PC9+1xkirfC+yJmhnoDFQ7Vq/vL8Ppp+YMYCPVUr+O7RPyQna9Qm2RvLfWh9MKgi2Ns5WTYxot6bXfhsFtKLMUX/+qC1cGn0mkAAAAASUVORK5CYII=",
},
{
    label: '编辑文件',
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVQ4jWNgoCL4TwA3EGMAPrnrhAwhZIA4IUMIGcBAyBBCBqBjkgwgSi264Ewo7YFk60wcavEacBRNTJlUA/KgckfxqMVrAAzADCLoAnSnIyvOY0CECV4DkAOM7EDEB3AaQAqmDgAAtlxHLWMw/vEAAAAASUVORK5CYII=",
    child: [{
        label: "编辑通用user.js",
        tooltiptext: "左键: 编辑user.js",
        text: "\\user.js",
        exec: "\\..\\Software\\Notepad2\\Notepad2.exe",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVQ4jWNgoCL4TwA3EGMAPrnrhAwhZIA4IUMIGcBAyBBCBqBjkgwgSi264Ewo7YFk60wcavEacBRNTJlUA/KgckfxqMVrAAzADCLoAnSnIyvOY0CECV4DkAOM7EDEB3AaQAqmDgAAtlxHLWMw/vEAAAAASUVORK5CYII=",
    },
    {
        label: "编辑个人_user.js",
        tooltiptext: "左键: 编辑_user.js",
        text: "\\chrome\\Local\\_user.js",
        exec: "\\..\\Software\\Notepad2\\Notepad2.exe",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVQ4jWNgoCL4TwA3EGMAPrnrhAwhZIA4IUMIGcBAyBBCBqBjkgwgSi264Ewo7YFk60wcavEacBRNTJlUA/KgckfxqMVrAAzADCLoAnSnIyvOY0CECV4DkAOM7EDEB3AaQAqmDgAAtlxHLWMw/vEAAAAASUVORK5CYII=",
    },
    {
        label: "编辑config.js",
        tooltiptext: "左键: 编辑VimFx设置文件",
        text: "\\chrome\\Local\\VimFx\\config.js",
        exec: "\\..\\Software\\Notepad2\\Notepad2.exe",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVQ4jWNgoCL4TwA3EGMAPrnrhAwhZIA4IUMIGcBAyBBCBqBjkgwgSi264Ewo7YFk60wcavEacBRNTJlUA/KgckfxqMVrAAzADCLoAnSnIyvOY0CECV4DkAOM7EDEB3AaQAqmDgAAtlxHLWMw/vEAAAAASUVORK5CYII=",
    },
    {
        label: "编辑readme.js",
        tooltiptext: "左键: 编辑CingFox更新日志",
        text: "\\readme.js",
        exec: "\\..\\Software\\Notepad2\\Notepad2.exe",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVQ4jWNgoCL4TwA3EGMAPrnrhAwhZIA4IUMIGcBAyBBCBqBjkgwgSi264Ewo7YFk60wcavEacBRNTJlUA/KgckfxqMVrAAzADCLoAnSnIyvOY0CECV4DkAOM7EDEB3AaQAqmDgAAtlxHLWMw/vEAAAAASUVORK5CYII=",
    },
    ]
},
{},
{
    label: '批处理',
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVQ4jc2Quw2EMBBEX0ZEE9ThCsgp42LqIKYOQro5icDRVXCXDNay+GQLEfAkS/7szKwXbqQDvpWryxm8gLkiaFbtiQUYtP+XjGoWL26AD9BWdNCqtrGXPbAW0m0XqzSJCRgr0ndGaRIbEDNJFvsWpUlEIDhDew5OEKQ5uFt6CfbEN+7PXpNrucTDDPzQSvihnoZWWrmhXuMHem9Lmy9WtnwAAAAASUVORK5CYII=",
    child: [{
        label: "备份批处理",
        tooltiptext: "1. 备份Profiles\n2. CingFox制作\n3. 备份Plugins和Software活页夹\n4. 提取32位Flash插件\n5. 备份一些文件到GitHub",
        exec: Services.dirsvc.get("UChrm", Ci.nsILocalFile).path + "\\local\\BackupProfiles\\Backup_7z.bat",
    },
    {},
    {
        label: "设置Notepad2为默认",
        tooltiptext: "通过映象劫持以Notepad2替换自带记事本",
        exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\Notepad2\\Notepad2.bat",
    },
    ]
},
/*{
    label: '软件列表',
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsklEQVQ4jb3RIQ7CQBCF4S/B1SBR3KIeheAOeCySC1TWoJE9Aba2mitwABQKCWKnoYLSFAjPzCaz/9uZt/xJOdZYIRsDzlDjHPWO7RiDBkUYneLcajoELwOCHapOr8BhyGCLsmOwl/YvcOmY92rTeWUj5XALcC2t16tJjFz19I/ehNnCdYycYSGFlkev0fOdr+Amxr9GLcbCg2l/DfNM9SOYlGiF+ScwKeFaCqocuPtbPQAHPSy26m8ewQAAAABJRU5ErkJggg==",
    child: [{
        label: "ShadowsocksR",
        exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\Shadowsocks\\ShadowsocksR-dotnet4.0.exe",
    },
    {
        label: "XX-Mini",
        exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\XX-Mini\\goagent.exe",
    },
    {},
    {
        label: "ShareX",
        exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\ShareX\\ShareX.exe",
    },
    ],
},*/
{
    label: "常用功能",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVQ4jWNgGCzgP5l4EIFRLwwGMIScOvgAAMPmMc89jdNcAAAAAElFTkSuQmCC",
    child: [{
        label: "证书管理",
        oncommand: function() {
            window.open('chrome://pippki/content/certManager.xul', 'mozilla:certmanager', 'chrome,resizable=yes,all,width=600,height=400');
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVQ4jcWSqw7CMBSG93y1yGZvMLHUV6Ga6YkmhHdoFkIHZqllQRAwMyMQxLJNcAnIH1fBEN0m9ifHHPHlOxfPmzyMMYwpjzGGoekADmWDUBqE0uBQNv0BVGgQrkC4AhW6P8CPUgvwo9T2kyTp1F9AXlSgQoMKjbyo+hlc6yeCOEP7+KC+vxFKg1v7cjcI4gyEKyz0EcvNCYQrhNK4G8zmKzv/7yKdDNa7c+cK2/3F3WBILGDUK0+eLwDMbVc5IMVkAAAAAElFTkSuQmCC"
        //chrome://mozapps/skin/extensions/category-dictionaries.png
    },
    {
        label: "浏览器控制台",
        oncommand: "HUDService.openBrowserConsoleOrFocus();",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQ0lEQVQ4jX2TS05CQRBFi4FNrHPBffCRuA0W4tgpUbYADDBxD7ID4giXQMQFGAhjHQADcWC/l6b51LDfrVN976s2yyqE0AAGkhbABthI+gAGIYRGrj/odfcxsAZ6QNvMqmZWBTru3gfWkl7M7PqoGZhKmpjZTXEoaSZplujqkibAm5kFS4TPsbmSUiPgPRtWkTRx93EhagKrSM8nHlTyvQ4sJTUNGLp7/8LEkzeKOQ0tpt3Jxe7+eA4UAW1JCwO29p92Pm0PPFxgBGBbAnL/EfDr7vdncpCk79JC7l/SPkJ27t7NcwBugflBiLmFBLI8kUEPGJmkVhTUM8EyAayy/uI3toppR4vk7l1gBXylFiwukqTnPNGppFczqx0HXlbt5CoXkPQxxetdmRnufufuT5ceU1lxtUeSPoEd8APM41kr1/8BlhlfHqOqklEAAAAASUVORK5CYII="
    },
    {
        label: "错误控制台",
        oncommand: "toJavaScriptConsole();",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVQ4jaWT0QnAIBBDs9dboUs5VQewe51fFim21ksgv48kEMkVUIFIugqIrIC4AUc5tzwFdKUBVgJ7A0khKQ/oGiEr4GuFv0mWCbYAsw2edUZ/VkglcADOmS77zQ2WT6Il/QiZvAAAAABJRU5ErkJggg=="
    },

    ]
},

]
