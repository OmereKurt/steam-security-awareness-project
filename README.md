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

N/A

## 💻 Installation
1. Clone this repository:  
   ```bash
   git clone https://github.com/OmereKurt/steam-security-awareness-project.git
2. Open Chrome and navigate to:
   chrome://extensions/
3. Enable Developer Mode in the top right
4. Click Load Unpacked and select the /chrome-extension folder
5. Visit a test phishing site (e.g., a fake Steam login page) to see the detection banner in action

## 🔍 Example: Phishing Detection in Action

When visiting a fake Steam login page, the Chrome extension displays a warning banner to alert the user:



⚠️ *The banner appears on suspicious Steam login pages that do not belong to official domains like `steampowered.com` or `steamcommunity.com`.*


## ⚙️ Tech Stack
- JavaScript (Chrome Manifest V3)
- Chrome Extensions API
- HTML/CSS
- URL & SSL Analysis
- BlueCat, VirusTotal, and Splunk (for enrichment and research)

## 🔮 Future Enhancements
- Integrate VirusTotal API for real-time domain reputation checks
- Implement machine learning–based phishing URL detection
- Expand domain detection rules via community-sourced datasets
- Create an awareness dashboard summarizing detection activity

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 👤 Author
Omer Kurt
Cybersecurity student passionate about threat detection, incident response, and phishing defense.
Connect on LinkedIn
 • GitHub

