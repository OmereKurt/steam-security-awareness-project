(function () {
  const OFFICIAL = ["steampowered.com", "steamcommunity.com", "help.steampowered.com", "login.steampowered.com"];
  const host = location.hostname;
  const isOfficial = OFFICIAL.some(d => host === d || host.endsWith("." + d));

  // Heuristic: URL hints at steam + login/auth terms
  const urlText = (location.hostname + location.pathname + location.search).toLowerCase();
  const looksSteamish = urlText.includes("steam");
  const looksLogin = /login|signin|authenticate/.test(urlText);

  if (!isOfficial && looksSteamish && looksLogin) showBanner();

  function showBanner() {
    const bar = document.createElement("div");
    bar.style = "position:fixed;top:0;left:0;right:0;z-index:2147483647;padding:12px 16px;background:#ffd166;color:#111;font:600 14px system-ui;box-shadow:0 2px 8px rgba(0,0,0,.15)";
    bar.textContent = "⚠️ Possible phishing: This looks like a Steam login off official domains. Double-check the URL.";
    const btn = document.createElement("button");
    btn.textContent = "Dismiss";
    btn.style = "margin-left:12px;padding:6px 10px;border:1px solid #0001;background:#fff;cursor:pointer";
    btn.onclick = () => bar.remove();
    bar.appendChild(btn);
    document.documentElement.appendChild(bar);
  }
})();
