(function () {
  const OFFICIAL_DOMAINS = [
    "steampowered.com",
    "steamcommunity.com",
    "help.steampowered.com",
    "login.steampowered.com"
  ];

  const host = location.hostname;
  const isOfficial = OFFICIAL_DOMAINS.some(d => host === d || host.endsWith("." + d));

  // Heuristic: look for Steam login-like patterns
  const urlText = (location.hostname + location.pathname + location.search).toLowerCase();
  const looksSteam = urlText.includes("steam");
  const looksLogin = /login|signin|authenticate|trade|market/.test(urlText);

  if (!isOfficial && looksSteam && looksLogin) showWarning();

  function showWarning() {
    const bar = document.createElement("div");
    bar.style = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2147483647;
      background: #ffcc00;
      color: #111;
      font: 600 14px system-ui;
      padding: 12px 16px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;

    const text = document.createElement("span");
    text.textContent = "⚠️ Warning: This may be a fake Steam login page. Verify the URL before entering credentials.";
    bar.appendChild(text);

    const btn = document.createElement("button");
    btn.textContent = "Dismiss";
    btn.style = `
      margin-left: 12px;
      padding: 6px 10px;
      border: none;
      background: #fff;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    `;
    btn.onclick = () => bar.remove();
    bar.appendChild(btn);

    document.documentElement.appendChild(bar);
  }
})();
