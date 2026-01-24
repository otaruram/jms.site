# PT Jayata Medika Sentosa - Official Website

![PT Jayata Medika Sentosa](fe/public/jms.png)

Modern, high-performance corporate website for **PT Jayata Medika Sentosa**, a trusted supplier of hospital linen and professional window blinds in Indonesia. This project features a clean, clinical aesthetic ("Clean & Clinical High-End"), universal language support (ID/EN), and a responsive design tailored for healthcare professionals.

## 🚀 Features

-   **Modern UI/UX**: Designed with a "Clean & Clinical" aesthetic using **Tailwind CSS**.
-   **Universal Language**: Complete English & Indonesian translation support via `LanguageContext`.
-   **Dark/Light Mode**: Seamless theme switching with persistent user preference.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
-   **Performance**: Built with **Vite** for lightning-fast scanning and reloading.
-   **Key Sections**:
    -   **Hero**: Immersive background with auto-typing headline.
    -   **Products**: Interactive catalog for Hospital Linen & Window Blinds.
    -   **Comparison**: Minimalist table comparing product specifications.
    -   **Problem/Solution**: Addressing common healthcare facility challenges.
-   **UX Enhancements**:
    -   Professional pulsed loading screen.
    -   Smooth page transitions & auto-scroll to top.
    -   Interactive card hover effects.

## 🛠 Tech Stack

-   **Framework**: [React](https://reactjs.org/) (Vite)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Animation**: CSS3 Transitions & Keyframes

## 📂 Project Structure

 The project source code is located in the `fe/` directory.

```bash
fe/
├── public/          # Static assets (images, icons)
├── src/
│   ├── components/  # Reusable UI components (Header, Footer, Sections)
│   ├── contexts/    # Global state (LanguageCode)
│   ├── pages/       # Main page views
│   ├── lib/         # Utilities (Tailwind merge, etc.)
│   └── App.tsx      # Main application entry
└── index.html       # Entry HTML file
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/otaruram/jms.site.git
    cd jms.site
    ```

2.  Navigate to the frontend directory:
    ```bash
    cd fe
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## 🚢 Deployment (Vercel)

This project is tailored for deployment on **Vercel**.

1.  Push this repository to GitHub.
2.  Log in to [Vercel](https://vercel.com/) and "Add New Project".
3.  Import the **jms.site** repository.
4.  **Important**: In the Vercel project settings, set the **Root Directory** to `fe`.
    -   Vercel will automatically detect Vite and configure the build settings (`npm run build`).
5.  Click **Deploy**.

## 📄 License

© 2024 PT Jayata Medika Sentosa. All rights reserved.
