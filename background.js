let count = 0;

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.type === "click") {
    count += 1;
    await sendResponse({ count: count });
  }
});
