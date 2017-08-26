// ==UserScript==
// @name            AidBar.uc.js
// @description     标签栏辅助自定义工具栏
// @include         chrome://browser/content/browser.xul
// @charset         UTF-8
// @author          defpt
// @mod             Cing
// @homepageURL     https://github.com/defpt/userChromeJs/tree/master/AidBar.uc.js
// @reviewURL       http://bbs.kafan.cn/thread-1727960-1-1.html
(function() {
	var defptToolbar = document.getElementById("urlbar");//原: TabsToolbar, 地址栏: urlbar
	if(defptToolbar) {
		var aidBar = document.createElement('hbox');
		aidBar.setAttribute('id', 'TabsToolbar_aidBar');
		aidBar.setAttribute("label", "辅助栏");
		aidBar.setAttribute("class", "toolbar");
		defptToolbar.insertBefore(aidBar, document.getElementById("urlbar-icons"));//原: alltabs-button, 地址栏: urlbar-icons
		
		document.insertBefore(document.createProcessingInstruction('xml-stylesheet', 'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent('\
#TabsToolbar_aidBar{\
	overflow:hidden; \
	max-width:300px; /*默认为16px*/\
	opacity:1; /*默认为0*/\
	transition: 0.8s; \
	transition-delay:1s;\
}\
#TabsToolbar_aidBar:hover{\
   max-width:300px;/*300px足够用了吧？*/\
    opacity:1;\
	transition-delay:.2s;\
}\
#TabsToolbar_aidBar > image, .statusbarpanel-iconic{\
	padding:5px 2px;\
}\
') + '"'), document.documentElement);
	}
})();