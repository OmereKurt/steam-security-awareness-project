document.getElementById("checkButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const url = tabs[0].url;
    if (url.includes("steamcommunity.com")) {
      alert("✅ This appears to be a legitimate Steam site.");
    } else {
      alert("⚠️ Caution: This might not be an official Steam domain!");
    }
  });
});
