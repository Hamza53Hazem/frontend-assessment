# Team Directory Application

A modern, responsive Team Directory application built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates state management, complex data handling, and internationalization best practices.

## 🚀 Features

-   **Data Handling**: Mock GraphQL implementation using custom hooks with simulated network latency.
-   **State Management**: `Zustand` for global state (filters, pagination, sorting).
-   **UI Components**: Built with `Shadcn/UI` and `Tailwind CSS` for a clean, accessible interface.
-   **Data Table**: `TanStack Table v8` implementation with natural sorting and custom cell rendering.
-   **Internationalization**: Full English/Arabic (RTL) support using `next-intl`.
-   **View Modes**: Toggle between Grid and Table views.

## 🛠️ Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS + Shadcn UI
-   **State**: Zustand
-   **Table Logic**: TanStack Table v8
-   **I18n**: next-intl

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone [YOUR_REPO_URL]
    cd team-directory
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the application**
    Visit `http://localhost:3000` to select a language.

## 🧠 Design Decisions & Tradeoffs

### 1. State Management (Zustand)
I chose Zustand over Redux or Context API because of its minimal boilerplate and performance. It allows us to decouple the filter logic from the UI components, making the `TeamFilters` and `TeamTable` components pure and easier to test.

### 2. Data Simulation
Since no backend was provided, I implemented a `useTeamMembers` hook that mimics a GraphQL query. It includes:
-   Artificial delay (800ms) to demonstrate loading skeletons.
-   Server-side style filtering and pagination logic handled within the hook.

### 3. Internationalization (i18n)
Used `next-intl` with Middleware for seamless routing (`/en/...` and `/ar/...`). The application automatically handles text direction (LTR/RTL) based on the locale, ensuring a native experience for Arabic users.

### 4. Component Strategy
I used a "Headless" approach for the table (TanStack) combined with a component library (Shadcn) for styling. This gives us full control over the sorting logic (e.g., natural sorting for alpha-numeric names) while maintaining a consistent design system.

## ⚠️ Known Limitations
-   **Data Persistence**: Since this uses mock data, refreshing the page resets the data to the initial state. In a production app, this would connect to a real GraphQL endpoint.
-   **Images**: Using `pravatar.cc` for random avatars. Occasionally these external images may load slowly depending on the provider.