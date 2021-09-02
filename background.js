chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status == "complete" && tab.url) {
        if (tab.url.includes(".voiped.eu")) {

            chrome.tabs.executeScript(tab.tabId, { file: "./jquery-1.10.2.min.js" }, function () {
                chrome.tabs.executeScript(tab.tabId, { file: "./foreground.js" });
            });

        }
    }
});

