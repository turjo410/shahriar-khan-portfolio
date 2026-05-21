<div align="center">

<img src="docs/screenshots/home_screen.png" alt="TrafficGuard AI Banner" width="300"/>

# 🚔 TrafficGuard AI
### *Bangladesh's Most Advanced AI-Powered Traffic Law Enforcement System*

[![Flutter](https://img.shields.io/badge/Flutter-3.10+-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.0+-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![YOLOv11](https://img.shields.io/badge/YOLOv11-Ultralytics-FF6B35?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII=)](https://ultralytics.com)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Google Gemini](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-lightgrey?style=for-the-badge&logo=android)]()

<p align="center">
  <strong>A full-stack, production-grade mobile application built for Bangladesh traffic law enforcement officers — combining real-time YOLOv11 vehicle detection, AI-powered CCTV monitoring, biometric-secured case management, adaptive traffic signal control, and a Gemini-powered AI assistant in one unified platform.</strong>
</p>

---

</div>

## 📖 Table of Contents

- [🌟 About the Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [📸 Screenshots](#-screenshots)
- [🏗️ System Architecture](#️-system-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🚀 Usage Guide](#-usage-guide)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👤 Author](#-author)

---

## 🌟 About the Project

**TrafficGuard AI** is a comprehensive, production-ready mobile application developed as a capstone research project for the **Department of Computer Science & Engineering at East West University (EWU), Bangladesh**. The system was designed to digitize and modernize traffic law enforcement operations across Dhaka city.

The application bridges the gap between AI/ML research and real-world law enforcement by providing field officers with a pocket-sized command center. From controlling traffic lights remotely to automatically detecting speed violators from live CCTV feeds using **YOLOv11** — this platform represents the future of smart policing in Bangladesh.

> 🎯 **Mission**: Reduce manual effort, improve traffic violation detection accuracy, and create an end-to-end digital pipeline from detection → case filing → payment collection.

---

## ✨ Key Features

### 🚦 Traffic Signal Management
- **Real-time signal monitoring** with live countdown timers and phase indicators
- **Emergency mode** — instantly clears routes for ambulances and fire trucks
- **Manual override** with configurable duration (1 min → indefinite)
- **Adaptive timing** — AI-driven signal adjustments based on live traffic density
- Full **audit log** of every override with officer ID, timestamp, and reason

### 🎥 AI-Powered CCTV Monitoring
- **Live MJPEG streaming** from dual CCTV cameras (Badda & Rampura Bridge, Dhaka)
- **YOLOv11 Object Detection** with 16 Bangladesh-specific vehicle classes:
  - *Bicycle, Bus, Bhotbhoti, Car, CNG, Easybike, Leguna, Motorbike, Pedestrian, Pickup, Powertiller, Rickshaw, Shopping Van, Truck, Van, Wheelbarrow*
- Real-time **speed violation detection** (auto-files cases when vehicle exceeds limit)
- Color-coded bounding boxes (🟢 Normal | 🔴 Violation)
- **ANPR (Automatic Number Plate Recognition)** — reads Bangladesh license plates via OCR

### 👤 Face Detection & Recognition
- **On-device real-time face detection** using Google ML Kit
- **CCTV face extraction** — identifies known violators from live feeds
- Violator **database matching** with 85%+ confidence threshold
- Support for **front/rear camera** toggle and flash control
- Evidence capture and integration with case filing

### 📋 Case Management (Biometric-Protected)
- **Biometric authentication** (Fingerprint / Face ID) required for sensitive features
- **10-minute session** with auto-lock and session-expired notifications
- File cases with: vehicle info, violation type (15 categories), GPS location, evidence photos
- **Auto-populated** from CCTV detections (pre-fills speed, location, snapshot)
- Full case lifecycle: *Filed → Confirmed → Payment Due → Paid/Dismissed*
- **Payment recording** with receipt generation and SMS notification to vehicle owner

### 🗺️ Real-Time Traffic Flow Map
- **Google Maps** integration centered on Dhaka city
- Live **traffic signal pins** with color-coded status (🟢🟡🔴⚫)
- CCTV camera markers with click-to-stream functionality
- **Animated flow arrows** showing traffic direction and volume
- **Congestion heatmap** layer with hotspot identification
- Emergency route calculation and route optimization

### 📊 Analytics & Intelligence
- **KPI Dashboard**: Violations, Revenue, Active Officers, System Uptime
- **Violation trends** — 30-day line charts with predictive analytics
- **Peak hours analysis** — identifies high-risk time slots for deployment
- **Location hotspots** — top 10 violation zones on map
- **Vehicle type distribution** — pie charts for Dhaka's unique traffic mix
- **Officer performance** leaderboard and payment collection rates
- Export to PDF, Excel, CSV with scheduled email reports

### 🤖 Gemini AI Inspector Assistant
- **Conversational AI** powered by Google Gemini
- Answers Bangladesh traffic law queries instantly
- Assists with case filing and report generation
- Context-aware — understands officer role and active cases
- Persistent chat history with search and export

### 📢 Communication Suite
- **Notice Board** — department announcements with priority badges (High/Medium/Low)
- **Push notifications** for new violations, emergency alerts, and system updates
- Notification history with unread count badge
- **Configurable alert preferences** per category

### 🔐 Security & Authentication
- **Biometric-gated features** — case filing, data management, signal override
- **Session management** with automatic expiry
- Audit logging for all sensitive operations
- Supervisor notification for extended overrides (>10 min)

---

## 📸 Screenshots

<div align="center">

### Home Dashboard & Navigation
<img src="docs/screenshots/home_screen.png" alt="Home Screen" width="280"/>

*Unified command center with Traffic Control, Rule Violation, and Crime Detection modules*

---

### AI-Powered CCTV Monitoring
<img src="docs/screenshots/cctv_detection.png" alt="CCTV Detection" width="280"/>

*Live YOLOv11 detection with 16 Bangladesh vehicle classes, speed tracking, and real-time violation flagging*

---

### Traffic Signal Control
<img src="docs/screenshots/traffic_signal_control.png" alt="Signal Control" width="280"/>

*Real-time signal monitoring with emergency mode, manual override, and adaptive timing*

---

### Analytics Dashboard
<img src="docs/screenshots/traffic_dashboard.png" alt="Analytics Dashboard" width="280"/>

*Data-driven insights: violation trends, revenue, peak hours, officer performance*

---

### Real-Time Traffic Flow Map
<img src="docs/screenshots/traffic_flow_map.png" alt="Traffic Flow Map" width="280"/>

*Google Maps integration with live signal status, CCTV markers, and congestion heatmap*

---

### Violation Case Filing
<img src="docs/screenshots/case_filing.png" alt="Case Filing" width="280"/>

*Biometric-protected case filing with ANPR-assisted vehicle lookup and evidence attachment*

---

### Face Detection & Recognition
<img src="docs/screenshots/face_detection.png" alt="Face Detection" width="280"/>

*Real-time face detection with known violator matching using Google ML Kit*

---

### System Architecture
<img src="docs/screenshots/system_architecture.png" alt="System Architecture" width="600"/>

*Full-stack architecture: Flutter mobile app ↔ Python Flask servers ↔ AI/ML pipeline*

</div>

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRAFFICGUARD AI SYSTEM                       │
├─────────────────┬───────────────────────┬───────────────────────┤
│  MOBILE CLIENT  │   TRAFFIC MGMT SERVER  │   AI DETECTION SERVER │
│  Flutter/Dart   │   Python Flask         │   Python Flask        │
│  Android + iOS  │   (Cloud Hosted)       │   (Camera-Local)      │
├─────────────────┼───────────────────────┼───────────────────────┤
│ • Home Screen   │ • Signal Control API  │ • YOLOv11 Detection   │
│ • Signal Ctrl   │ • Violation Database  │ • MJPEG Streaming     │
│ • CCTV View     │ • ANPR Endpoint       │ • Speed Calculation   │
│ • Face Detect   │ • Case Management     │ • Auto Case Filing    │
│ • Case Filing   │ • Analytics API       │ • Snapshot Capture    │
│ • Analytics     │ • Officer Registry    │ • Face Detection      │
│ • Flow Map      │ • Payment Processing  │ • Multi-camera Mgmt   │
│ • AI Chat       │ • Notice Board        │ • Track & Trace       │
├─────────────────┴───────────────────────┴───────────────────────┤
│              EXTERNAL INTEGRATIONS                              │
│  Google Maps API | Google Gemini AI | ML Kit | SQLite Local DB  │
└─────────────────────────────────────────────────────────────────┘
```

### Two-Server Architecture
| Server | Purpose | Key Capabilities |
|--------|---------|-----------------|
| **Traffic Management Server** | Case management, signal control | REST API, violation DB, ANPR, analytics |
| **AI Detection Server** | CCTV & AI processing | YOLOv11, MJPEG streaming, speed detection |

---

## 🛠️ Tech Stack

### 📱 Mobile Application (Flutter/Dart)
| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Flutter | ≥ 3.10.0 |
| Language | Dart | ≥ 3.0.0 |
| UI Design | Material Design 3 | — |
| State Management | Provider | ^6.0.5 |
| AI Integration | Google Generative AI (Gemini) | ^0.4.0 |
| Maps | Google Maps Flutter | ^2.5.0 |
| Face Detection | Google ML Kit | ^0.11.0 |
| Networking | HTTP, Dio, WebSocket | — |
| Local Database | SQFlite (SQLite) | ^2.0.0 |
| Biometrics | local_auth | ^2.1.6 |
| Video Streaming | Custom MJPEG player | — |
| Notifications | flutter_local_notifications | ^17.2.4 |
| Camera | camera, image_picker | — |
| Location | geolocator, geocoding | — |
| Video Player | video_player, chewie | — |

### 🖥️ Backend (Python)
| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Flask | 3.0.0 |
| Real-time | Flask-SocketIO | 5.3.5 |
| Computer Vision | OpenCV | 4.8.1.78 |
| AI Detection | YOLOv11 (Ultralytics) | 8.1.0 |
| Deep Learning | PyTorch | 2.1.0 |
| OCR (ANPR) | Pytesseract | 0.3.10 |
| ASGI Server | Gunicorn + Gevent | — |
| Data Processing | NumPy, Pillow | — |
| API Layer | Flask-CORS | 4.0.0 |

### ☁️ Infrastructure & Integrations
| Service | Purpose |
|---------|---------|
| **Google Gemini AI** | Officer AI assistant (legal guidance, case help) |
| **Google Maps Platform** | Real-time traffic visualization |
| **Google ML Kit** | On-device face detection |
| **Cloud Hosting** | Flask server deployment |
| **SQLite** | Local offline data persistence |
| **MJPEG** | Low-latency CCTV video streaming |

---

## 📂 Project Structure

```
trafficguard-ai/
├── 📱 lib/                          # Flutter application source
│   ├── main.dart                    # App entry point & route config
│   ├── config/
│   │   ├── api_config.dart          # Server endpoints & environment config
│   │   └── api_keys.dart            # API keys template (fill your keys)
│   ├── screens/                     # 29 Feature Screens
│   │   ├── home_screen.dart         # Main dashboard (biometric gateway)
│   │   ├── traffic_control_screen.dart
│   │   ├── traffic_dashboard_screen.dart
│   │   ├── traffic_flow_map_screen.dart
│   │   ├── traffic_cctv_screen.dart
│   │   ├── cctv_face_detection_screen.dart
│   │   ├── real_time_face_screen.dart
│   │   ├── case_filing_screen.dart
│   │   ├── pending_cases_screen.dart
│   │   ├── case_detail_screen.dart
│   │   ├── number_plate_screen.dart
│   │   ├── speedometer_screen.dart
│   │   ├── inspector_chat_screen.dart
│   │   ├── analytics_dashboard_screen.dart
│   │   ├── manual_override_screen.dart
│   │   ├── notice_board_screen.dart
│   │   ├── crowd_detection_screen.dart
│   │   ├── wrong_way_detection_screen.dart
│   │   ├── collision_detection_screen.dart
│   │   ├── object_detection_screen.dart
│   │   └── ... (9 more screens)
│   ├── services/                    # Business Logic Layer
│   │   ├── gemini_service.dart      # Google Gemini AI integration
│   │   ├── cctv_service.dart        # CCTV streaming & detection
│   │   ├── biometric_service.dart   # Fingerprint/Face ID auth
│   │   ├── storage_service.dart     # SQLite local persistence
│   │   ├── notification_service.dart
│   │   ├── traffic_data_service.dart
│   │   ├── huggingface_service.dart
│   │   ├── detection_alert_service.dart
│   │   └── ... (5 more services)
│   ├── models/                      # Data Models
│   │   ├── detection_result.dart
│   │   ├── face_info.dart
│   │   └── vehicle_info.dart
│   ├── widgets/                     # Reusable UI Components
│   │   ├── mjpeg_video_player.dart  # Custom MJPEG stream player
│   │   ├── detection_overlay.dart   # AI bounding box overlay
│   │   ├── custom_button.dart
│   │   ├── image_picker_widget.dart
│   │   └── loading_widget.dart
│   └── utils/                       # Constants & Themes
│       ├── colors.dart
│       ├── constants.dart
│       └── text_styles.dart
│
├── 🖥️ scripts/                      # Python Backend Servers
│   ├── active_servers/              # Deployed Flask servers
│   │   ├── advanced_flask_server_v2.py   # Main traffic + violations API
│   │   ├── crowd_wrongway_collision_detection.py
│   │   ├── dual_camera_server.py    # Dual CCTV + YOLOv11 server
│   │   ├── face_detection_server.py
│   │   ├── chat_server.py           # WebSocket chat server
│   │   └── enhanced_traffic_server.py
│   └── core_modules/                # Reusable backend modules
│       ├── analytics_dashboard.py
│       ├── anpr_system.py           # License plate recognition
│       ├── traffic_flow_analyzer.py
│       ├── traffic_predictor.py
│       ├── violation_management_system.py
│       ├── manual_override_system.py
│       ├── historical_data_logger.py
│       ├── google_maps_predictor.py
│       └── performance_metrics.py
│
├── 📱 android/                      # Android platform config
├── 🍎 ios/                          # iOS platform config
├── 🌐 web/                          # Web platform support
├── 🖼️ assets/                       # App assets
│   ├── app_icon.png
│   ├── images/
│   ├── icons/
│   └── map_style.json               # Custom Google Maps style
├── 📸 docs/screenshots/             # README screenshots
├── pubspec.yaml                     # Flutter dependencies
├── requirements.txt                 # Python dependencies
├── analysis_options.yaml
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following installed:

| Requirement | Version | Notes |
|------------|---------|-------|
| Flutter SDK | ≥ 3.10.0 | [Install Flutter](https://flutter.dev/docs/get-started/install) |
| Dart SDK | ≥ 3.0.0 | Included with Flutter |
| Android Studio | Latest | Or VS Code with Flutter extension |
| Python | ≥ 3.10 | For backend servers |
| Android Device/Emulator | API 26+ | Physical device recommended |

---

### 📱 Mobile App Setup

**1. Clone the Repository**
```bash
git clone https://github.com/turjo410/trafficguard-ai.git
cd trafficguard-ai
```

**2. Configure API Keys**

Copy the API keys template and fill in your keys:
```bash
# Edit lib/config/api_keys.dart
```
```dart
class ApiKeys {
  static const String geminiApiKey     = 'YOUR_GEMINI_API_KEY';
  static const String googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
  static const String openRouterApiKey = 'YOUR_OPENROUTER_KEY'; // optional
}
```

> 🔑 Get your Gemini API key at: https://aistudio.google.com/app/apikey
> 🗺️ Get Google Maps API key at: https://console.cloud.google.com/

**3. Configure Server Endpoints**

Edit `lib/config/api_config.dart`:
```dart
static const String DEV_BASE_URL  = 'http://YOUR_SERVER_IP:5001';  // Traffic server
static const String DEV_CCTV_URL  = 'http://YOUR_CCTV_SERVER:5002'; // CCTV server
```

**4. Install Flutter Dependencies**
```bash
flutter pub get
```

**5. Add Google Maps API key to Android**
```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_GOOGLE_MAPS_API_KEY"/>
```

**6. Run the App**
```bash
# Check connected devices
flutter devices

# Run on connected Android device
flutter run

# Run in release mode (better performance)
flutter run --release

# Build APK
flutter build apk --release
```

---

### 🖥️ Backend Server Setup

**1. Set up Python environment**
```bash
cd scripts/active_servers
python -m venv venv
source venv/bin/activate       # Linux/Mac
# OR
.\venv\Scripts\activate        # Windows
```

**2. Install Python dependencies**
```bash
pip install -r ../../requirements.txt
```

**3. Download YOLO Models**

Place these model files in `scripts/active_servers/`:
- `yolo11n.pt` — General object detection
- `yolo11n-seg.pt` — Instance segmentation
- `yolov11_best.pt` — Bangladesh vehicle detection (custom trained)

> Models can be downloaded from [Ultralytics](https://ultralytics.com/models) or trained on custom dataset.

**4. Start the Traffic Management Server**
```bash
cd scripts/active_servers
python advanced_flask_server_v2.py
# Server starts at http://0.0.0.0:5001
```

**5. Start the AI Detection / CCTV Server**
```bash
python dual_camera_server.py
# Server starts at http://0.0.0.0:5002
# Requires RTSP camera feeds configured in the script
```

**6. (Optional) Start the Chat WebSocket Server**
```bash
python chat_server.py
# WebSocket server starts at ws://0.0.0.0:5004
```

---

## 🚀 Usage Guide

### Module Overview

| Module | Access Level | Description |
|--------|-------------|-------------|
| **Traffic Control** | Open | Monitor & control all traffic signals |
| **Signal Analytics** | Open | View traffic flow data & charts |
| **Flow Map** | Open | Real-time Dhaka traffic map |
| **CCTV Monitor** | Open | Live AI detection from cameras |
| **Face Detection** | Open | Camera-based face detection |
| **File Case** | 🔐 Biometric | File new violation cases |
| **Pending Cases** | 🔐 Biometric | View & manage all cases |
| **Manual Override** | 🔐 Biometric | Override traffic signals |
| **Inspector Chat** | Open | AI assistant for officers |
| **Notice Board** | Open | Department announcements |

### Typical Workflow

```
Officer Opens App
       │
       ▼
  Home Dashboard
  ┌────┬────┬─────┐
  │ TC │ RV │ CD  │   TC=Traffic Control, RV=Rule Violation, CD=Crime Detection
  └────┴────┴─────┘
       │
  [Traffic Violation Detected via CCTV]
       │
  CCTV Screen → YOLOv11 flags violation → Auto snapshot
       │
  [Manual review by officer]
       │
  Biometric Auth → Case Filing Screen
  (Pre-populated with speed, location, snapshot)
       │
  Submit → Case ID generated → Pending Cases
       │
  Track payment → Mark as Paid → Case closed
```

---

## 🤝 Contributing

Contributions make the open-source community an incredible place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes with a descriptive message
   ```bash
   git commit -m 'feat: add AmazingFeature to violation detection'
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### 📋 Contribution Guidelines
- Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
- Ensure all Flutter code passes `flutter analyze`
- Test on a physical Android device before submitting PRs
- For backend changes, ensure the Flask server tests pass

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

```
MIT License — Copyright (c) 2025 turjo410

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👤 Author

<div align="center">

### Shahriar Khan Turjo

**Computer Science & Engineering | East West University, Bangladesh**

[![GitHub](https://img.shields.io/badge/GitHub-turjo410-181717?style=for-the-badge&logo=github)](https://github.com/turjo410)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/turjo410)

</div>

---

<div align="center">

### 🌟 Star this repository if you found it useful!

[![Star History Chart](https://img.shields.io/github/stars/turjo410/trafficguard-ai?style=social)](https://github.com/turjo410/trafficguard-ai)

---

*Built with ❤️ for the future of traffic safety in Bangladesh*

**🚔 TrafficGuard AI — Smarter Roads. Safer Cities.**

</div>
