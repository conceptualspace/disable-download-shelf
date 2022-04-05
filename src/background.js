'use strict';

// show downloads page when toolbar button clicked
chrome.action.onClicked.addListener(function(activeTab){
  var newURL = "chrome://downloads";
  chrome.tabs.create({ url: newURL });
});

function disableShelf() {
	if (chrome.downloads.setShelfEnabled) {
		chrome.downloads.setShelfEnabled(false);
	}
}

chrome.runtime.onInstalled.addListener(disableShelf);
chrome.runtime.onStartup.addListener(disableShelf);
chrome.windows.onCreated.addListener(disableShelf);
