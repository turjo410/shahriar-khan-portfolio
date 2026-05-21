# 🗳️ Bangladesh Election Analytics & Predictive Dashboard (2026)

<div align="center">
  
  ![Bangladesh 13th Parliamentary Election Banner](https://img.shields.io/badge/Bangladesh_13th_Parliament-Watershed_Landslide_Verdict-006A4E?style=for-the-badge&logo=bangladesh&logoColor=f42a41)
  
  [![Vercel Deployment](https://img.shields.io/badge/Deployed_On-Vercel-black?style=for-the-badge&logo=vercel)](https://dashboard-cse488-lab.vercel.app/)
  [![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
  [![Repo Status](https://img.shields.io/badge/Repo_Status-Complete_/_Production-brightgreen?style=for-the-badge)](https://github.com/turjo410)
  
</div>

---

### 💬 "Mapping a Landslide. Bridging Data Science and Democratic Decision-Making."

**Bangladesh Election Analytics & Predictive Dashboard (2026)** is an end-to-end, multi-stack data engineering, machine learning, and interactive visual platform built to analyze and model the historic **13th Parliamentary General Election of Bangladesh** held on February 12, 2026. 

This project integrates a highly optimized Next.js 15 web application, an advanced Apache Spark (PySpark & MLlib) data engineering pipeline, a Streamlit analytics sandbox, and a cross-platform React Native companion mobile app. It showcases how socioeconomic variables (literacy, poverty, internet penetration, and urbanization) mathematically model voter turnout patterns and classify seat outcomes with **84.78% prediction accuracy**.

---

## 📖 Table of Contents

- [📊 Project Overview & Historical Context](#-project-overview--historical-context)
- [✨ Key Features](#-key-features)
  - [🖥️ Interactive Next.js 15 Web Dashboard](#️-interactive-nextjs-15-web-dashboard)
  - [🤖 PySpark & MLlib Data Pipeline](#-pyspark--mllib-data-pipeline)
  - [📱 Companion React Native Android App](#-companion-react-native-android-app)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#️-installation--setup)
  - [1. Data Pipeline & Scraper](#1-data-pipeline--scraper)
  - [2. Next.js Web Dashboard](#2-nextjs-web-dashboard)
  - [3. React Native Mobile App](#3-react-native-mobile-app)
- [🚀 Usage & Demonstration](#-usage--demonstration)
- [📈 PySpark ML Model Evaluation Evidence](#-pyspark-ml-model-evaluation-evidence)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👤 Author](#-author)

---

## 📊 Project Overview & Historical Context

The general election on February 12, 2026, was a historic watershed event in Bangladesh's political history:
* **The Context**: The first election following the student-led July 2024 uprising and the transition overseen by Nobel laureate Muhammad Yunus's interim government.
* **The Verdict**: A landslide supermajority for the Bangladesh Nationalist Party (BNP) alliance (securing **209 direct seats** and up to **212 alliance seats**), marking a dramatic return to power for Tarique Rahman.
* **The Reform**: Concurrently, a national referendum approved the *July National Charter* with roughly **60% YES votes**, initiating constitutional overhauls like prime ministerial term limits and a bicameral parliament.
* **The Turnout**: A robust **59.88% physical voter turnout** recorded across **297 mapped seats**.

By linking official election commissions metrics to division-level socioeconomic indices (BBS census, BBS ICT Surveys, and World Bank indicators), this project implements regression, classification, and K-Means clustering models to prove that digital footprints and socioeconomic variables heavily govern physical electoral participation.

---

## ✨ Key Features

### 🖥️ Interactive Next.js 15 Web Dashboard

<div align="center">
  <img src="assets/dashboard_mockup.png" alt="Next.js Dashboard Interface" width="100%">
</div>

* **Dynamic Geography Choropleth**: Highly detailed, high-contrast React Leaflet & SVG-based map of Bangladesh divisions with smooth zooming, panning, and precise hover tooltips.
* **SVG Parliament Dot Arc**: Dynamic semicircular seat mapping modeling all 297 seats called with visual alliances (BNP, 11-Parties opposition, Independents) and a majority threshold indicator (149 seats).
* **Bento Grid Insights & Key Races**: Displays real-time KPIs, historic voter preferences, and extreme anomalies—such as **Madaripur-1**, the closest race in the country decided by a razor-thin margin of **0.22%**.
* **ML Predictive Sandbox**: An interactive client-side toggle interface allowing users to adjust regional literacy, internet penetration, and urbanization indexes to predict voter turnout and win probabilities.

### 🤖 PySpark & MLlib Data Pipeline

<div align="center">
  <img src="assets/party_seat_distribution.png" alt="Party Seat Distribution Chart" width="80%">
</div>

* **Multi-Source Scraping & Imputation**: Extracting election data from TBS & Wikipedia, broadcasting macro BBS socioeconomic data down to individual constituencies, and running zero-bias imputation.
* **Lightweight Turnout Regression**: A Spark-driven Ridge Regression model forecasting regional turnouts ($R^2 = 0.3611$, $RMSE = 7.70$).
* **Random Forest Seat Classifier**: Predefined MLlib Random Forest classifier predicting winner parties with **84.78% accuracy** and a weighted F1-score of **0.8293**.
* **Constituency K-Means Clustering**: Unsupervised K-Means clustering ($k=2$, Silhouette score $= 0.6097$) uncovering two highly distinct socio-political phenotypes directing modern voter turnout.

### 📱 Companion React Native Android App

<div align="center">
  <img src="assets/mobile_mockup.png" alt="Companion Mobile App Interface" width="400">
</div>

To ensure field readiness and modern accessibility for political researchers and journalists on the ground, the system integrates a cross-platform React Native / Expo companion mobile app:
* **Mobile Live Seat Ticker**: Real-time push-notification alerts for critical constituency calls, seat flips, and voter-turnout updates.
* **Touch-Optimized Swing Maps**: Fast, interactive geographical heatmaps optimized for portrait views, featuring pinch-to-zoom mapping of division-wise political swings.
* **Offline Field Synchronization**: Fully integrated local database caching, ensuring journalists and surveyors can access historical election logs, candidate sheets, and maps in rural areas with low cellular connectivity.
* **On-The-Go Predictive Simulator**: Slider-based mobile interface mapping the PySpark model coefficients, allowing immediate constituency predictive simulations from a mobile phone.

---

## 🛠️ Tech Stack

### Web & Mobile Frontend
* **Core Web Stack**: Next.js 15 (App Router), React 19, TypeScript
* **Styling & Theme**: CSS Modules & Tailwind CSS v4 (Harmony HSL dark-mode theme: `#0A0E27` Deep Space Black, `#141B34` Elevated Bento Cards, `#00D9FF` Accent Cyber Blue, `#9D4EDD` Royal Accent Purple)
* **Data Visualization**: Recharts (Turnout graphs, margins, and scatterplots), React Leaflet (Geographical boundaries)
* **Mobile Stack**: React Native, Expo, Redux Toolkit (State Management), React Navigation

### Data Science & Machine Learning Pipeline
* **Framework**: Apache Spark (PySpark Core & MLlib)
* **Query & Wrangling**: Spark SQL, Pandas, NumPy
* **Analytics & Imputation**: Scikit-Learn, SciPy
* **Validation Sandbox**: Streamlit Dashboard (`dashboard/app.py` in the data layer)

---

## 📂 Project Structure

```
.
├── dashboard/                     # NEXT.JS 15 WEB DASHBOARD
│   ├── src/
│   │   ├── app/                   # App router, global CSS, layout
│   │   ├── components/            # Bento grid, Interactive maps, ML sandbox
│   │   ├── data/                  # Typed TS data modules (election-results, ml-results)
│   │   └── lib/                   # Utility and tailwind helper modules
│   ├── Report/                    # LaTeX raw report source, figures & audit tables
│   ├── Assignment 2/              # PYSPARK DATA ENGINE TRACK
│   │   ├── notebooks/             # Kaggle-ready PySpark end-to-end notebooks
│   │   ├── scripts/               # Download, extraction & dataset builders
│   │   ├── data/                  # Cleaned, standardized merged CSV files
│   │   └── dashboard/             # Secondary Streamlit analytical dashboard
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── package.json
├── scraper/                       # Wikipedia & TBS constituency result scraper
│   ├── index.js
│   ├── transform.js
│   └── package.json
├── mobile/                        # REACT NATIVE COMPANION MOBILE APP
│   ├── src/
│   │   ├── components/            # Reusable mobile UI components
│   │   ├── screens/               # Home, Map, Live Ticker, ML Sandbox
│   │   └── store/                 # Redux state slices (player, settings, election)
│   ├── App.tsx                    # Mobile Entrypoint
│   └── package.json
└── .gitignore                     # Optimized git exclusions
```

---

## ⚙️ Installation & Setup

### 1. Data Pipeline & Scraper
To extract raw data and build the final `merged_final.csv`:
```bash
# Navigate to scraper
cd scraper
npm install
node index.js   # Scrape constituency lists

# Navigate to pipeline setup
cd ../dashboard/Assignment\ 2/
pip install -r requirements.txt
python scripts/download_wdi_indicators.py
python scripts/build_datasets.py
```

### 2. Next.js Web Dashboard
To run the primary high-fidelity visual dashboard locally:
```bash
cd dashboard
npm install
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. React Native Mobile App
To launch the Expo companion mobile app on your Android emulator or physical device:
```bash
# Navigate to mobile app
cd mobile
npm install
npm run android   # For Android emulator
```

---

## 🚀 Usage & Demonstration

### Descriptive Mode
* Land on the home dashboard to view the **209-seat supermajority verdict** banner.
* Interact with the **Bangladesh Choropleth Map** to view division-wise average turnout percentages and prevailing winning parties.
* View the **Constituency Bento Box** for immediate insights on the thinnest race call (**Madaripur-1** decided by **0.22%** margin) and the highest turnout division (**Khulna** averaging **70.64%**).

### Predictive Machine Learning Mode
* Click the header toggle to activate the **Predictive ML Simulator**.
* Choose any target constituency (e.g., *Dhaka-10* or *Chattogram-1*).
* Adjust the **Socioeconomic Sliders**:
  * Internet Penetration (%)
  * Literacy Rate (%)
  * Urbanization Level (%)
* Watch the Random Forest classification model and Ridge Regression coefficients immediately predict:
  1. The forecasted voter turnout percentage.
  2. The probability of victory for the BNP, Jamaat, Independent, or NCP candidates.

---

## 📈 PySpark ML Model Evaluation Evidence

The statistical robustness of our predictive modeling is derived directly from the PySpark MLlib training outcomes:

### Turnout Regression Model Coefficients (Ridge Regression)
$$R^2 = 0.3611 \quad \vert \quad RMSE = 7.7002\%$$

| Feature Index | Predictor Coefficient | Correlation Impact |
| :--- | :---: | :---: |
| **Internet Penetration** | `-2.3045` | Strong Inverse Correlation |
| **Urbanization Rate** | `-1.1092` | Moderate Inverse Correlation |
| **Literacy Rate** | `-0.8931` | Weak Inverse Correlation |
| **Poverty Rate** | `+0.4201` | Positive Correlation |

> **Key Finding**: Digitally integrated, urban, and highly literate environments physically vote at lower rates in this political cycle, whereas poorer, rural districts show higher turnout rates.

### Winner Party Seat Classification Results (Random Forest)
* **Model Accuracy**: `84.78%`
* **Weighted Recall**: `0.8478`
* **Weighted F1-Score**: `0.8293`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/turjo410) if you want to contribute to the React Native app, mobile maps, or the Next.js visual components.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Turjo Khan (turjo410)**
* 🖥️ **GitHub**: [@turjo410](https://github.com/turjo410)
* 🏫 **Affiliation**: East West University, Department of Computer Science & Engineering
* 📧 **Email**: [turjo410@github.com](mailto:turjo410@github.com)
