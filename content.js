async function updateClickCount() {
  const response = await chrome.runtime.sendMessage({ type: "click" });
  document.getElementById("numclicks").innerHTML = response.count;
  if (response.count > 5) {
    document.getElementById("update").innerText = "time to switch hands";
  }
}

window.addEventListener("click", updateClickCount);

updateClickCount();
