<div align="center">

<img src="https://img.shields.io/badge/NeoFocus-v1.0.0-3B82F6?style=for-the-badge&logo=flutter&logoColor=white" alt="NeoFocus"/>

# 🧠 NeoFocus — *Luminous Clarity*

### **Your calm, focused, and gamified productivity companion.**
*The focus ritual of Forest · The density of Notion · The quiet elegance of Apple*

<br/>

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev/)
[![Dart](https://img.shields.io/badge/Dart-3.x-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Riverpod](https://img.shields.io/badge/Riverpod-2.x-6366F1?style=for-the-badge)](https://riverpod.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-16A34A?style=for-the-badge)]()

</div>

---

## 📖 Table of Contents

- [✨ About NeoFocus](#-about-neofocus)
- [📸 Screenshots](#-screenshots)
- [🚀 Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🏗️ Architecture](#%EF%B8%8F-architecture)
- [⚙️ Installation & Setup](#%EF%B8%8F-installation--setup)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👤 Author](#-author)

---

## ✨ About NeoFocus

**NeoFocus** is a masterfully crafted, full-stack productivity application built with Flutter and Supabase. It is designed for students, professionals, and habit-builders who want a tool that is **quiet, fast, and intentional** — one that reduces visual noise without sacrificing information density.

The design philosophy is distilled from the best of modern software: the calm precision of Apple, the rich information density of Notion, the habit-building ritual of Forest, and the motivational progression of Habitica — all unified under a single, coherent "Luminous Clarity" design system.

NeoFocus is more than a to-do app. It is a **complete daily operating system** for your mind.

> *"Consistency compounds. Keep your streak alive."*

---

## 📸 Screenshots

<div align="center">

### Dashboard — Your Daily Command Center
<img src="assets/screenshots/dashboard.png" alt="NeoFocus Dashboard" width="320"/>

*The momentum hero card, today's snapshot rail, focus task stack, and wellness trackers — all at a glance.*

---

### Habit Tracker & Pomodoro Focus Timer
<img src="assets/screenshots/habits_pomodoro.png" alt="Habits and Pomodoro" width="680"/>

*Left: Animated circular progress rings per habit, 7-day history strip, and one-tap logging. Right: Custom-painted arc timer with a glowing gradient play button.*

---

### Gamification & Task Management
<img src="assets/screenshots/gamification_tasks.png" alt="Profile and Tasks" width="680"/>

*Left: Level progression, XP/Gold stats grid, and achievement badges. Right: Priority-sorted task list with swipe actions and quick-add FAB.*

</div>

---

## 🚀 Features

### 🏠 Dashboard
- **Momentum Hero Card** — Animated progress ring showing your daily task completion ratio at a glance.
- **AI Insight Strip** — Contextual, smart motivational message based on your current workload and streak.
- **Today's Snapshot Rail** — Horizontally scrollable metric cards showing Completed tasks, Pending tasks, and current Day Streak.
- **Focus Stack** — Your top 5 active tasks in a compact, tappable glass card — completable directly from the dashboard.
- **Wellness Panels** — Side-by-side glass cards for **Hydration** (tap-to-increment water intake) and **Exercise** (animated minute counter).
- **Habits at a Glance** — Horizontal scrollable habit capsules with streak counts, one-tap loggable.
- **Quick Access Grid** — Animated shortcut capsules to every major section (Notes, Analytics, Pomodoro, Calendar, Appointments, Planner).
- **Quick-Add FAB** — Spring-animated floating button that opens a bottom sheet to instantly add a task.
- **Reminder Badge** — Notification bell icon with a live unread count badge.

### ✅ Task Management
- Create tasks with **Priority levels** (P1 Critical 🔴 / P2 High 🟡 / P3 Normal 🔵 / P4 Low ⚪)
- Assign **categories** (Work, Personal, Health, Study, Finance, Creative, etc.)
- Set **due dates** with smart display ("Today", "Tomorrow", "May 28")
- **Swipe-to-delete** with flutter_slidable animations
- One-tap **completion toggle** with haptic feedback
- Real-time sync with **Supabase** backend

### 🔥 Habit Tracker
- **Circular progress rings** — Smooth TweenAnimationBuilder rings per habit (today's count vs. target)
- **7-Day History Strip** — Visual dot strip showing the last 7 days of completion
- **Streak tracking** — Current and longest streak displayed with fire emoji
- **Difficulty & frequency** — Easy / Medium / Hard, Daily / Weekly
- **Custom target count** — Log a habit 1–10 times per day
- **Color customization** — 6 accent colors per habit
- **Daily reminder** — Optional scheduled push notification per habit
- **Habit Summary Header** — Aggregate stats (Total Habits, Active Streaks, Best Streak)

### 🍅 Pomodoro Focus Timer
- **Animated Arc Timer** — Custom `CustomPainter` circular arc with a live sweep gradient (Neon Mint → Electric Violet)
- **25-minute Focus / 5-minute Break** sessions with automatic mode switching
- **Pulsing animation** while timer is running (subtle scale oscillation)
- **Gradient play/pause button** with glow shadow effect
- **Session counter** — tracks total focus sessions completed
- **Total focus minutes** accumulated per session

### 🎮 Gamification & Profile
- **XP & Level system** — Earn XP for completing tasks and logging habits; level up through thresholds
- **Gold coins** — Secondary currency earned for high-priority task completions
- **Day Streak** — Global cross-feature daily activity streak
- **Circular level progress** ring using `percent_indicator` around user avatar
- **Stats Grid** — 6-metric animated counter grid (XP, Gold, Tasks Done, Habits Done, Streak, Level)
- **Achievements system** — 6 unlockable achievements with gold gradient badges (First Step, Habit Builder, On Fire, Centurion, Level 5, Level 10)

### 📅 Calendar & Planner
- Full-featured **table_calendar** integration — monthly, weekly, and list views
- Day-by-day **Daily Planner** for scheduling tasks into time blocks
- Visual task density indicators on calendar days

### 🔔 Reminders & Notifications
- **Reminder Inbox** — In-app inbox showing all upcoming and overdue reminders
- **Unread badge count** on the notification bell icon
- **flutter_local_notifications** integration for scheduled push reminders
- Per-habit optional daily reminder with time picker

### 📊 Analytics
- Visual progress charts using **fl_chart**
- Completion rates, habit consistency, and productivity trends over time

### 📝 Notes & Appointments
- Rich **Notes** screen for quick thoughts and reference material
- **Appointments** screen for scheduling meetings and events

### ⚙️ Settings & Auth
- **Supabase Auth** — Email/password sign-up and sign-in with session persistence
- **Theme toggle** — Full light/dark mode with the "Luminous Clarity" design system
- **GoRouter** declarative navigation with type-safe routes

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Flutter 3.x + Dart 3.x | Cross-platform UI |
| **Backend** | Supabase | Auth, PostgreSQL database, real-time |
| **State Management** | Riverpod 2.x + Riverpod Generator | Compile-safe reactive state |
| **Routing** | GoRouter 14.x | Declarative, type-safe navigation |
| **Data Layer** | Freezed + JSON Serializable | Immutable models, JSON parsing |
| **UI Animations** | flutter_animate + custom painters | Micro-animations, arc timers |
| **Charts** | fl_chart | Analytics visualizations |
| **Calendar** | table_calendar | Monthly/weekly calendar views |
| **Progress** | percent_indicator | Circular level progress rings |
| **Notifications** | flutter_local_notifications + timezone | Scheduled habit reminders |
| **Typography** | Manrope (Google Fonts) | Consistent, premium text |
| **Local Storage** | shared_preferences + path_provider | Session & preference caching |
| **Utilities** | intl, uuid, collection | Date formatting, IDs, list ops |

---

## 🏗️ Architecture

NeoFocus follows a **feature-first layered architecture** with strict separation of concerns:

```
Presentation (UI)  ←→  Providers (Riverpod)  ←→  Services (Supabase)  ←→  Models (Freezed)
```

- **`lib/config/`** — App-wide theme tokens, route definitions, animation constants
- **`lib/data/`** — Freezed models, Supabase service, reminder service
- **`lib/providers/`** — All Riverpod providers (state notifiers for tasks, habits, planner, pomodoro, profile)
- **`lib/ui/`** — Feature-organized screen directories + shared core widgets

Key design patterns used:
- **Repository pattern** via `SupabaseService`
- **Notifier pattern** for all mutable state (e.g., `TasksNotifier`, `HabitsNotifier`, `PomodoroNotifier`)
- **Extension methods** on `BuildContext` for theme-aware colors (e.g., `context.textPrimary`, `context.surface`)
- **`AsyncValue`** for all async data loading with built-in loading/error states

---

## ⚙️ Installation & Setup

### Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) **v3.10+**
- Dart SDK **v3.0+**
- A [Supabase](https://supabase.com) project (free tier works)
- Android Studio / VS Code with Flutter plugin

### Step-by-Step

**1. Clone the repository**
```bash
git clone https://github.com/turjo410/NeoFocus.git
cd NeoFocus
```

**2. Install Flutter dependencies**
```bash
flutter pub get
```

**3. Run code generation** (Riverpod generators + Freezed)
```bash
dart run build_runner build --delete-conflicting-outputs
```

**4. Configure Supabase**

Create a `.env` file in the root (this file is gitignored):
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

Or add them directly to `lib/config/constants.dart` for quick local testing.

**5. Set up the database**

Run the SQL schema in your Supabase project's SQL editor:
```bash
# The schema is at:
supabase/schema.sql
```

**6. Run the app**
```bash
# Android / iOS
flutter run

# Specific device
flutter run -d <device-id>

# Release build
flutter build apk --release
```

---

## 📂 Project Structure

```
NeoFocus/
│
├── assets/
│   ├── images/                 # App images
│   └── screenshots/            # README showcase images
│
├── lib/
│   ├── config/
│   │   ├── theme.dart          # ✦ "Luminous Clarity" design system (light + dark)
│   │   ├── routes.dart         # GoRouter route definitions
│   │   ├── constants.dart      # AppConstants: XP thresholds, level math, goals
│   │   └── app_animations.dart # Shared animation durations & curves
│   │
│   ├── data/
│   │   ├── models/
│   │   │   ├── task.dart       # Task, TaskPriority, TaskCategory (Freezed)
│   │   │   ├── habit.dart      # Habit model with streak & color
│   │   │   ├── daily_plan.dart # Water, exercise, notes for the day
│   │   │   ├── note.dart       # Note model
│   │   │   ├── appointment.dart
│   │   │   ├── routine.dart
│   │   │   ├── task_reminder.dart
│   │   │   └── user_profile.dart # XP, Gold, Streaks, Achievements
│   │   └── services/
│   │       ├── supabase_service.dart  # All Supabase CRUD operations
│   │       └── reminder_service.dart  # flutter_local_notifications scheduling
│   │
│   ├── providers/
│   │   └── app_providers.dart  # All Riverpod providers & notifiers
│   │
│   ├── ui/
│   │   ├── core/widgets/
│   │   │   ├── glass_card.dart       # Glassmorphism card with glow
│   │   │   ├── premium_surface.dart  # Scrollable page surface
│   │   │   ├── premium_widgets.dart  # GradientButton, AnimatedCounter, EmptyState
│   │   │   ├── water_tracker.dart    # Tap-to-increment hydration widget
│   │   │   ├── animated_card.dart    # Pressable scale animation card
│   │   │   ├── section_card.dart
│   │   │   ├── shimmer_loading.dart  # Skeleton loading states
│   │   │   └── staggered_list.dart   # Staggered entry animation list
│   │   │
│   │   ├── home/
│   │   │   ├── dashboard_screen.dart # Main dashboard (Focus Hero, Snapshot, Stack, Wellness)
│   │   │   └── home_shell.dart       # Bottom nav shell
│   │   ├── tasks/
│   │   │   ├── task_list_screen.dart
│   │   │   └── task_detail_screen.dart
│   │   ├── habits/
│   │   │   └── habit_tracker_screen.dart
│   │   ├── calendar/
│   │   │   └── calendar_screen.dart
│   │   ├── planner/
│   │   │   └── daily_planner_screen.dart
│   │   ├── pomodoro/
│   │   │   └── pomodoro_screen.dart  # Custom arc painter + pulse animation
│   │   ├── gamification/
│   │   │   └── profile_screen.dart   # XP, Levels, Achievements
│   │   ├── analytics/
│   │   │   └── analytics_screen.dart
│   │   ├── notes/
│   │   │   └── notes_screen.dart
│   │   ├── appointments/
│   │   │   └── appointments_screen.dart
│   │   ├── reminders/
│   │   │   └── reminder_inbox_screen.dart
│   │   ├── auth/
│   │   │   ├── login_screen.dart
│   │   │   └── register_screen.dart
│   │   └── settings/
│   │       └── settings_screen.dart
│   │
│   └── main.dart               # App entry point, theme, Supabase init
│
├── supabase/
│   └── schema.sql              # PostgreSQL schema for all tables
│
├── test/
│   ├── task_reminder_model_test.dart
│   ├── reminder_inbox_screen_test.dart
│   └── widget_test.dart
│
├── pubspec.yaml
└── README.md
```

---

## 🤝 Contributing

Contributions are warmly welcomed! NeoFocus is a learning project and community improvements make it stronger.

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-amazing-feature
   ```
3. **Commit** your changes with a clear message
   ```bash
   git commit -m "feat: add your amazing feature"
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/your-amazing-feature
   ```
5. **Open a Pull Request** — describe what you built and why

### Contribution Guidelines
- Follow the existing code style (Manrope typography, `AppColors` tokens, `AppAnimations` durations)
- Use `Riverpod` for any new state — no `setState` in screens
- Keep widgets focused and composable
- Add tests for new model logic

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## 👤 Author

<div align="center">

**turjo410**

A passionate Flutter developer building premium, production-quality mobile experiences.

[![GitHub](https://img.shields.io/badge/GitHub-turjo410-181717?style=for-the-badge&logo=github)](https://github.com/turjo410)

*Star ⭐ the repo if NeoFocus inspired you!*

</div>

---

<div align="center">

*Built with ❤️ using Flutter · Powered by Supabase · Designed for focus.*

</div>
