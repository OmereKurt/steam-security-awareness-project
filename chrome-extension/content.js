const suspiciousPatterns = [
  "steamcommunity-check",
  "steamsafe-login",
  "steam-items",
  "tradeoffer-steam",
  "steam-verify"
];

const isSuspicious = suspiciousPatterns.some(pattern =>
  window.location.hostname.includes(pattern)
);

if (isSuspicious) {
  alert("⚠️ Warning: This website may be a fake Steam login page!\nAlways verify the URL before signing in.");
}

