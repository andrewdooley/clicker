async function updateClickCount() {
  const response = await chrome.runtime.sendMessage({ type: "click" });
  document.getElementById("numclicks").innerHTML = response.count;
}

window.addEventListener("click", updateClickCount);

updateClickCount();
