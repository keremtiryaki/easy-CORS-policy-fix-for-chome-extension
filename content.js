

console.log("easy-CORS-policy-fix-for-chome-extension content side started!");

chrome.runtime.sendMessage({
    action: 'fetchViaBG',
    src: "https://google.com",
    secondParam: "sample 2nd param"
}, function (response) {
    var resultJSON = JSON.parse(response);
    console.log("resultJSON", resultJSON);
    eval(resultJSON.responseText);
});

