<div align="center">

<img src="assets/icons/app_icon.png" alt="App Icon" width="120" height="120" style="border-radius: 24px;" />

# 💸 Student Expense Tracker

### *Take control of your finances — built for students, by a student.*

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.x-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev)
[![Firebase](https://img.shields.io/badge/Firebase-Integrated-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![SQLite](https://img.shields.io/badge/SQLite-Local_DB-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org)
[![Android](https://img.shields.io/badge/Android-5.0+-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)]()

<br/>

> 📱 **A feature-rich, Apple-inspired Android finance app** that helps students effortlessly track income, manage budgets, scan receipts via OCR, and visualize spending — all offline-first with end-to-end privacy.

<br/>

---

</div>

## 📋 Table of Contents

- [✨ About the Project](#-about-the-project)
- [🌟 Key Features](#-key-features)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🚀 Usage](#-usage)
- [🗄️ Database Schema](#️-database-schema)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👤 Author](#-author)

---

## ✨ About the Project

**Student Expense Tracker** is a polished, production-ready Flutter app engineered from the ground up for student financial life. Unlike generic finance apps, every feature — from pre-built categories (allowance, tuition, books) to semester-based analysis — is designed around how students actually spend money.

The app runs completely **offline-first** using SQLite, with optional **Firebase authentication** and cloud sync. It combines a clean, minimal Apple-inspired UI with powerful analytical capabilities usually reserved for premium apps.

Whether you're tracking your monthly allowance, managing scholarship funds, or making sense of your semester spending — this app has you covered.

---

## 🌟 Key Features

<table>
<tr>
<td width="50%">

### 💰 Transaction Management
- Full **CRUD** — Create, Read, Update, Delete
- **Income & Expense** tracking with 17 pre-defined categories
- **Swipe-to-delete** with confirmation dialog
- **Tap-to-edit** any transaction instantly
- **Recurring transactions** (Daily / Weekly / Monthly / Yearly)
- **Transaction templates** for frequently used entries
- **Notes & attachment paths** per transaction

</td>
<td width="50%">

### 📊 Analytics Engine
- **6-month spending trend** line chart
- **Month-over-month comparison** with % change indicators
- **Pie chart** breakdown of top 5 expense categories
- **Category-by-category** percentage breakdown
- **Summary cards** — Net balance, Income, Expenses
- **Period selector** — Week / Month / Year
- **Financial health** indicators & trend arrows

</td>
</tr>
<tr>
<td width="50%">

### 📅 Budget System
- **Per-category budget limits** (Weekly / Monthly / Yearly)
- **Real-time progress bars** with color-coded status
  - 🟢 Green: < 80% used
  - 🟡 Yellow: 80–100% used
  - 🔴 Red: Over budget
- **Overspending alerts** with exact excess amount
- Edit, deactivate, or delete budgets anytime

</td>
<td width="50%">

### 🎯 Savings Goals
- Create goals with **custom target amount & deadline**
- **Visual progress bars** for each goal
- **Add / subtract funds** from any goal
- Separate views for **Active vs Completed** goals
- Overall **savings progress summary** card
- Custom **colors and icons** per goal

</td>
</tr>
<tr>
<td width="50%">

### 🤖 Receipt Scanner (OCR)
- **Camera & gallery** image picking
- **Google ML Kit OCR** text recognition
- **Automatic amount extraction** from receipts
- **Date & merchant parsing** from scanned text
- **Smart category suggestion** from keywords
- Auto-fills the transaction form — zero manual effort

</td>
<td width="50%">

### 🔔 Smart Notifications
- **Budget warnings** at 80% and 100% thresholds
- **Daily & weekly expense summaries**
- **Month-end financial review** alerts
- **Unusual spending detection** alerts
- **Recurring transaction reminders**
- **Savings goal milestone** notifications
- Full **notification permission management**

</td>
</tr>
<tr>
<td width="50%">

### 📤 Export & Reports
- **CSV export** of all transaction history
- **PDF report generation** with charts & tables
- **Monthly summary** text reports
- **System share sheet** integration
- One-tap sharing via email, Drive, etc.

</td>
<td width="50%">

### 🎨 UI & Customization
- **Apple-inspired minimal design** with Material 3
- **Light & Dark mode** + System-follow option
- **8 accent color themes** with live preview
- **Font size adjustment** (12–18sp)
- **Glassmorphic containers**, gradient cards, neumorphic elements
- **Shimmer loading** states & micro-animations
- **Custom page transitions** (Slide / Fade / Scale)

</td>
</tr>
<tr>
<td width="50%">

### 📆 Calendar View
- **Interactive monthly calendar** with transaction markers
- **Day tap** → see all transactions for that date
- Income/expense **totals per day**
- Smooth **month navigation**

</td>
<td width="50%">

### 🏷️ Custom Categories
- Create categories with **custom name, icon & color**
- **30+ icon options** from icon grid picker
- **20 color swatches** for visual distinction
- Edit / delete (non-default categories only)
- Separate tabs for **Income vs Expense** categories

</td>
</tr>
</table>

### ⚡ Quick-Add Widget
A floating action button launches a **Quick Add Dialog** with:
- Tabbed interface (Income / Expense)
- **Quick-amount buttons** (100 / 500 / 1000 / 2000)
- **Template shortcuts** for frequent transactions
- Instant category selection + optional description

---

## 📸 Screenshots

> 💡 **Generate these screenshots yourself using the prompts below** (or run the app and capture them):

<table>
<tr>
<td align="center"><strong>🏠 Home Dashboard</strong></td>
<td align="center"><strong>📊 Analytics</strong></td>
<td align="center"><strong>💳 Transactions</strong></td>
<td align="center"><strong>💰 Budget</strong></td>
</tr>
<tr>
<td align="center">
  <!-- Screenshot: Home screen with balance card, quick add buttons, recent transactions list, dark mode -->
  <img src="docs/screenshots/home_dark.jpg" alt="Home Screen" width="200"/>
</td>
<td align="center">
  <!-- Screenshot: Analytics screen with pie chart, bar chart, summary cards -->
  <img src="docs/screenshots/analytics.jpg" alt="Analytics Screen" width="200"/>
</td>
<td align="center">
  <!-- Screenshot: Transactions list with filters, search bar, category icons -->
  <img src="docs/screenshots/transactions.jpg" alt="Transactions Screen" width="200"/>
</td>
<td align="center">
  <!-- Screenshot: Budget screen with colored progress bars, budget cards -->
  <img src="docs/screenshots/budget.jpg" alt="Budget Screen" width="200"/>
</td>
</tr>
<tr>
<td align="center"><strong>🎯 Savings Goals</strong></td>
<td align="center"><strong>🤖 Receipt Scanner</strong></td>
<td align="center"><strong>📆 Calendar View</strong></td>
<td align="center"><strong>🎨 Theme Settings</strong></td>
</tr>
<tr>
<td align="center">
  <img src="docs/screenshots/savings.png" alt="Savings Goals" width="200"/>
</td>
<td align="center">
  <img src="docs/screenshots/receipt_scanner.png" alt="Receipt Scanner" width="200"/>
</td>
<td align="center">
  <img src="docs/screenshots/calendar.png" alt="Calendar View" width="200"/>
</td>
<td align="center">
  <img src="docs/screenshots/theme.png" alt="Theme Customization" width="200"/>
</td>
</tr>
</table>

<details>
<summary>🖼️ Screenshot Generation Prompts (click to expand)</summary>

Use these prompts with any AI image generator:

**Home Screen:**
> "Android mobile app UI, dark mode fintech design, student expense tracker home dashboard. Large blue gradient card showing Total Balance ৳12,450 with green income ৳18,200 and red expense ৳5,750. Below: two rounded buttons — green 'Add Income' and red 'Add Expense'. Recent transactions list with category emoji icons. Bottom navigation bar with 4 tabs: Home (active blue), Transactions, Analytics, Budget. Black background, white typography, Inter font, Apple-inspired minimal UI. Single phone mockup."

**Analytics Screen:**
> "Android app analytics screen dark mode. Summary cards at top: Net Balance, Total Income (green), Total Expenses (red). Donut/pie chart showing expense breakdown by category with legend. Below: 6-month trend line chart in blue gradient. Period selector tabs: Week / Month / Year. Category breakdown list with progress bars. Black background, clean fintech design."

**Budget Screen:**
> "Android app budget management screen. List of budget cards each showing category emoji, category name, color-coded circular progress indicator, amount spent vs limit (e.g. ৳3,200 / ৳5,000), remaining amount, and status badge (On Track / Warning / Over Budget). Green/yellow/red color coding. Floating action button to add new budget. Clean dark minimal UI."

**Receipt Scanner:**
> "Android app receipt scanner screen. Camera viewfinder with scanning frame overlay and corner brackets. Scanned receipt preview panel below showing extracted data: Amount ৳450, Date today, Merchant 'Campus Cafe', suggested Category 'Food & Dining'. 'Auto-fill Transaction' button in blue. Clean modern UI design."

</details>

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Flutter 3.x (Dart) | Cross-platform mobile UI |
| **State Management** | Provider 6.x | Reactive state across screens |
| **Local Database** | SQLite (sqflite 2.3) | Offline-first persistent storage |
| **Cloud Auth** | Firebase Auth | User authentication |
| **Cloud Database** | Cloud Firestore | Optional cloud sync |
| **Charts** | FL Chart 0.66 | Analytics visualizations |
| **Typography** | Google Fonts (Inter) | Apple SF Pro alternative |
| **Icons** | Font Awesome Flutter | Rich icon library |
| **Animations** | animations 2.0 | Page transitions & micro-interactions |
| **Notifications** | flutter_local_notifications | Scheduled alerts & reminders |
| **OCR** | Google ML Kit Text Recognition | Receipt scanning & parsing |
| **Export** | csv + pdf + printing | CSV and PDF report generation |
| **Calendar** | table_calendar 3.0 | Interactive calendar widget |
| **Sharing** | share_plus 7.x | System share sheet integration |
| **Permissions** | permission_handler 11 | Runtime permissions |
| **Storage** | shared_preferences | Settings & preferences |
| **UUID** | uuid 4.x | Unique transaction IDs |
| **Design System** | Material Design 3 | Component foundations |

---

## 📂 Project Structure

```
student_expense_tracker/
│
├── 📱 lib/
│   ├── main.dart                          # App entry, Firebase init, theme, routing
│   ├── firebase_options.dart              # Firebase configuration
│   │
│   ├── 📐 models/
│   │   ├── transaction_model.dart         # Transaction entity (CRUD, recurring, notes)
│   │   ├── category_model.dart            # Category (icon, color, type)
│   │   ├── budget_model.dart              # Budget limits per category & period
│   │   ├── savings_goal_model.dart        # Savings goal with target & progress
│   │   └── transaction_template_model.dart # Reusable transaction templates
│   │
│   ├── 🔄 providers/
│   │   ├── transaction_provider.dart      # Transaction CRUD & analytics queries
│   │   ├── category_provider.dart         # Category management
│   │   ├── budget_provider.dart           # Budget tracking & calculations
│   │   ├── theme_provider.dart            # Theme mode, accent color, font size
│   │   ├── savings_goal_provider.dart     # Goal progress tracking
│   │   └── transaction_template_provider.dart # Template CRUD
│   │
│   ├── 🖥️ screens/
│   │   ├── home_screen.dart               # Dashboard: balance, quick actions, recents
│   │   ├── transactions_screen.dart       # Full history with search & filters
│   │   ├── add_transaction_screen.dart    # Add / Edit transaction form
│   │   ├── analytics_screen.dart          # Charts, trends, category breakdowns
│   │   ├── budget_screen.dart             # Budget creation & progress tracking
│   │   ├── savings_goals_screen.dart      # Savings goal management
│   │   ├── calendar_view_screen.dart      # Calendar with daily transaction markers
│   │   ├── receipt_scanner_screen.dart    # OCR receipt scanning & auto-fill
│   │   ├── category_management_screen.dart # Custom category editor
│   │   ├── theme_customization_screen.dart # Live theme preview & editor
│   │   ├── notification_settings_screen.dart # Notification preferences
│   │   ├── daily_expense_screen.dart      # Day-focused expense view
│   │   ├── settings_screen.dart           # App settings & export options
│   │   ├── login_screen.dart              # Firebase login UI
│   │   ├── signup_screen.dart             # Firebase registration UI
│   │   └── data_migration_screen.dart     # Data migration utilities
│   │
│   ├── ⚙️ services/
│   │   ├── auth_service.dart              # Firebase Auth + state management
│   │   ├── firebase_service.dart          # Firestore CRUD operations
│   │   ├── export_service.dart            # CSV, PDF, and summary exports
│   │   ├── notification_service.dart      # Local notification scheduling
│   │   └── data_migration_service.dart    # Database migration logic
│   │
│   ├── 🧩 widgets/
│   │   ├── quick_add_dialog.dart          # FAB quick-add transaction dialog
│   │   ├── animated_button.dart           # Scale / bounce / ripple buttons
│   │   ├── visual_effects.dart            # Glassmorphic, gradient, neumorphic cards
│   │   ├── skeleton_loading.dart          # Shimmer placeholder components
│   │   ├── comparison_chart.dart          # Month-over-month comparison chart
│   │   ├── interactive_chart.dart         # Interactive FL Chart wrapper
│   │   └── success_animation.dart         # Lottie-style success feedback
│   │
│   └── 🔧 utils/
│       ├── database_helper.dart           # SQLite singleton, schema, migrations
│       └── page_transitions.dart          # Custom slide/fade/scale route transitions
│
├── 📦 assets/
│   ├── images/                            # App images & illustrations
│   └── icons/                             # App icon assets
│
├── 🤖 android/                            # Android platform code
├── 🌐 web/                                # Flutter Web support
├── pubspec.yaml                           # Dependencies & asset declarations
└── analysis_options.yaml                  # Dart lint rules
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following installed:

```bash
# Check Flutter installation
flutter doctor

# Required versions
Flutter: >=3.0.0
Dart:    >=3.0.0
Android SDK: API 21+ (Android 5.0 Lollipop)
```

### 1. Clone the Repository

```bash
git clone https://github.com/turjo410/student-expense-tracker.git
cd student-expense-tracker
```

### 2. Install Dependencies

```bash
flutter pub get
```

### 3. Firebase Setup

This app uses **Firebase Authentication** and **Cloud Firestore**. You'll need to create your own Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/) → **Create a project**
2. Add an **Android app** with your package name
3. Download `google-services.json` → place in `android/app/`
4. Run the FlutterFire CLI to generate `firebase_options.dart`:

```bash
# Install FlutterFire CLI
dart pub global activate flutterfire_cli

# Configure Firebase for your project
flutterfire configure
```

5. Enable **Email/Password** authentication in Firebase Console → Authentication → Sign-in methods

> **Note:** `google-services.json` and `firebase_options.dart` are excluded from the repo for security — you must generate your own.

### 4. Run the App

```bash
# Run on connected Android device or emulator
flutter run

# Run in release mode (better performance)
flutter run --release
```

### 5. Build APK

```bash
# Build a release APK
flutter build apk --release

# Output: build/app/outputs/flutter-apk/app-release.apk
```

---

## 🚀 Usage

### Getting Started
1. **Sign Up / Log In** — Create an account or log in with Firebase Auth
2. **Home Dashboard** — View your total balance, recent transactions, and quick summary
3. **Add a Transaction** — Tap the ➕ FAB or use the Quick Add buttons
4. **Set a Budget** — Go to the Budget tab → tap + → select a category and limit
5. **Check Analytics** — View spending patterns, charts, and category breakdowns
6. **Scan a Receipt** — Home → 📷 icon → point camera at any receipt → auto-fill

### Navigation

| Tab | Screen | Description |
|-----|--------|-------------|
| 🏠 Home | Dashboard | Balance overview, quick actions, recent transactions |
| 📋 Transactions | History | Full list with search, filters, and sort options |
| 📊 Analytics | Reports | Charts, trends, and category breakdowns |
| 💰 Budget | Management | Set limits, track progress, get alerts |

### Quick Tips
- **Swipe left** on any transaction to delete it
- **Tap** any transaction to edit it
- **Long press** the FAB to open the full Quick Add dialog with templates
- Use the **Calendar view** (Settings → Calendar) to browse transactions by date
- Export data anytime via **Settings → Export Data**

---

## 🗄️ Database Schema

The app uses **SQLite** with 6 tables:

```sql
-- Transactions table
CREATE TABLE transactions (
  id                  TEXT PRIMARY KEY,
  type                TEXT,          -- 'income' | 'expense'
  amount              REAL,
  category            TEXT,
  categoryId          TEXT,
  date                TEXT,
  description         TEXT,
  source              TEXT,
  isRecurring         INTEGER,       -- 0 | 1
  recurringFrequency  TEXT,          -- 'daily' | 'weekly' | 'monthly' | 'yearly'
  recurringEndDate    TEXT,
  notes               TEXT,
  attachmentPaths     TEXT,          -- comma-separated paths
  createdAt           TEXT,
  updatedAt           TEXT
);

-- Categories table
CREATE TABLE categories (
  id          TEXT PRIMARY KEY,
  name        TEXT,
  icon        INTEGER,               -- Icon codePoint
  color       INTEGER,               -- ARGB color value
  type        TEXT,                  -- 'income' | 'expense'
  isDefault   INTEGER                -- 0 | 1
);

-- Budgets table
CREATE TABLE budgets (
  id            TEXT PRIMARY KEY,
  categoryId    TEXT REFERENCES categories(id),
  categoryName  TEXT,
  amount        REAL,
  period        TEXT,                -- 'weekly' | 'monthly' | 'yearly'
  startDate     TEXT,
  endDate       TEXT,
  isActive      INTEGER,
  createdAt     TEXT
);

-- Savings Goals, Transaction Templates tables also included
```

---

## 🤝 Contributing

Contributions are warmly welcomed! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Commit Convention
This project uses [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, no logic change
- `refactor:` — code restructure
- `chore:` — maintenance tasks

### Reporting Issues
Found a bug? [Open an issue](https://github.com/turjo410/student-expense-tracker/issues) with:
- Steps to reproduce
- Expected vs actual behavior
- Device & Android version

---

## 📜 License

Distributed under the **MIT License**.  
See [`LICENSE`](LICENSE) for full details.

```
MIT License — Copyright (c) 2024 turjo410
Permission is granted to use, copy, modify, distribute this software freely.
```

---

## 👤 Author

<div align="center">

**turjo410**

[![GitHub](https://img.shields.io/badge/GitHub-turjo410-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/turjo410)

*Built with ❤️ for students everywhere*

---

> *"The best time to start tracking your expenses was yesterday. The second best time is now."*

</div>

---

<div align="center">

### 🌟 If this project helped you, please give it a star!

[![GitHub stars](https://img.shields.io/github/stars/turjo410/student-expense-tracker?style=social)](https://github.com/turjo410/student-expense-tracker/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/turjo410/student-expense-tracker?style=social)](https://github.com/turjo410/student-expense-tracker/network/members)

</div>
