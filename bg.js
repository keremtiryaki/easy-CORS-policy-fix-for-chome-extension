
console.log("easy-CORS-policy-fix-for-chome-extension background side started!");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "fetchViaBG") {
        fetch(request.src)
            .then(function (response) {
                return response.text();
            }).then(function (responseText) {
                sendResponse(JSON.stringify({
                    secondParam: request.secondParam,
                    responseText: responseText,
                }));
            });
    }
    return true;
})