var x = new XMLHttpRequest();
x.open('GET', 'Custom.min.css');
x.onload = function() {
    chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();
