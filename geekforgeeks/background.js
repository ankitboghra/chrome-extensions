var code = 'var elem = [];' +
	'elem.push(document.getElementById("secondary"));' +
	'elem.push(...document.getElementsByClassName("adsbygoogle"));' +
	'elem.push(...document.getElementsByClassName("promotional"));' +
	'elem.length > 1 && elem.map(el => el.remove());' +
	'document.getElementById("primary").style.width = "78%";';
chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: code
    });
}, {
    url: [{
        hostContains: 'geeksforgeeks.org'
    }],
});
