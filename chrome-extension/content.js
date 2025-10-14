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
      position:fixed;top:0;left:0;right:0;z-index:2147483647;
      padding:12px 16px;background:#ffb703;color:#111;
      font:600 14px system-ui;box-shadow:0 2px 8px rgba(0,0,0,.15);
      display:flex;align-items:center;justify-content:space-between;
    `;
    bar.innerHTML = `
      <span>⚠️ <b>Phishing alert:</b> This page may imitate Steam. Check the URL before entering your credentials.</span>
      <span>
        <a href="https://github.com/YOUR_USERNAME/steam-security-awareness-project" target="_blank"
          style="color:#0645ad;text-decoration:underline;margin-right:10px">Learn more</a>
        <button id="dismiss-btn"
          style="padding:5px 10px;border:none;background:#fff;border-radius:4px;cursor:pointer;font-weight:500">Dismiss</button>
      </span>
    `;
    document.documentElement.appendChild(bar);

    const btn = bar.querySelector("#dismiss-btn");
    btn.onclick = () => bar.remove();

    // Auto-hide after 12 seconds
    setTimeout(() => {
      if (bar && document.contains(bar)) bar.remove();
    }, 12000);
  }
})();
