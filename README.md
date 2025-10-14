# Steam Phishing Detection & Awareness Extension

## 🔍 Overview
This project investigates large-scale phishing campaigns targeting Steam users through fake trading and skin valuation sites.  
It includes a **Chrome extension** that detects fraudulent Steam login pages using URL pattern analysis, SSL certificate validation, and domain heuristics.

## 🚀 Features
- Detects fake Steam login domains using detection rules.
- Warns users with an on-page alert banner.
- Chrome extension built with JavaScript and Manifest v3.
- Includes phishing simulation samples and detection datasets.

## 🧠 Research Context
Part of a cybersecurity awareness initiative exploring **credential theft**, **social engineering**, and **browser-based phishing detection.**

## 🧩 Repository Structure
steam-security-awareness-project/
│
├── chrome-extension/
│   ├── detection-rules/
│   │   └── suspicious_domains.txt
│   │
│   ├── icons/
│   │   ├── icon128.png
│   │   ├── icon16.png
│   │   └── icon48.png
│   ├── phishing-samples/
│   │   └── sample_urls.txt
│   │
│   ├── README.md
│   ├── background.js
│   ├── content.js
│   ├── manifest.json
│   ├── popup.html
│   └── popup.js
│
├── docs/
│   ├── README.md
│   └── demo.png
│
├── .gitignore
├── LICENSE
└── README.md
