# 🛡️ Steam Phishing Detection & Awareness Extension

## 🔍 Overview
This project investigates large-scale phishing campaigns targeting **Steam users**, focusing on fake trading and skin valuation websites designed to steal credentials and bypass **multi-factor authentication (MFA)**. It includes a **Chrome extension** that detects fraudulent Steam login pages through **URL pattern analysis**, **SSL certificate validation**, and **domain heuristics**. The goal is to raise awareness around credential-stealing attacks and help users recognize social engineering and spoofing attempts commonly seen in online gaming ecosystems.

## 🚀 Features
- Detects fake Steam login pages using heuristic detection rules  
- Warns users directly in the browser with a security alert banner  
- Built with **JavaScript** and **Chrome Manifest V3**  
- Includes phishing sample URLs and detection rule datasets for research  
- Promotes awareness and education through real-world phishing examples  

## 🧠 Research Context
This project was developed as part of a cybersecurity awareness initiative exploring:  
- Phishing and credential theft techniques  
- Social engineering in gaming ecosystems  
- Browser-based phishing detection and countermeasures  

## 🧩 Repository Structure
steam-security-awareness-project/  
├── chrome-extension/      # Chrome extension source code  
│   ├── manifest.json  
│   ├── background.js  
│   ├── content.js  
│   ├── popup.html  
│   ├── popup.js  
│   ├── icons/  
│   │   ├── icon16.png  
│   │   ├── icon48.png  
│   │   └── icon128.png  
│   ├── detection-rules/  
│   │   └── suspicious_domains.txt  
│   ├── phishing-samples/  
│   │   └── sample_urls.txt  
│   └── README.md  
│  
├── docs/                  # Documentation and demo images  
│   ├── demo.png  
│   └── README.md  
│  
├── .gitignore  
├── LICENSE  
└── README.md  

## 💻 Installation
1. Clone this repository:  
   ```bash
   git clone https://github.com/yourusername/steam-security-awareness-project.git
