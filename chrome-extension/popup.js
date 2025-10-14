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
document.getElementById("checkButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    const url = tab.url || "";
    const isOfficial = /\.steampowered\.com$|(^|\.)steamcommunity\.com$/i.test(new URL(url).hostname);
    const looksLogin = /(login|sign[\s\-]?in|authenticate)/i.test(url);
    alert(isOfficial ? "✅ Official Steam domain" :
          looksLogin  ? "⚠️ Possible phishing: off-domain login flow" :
                        "ℹ️ No obvious login flow detected");
  });
});
