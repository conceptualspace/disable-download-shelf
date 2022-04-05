'use strict';

// web extensions polyfill for ff/chrome/brave
window.browser = (function () {
    return window.browser || window.chrome;
})();

function disableShelf() {
	if (browser.downloads.setShelfEnabled) {
		browser.downloads.setShelfEnabled(false);
	}
}

chrome.runtime.onInstalled.addListener(disableShelf);
chrome.runtime.onStartup.addListener(disableShelf);
chrome.windows.onCreated.addListener(disableShelf);

// show downloads page when toolbar button clicked
browser.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "chrome://downloads";
  chrome.tabs.create({ url: newURL });
});
