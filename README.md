<h1 align="center">
  <br>
  GROCERY LIST APP 🛒
  <br>
</h1>

<p align="center">
  A full-featured grocery management app with authentication, real-time updates, and insightful analytics. Built with React Native, Expo, Clerk, PostgreSQL, and Drizzle ORM.
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/burakorkmez/grocify-expo/master/assets/images/screenshot-for-readme.png" alt="Banner" width="900">
</div

---

## 🔋 Features

- 🔐 **Authentication** – Secure login with Google, Apple & GitHub via Clerk.
- 📝 **Planner Screen** – Add new grocery items to your list.
- ✅ **Mark as Purchased** – Toggle item completion status with check functionality.
- 🔢 **Update Quantities** – Adjust item quantities on the fly.
- 🗑️ **Delete Items** – Remove individual items from the list.
- 🧹 **Clear Completed** – Delete all purchased items with a single button.
- 📊 **Insights Dashboard** – View profile information and usage analytics.
- 🚪 **Secure Logout** – Fully protected logout flow.
- 💬 **User Feedback** – Built-in button to collect feature suggestions & bug reports.
- 🎨 **Liquid Glass Tab Effect** – iOS-style native tab bar with modern visual effects.

## ⚙️ Tech Stack & Architecture

- **Frontend**: React Native with Expo – cross-platform mobile app (iOS & Android).
- **Authentication**: Clerk – handles Google, Apple, and GitHub login.
- **Backend & Database**: PostgreSQL hosted on Neon – persistent cloud database.
- **ORM**: Drizzle ORM – type-safe database queries.
- **Styling**: NativeWind (TailwindCSS for React Native).
- **Navigation**: Expo Native Tabs – liquid glass iOS tab effect.
- **State Management**: Zustand – global state management.
- **Error Monitoring**: Sentry – optional error tracking.

## 🤸 Quick Start

### Prerequisites

- Node.js (v16+)
- Expo CLI installed globally (`npm install -g expo-cli`)
- PostgreSQL database (Neon provides a free tier)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/grocery-list-app.git
   cd grocery-list-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add:

   ```env
   DATABASE_URL=your_db_url
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   EXPO_PUBLIC_SENTRY_DSN=your_sentry_dsn
   SENTRY_AUTH_TOKEN=your_sentry_auth_token
   ```

4. Start the development environment:

   ```bash
   npx expo run:ios    # For iOS
   # OR
   npx expo run:android # For Android
   ```

## 📱 Platform Support

- iOS
- Android
