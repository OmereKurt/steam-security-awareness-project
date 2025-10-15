(function () {
  const OFFICIAL = [
    "steampowered.com",
    "steamcommunity.com",
    "help.steampowered.com",
    "login.steampowered.com"
  ];

  const host = location.hostname.toLowerCase();
  const urlText = (location.hostname + location.pathname + location.search).toLowerCase();

  // Check for official domains
  const isOfficial = OFFICIAL.some(d => host === d || host.endsWith("." + d));

  // Heuristics for Steam-themed phishing pages
  const looksSteamish = urlText.includes("steam");
  const looksLogin = /(login|sign[\s\-]?in|authenticate|session|password|auth)/i.test(urlText);

  // Extra suspicious keywords (can be stored in a separate detection-rules file)
  const suspiciousKeywords = ["trade", "offer", "market", "skins", "inventory"];
  const hasSuspiciousKeyword = suspiciousKeywords.some(k => urlText.includes(k));

  // Trigger warning banner if suspicious and not official
  if (!isOfficial && looksSteamish && (looksLogin || hasSuspiciousKeyword)) {
    showBanner();
  }

  function showBanner() {
  const bar = document.createElement("div");
  bar.style = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483647;
    padding: 14px 20px;
    background: linear-gradient(90deg, #f44336, #ff9800);
    color: #fff;
    font: 600 14px 'Segoe UI', system-ui;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  `;

  const text = document.createElement("span");
  text.textContent =
    "⚠️ Phishing Alert: This page may be impersonating Steam. Verify the URL before logging in.";

  const btn = document.createElement("button");
  btn.textContent = "Dismiss";
  btn.style = `
    margin-left: 16px;
    background: #fff;
    color: #222;
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  `;
  btn.onmouseover = () => (btn.style.background = "#eee");
  btn.onmouseout = () => (btn.style.background = "#fff");
  btn.onclick = () => bar.remove();

  bar.appendChild(text);
  bar.appendChild(btn);
  document.documentElement.appendChild(bar);
}
