async function updateClickCount() {
  const response = await chrome.runtime.sendMessage({ type: "click" });
  document.getElementById("numclicks").innerHTML = response.count;
  if (response.count % 10 === 0) {
    notification();
  }
}

window.addEventListener("click", updateClickCount);

updateClickCount();

function notification() {
  chrome.notifications.create({
    type: "basic",
    title: "Hello",
    message: "This is a notification",
    iconUrl: "images/test.png",
  });
}
