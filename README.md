
# AiTrip Planner

AiTrip Planner is a web-based application that helps users plan and track their trips. It utilizes Firebase for data storage, authentication, and retrieval of trip data, with a focus on fetching trips specific to the logged-in user. The app is built using React, Firebase, TailwindCSS, and other modern web technologies.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Fetches user-specific trip data from Firebase Firestore based on the email saved in `localStorage`.
- **Firebase Integration**: Uses Firebase Firestore for database and real-time updates.
- **TailwindCSS for Styling**: Tailored styles and animations with TailwindCSS and `tailwindcss-animate`.
- **React-Router for Navigation**: Handles routing between different pages in the app.
- **Google OAuth Integration**: Allows users to log in using their Google accounts via `@react-oauth/google`.
- **Responsive Design**: The app is mobile-friendly and adapts well to different screen sizes.
- **Notifications**: Provides user feedback using the `sonner` toast library.

## Technologies

- **Frontend**: React, React-Router, React Icons
- **Styling**: TailwindCSS, Tailwind Merge, `tailwindcss-animate`
- **Backend**: Firebase Firestore for storing and fetching trip data
- **OAuth**: Google OAuth for user authentication
- **Build Tools**: Vite for development and production builds
- **Utilities**: Axios for HTTP requests, clsx for conditional classNames, ESLint for linting

## Getting Started

To get started with the AiTrip Planner project, follow these steps.

### Prerequisites

- Node.js (v18 or later)
- Firebase account with Firestore database setup
- Google OAuth credentials

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ai-trip-planner.git
   cd ai-trip-planner
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Firebase Setup**:

   - Set up Firebase Firestore for your project.
   - Add your Firebase configuration to the project by creating a `FirebaseConfig.js` file in `src/services/` and adding your Firebase credentials.

   ```javascript
   // src/services/FirebaseConfig.js
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID'
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file and add your environment variables if needed (for example, for Google OAuth, API keys, etc.).

5. **Run the development server**:

   ```bash
   npm run dev
   ```

6. **Build for production**:

   ```bash
   npm run build
   ```

## Scripts

- **`npm run dev`**: Runs the app in development mode using Vite.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Runs ESLint to check for linting errors.
- **`npm run preview`**: Previews the production build locally.

## Project Structure

```bash
ai-trip-planner/
├── public/                  # Public files (e.g., index.html)
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components for routing
│   ├── services/            # Firebase config and API services
│   ├── styles/              # Global styles and TailwindCSS setup
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── .eslintrc.js             # ESLint configuration
├── package.json             # Project metadata and dependencies
├── postcss.config.js        # PostCSS and TailwindCSS configuration
├── tailwind.config.js       # TailwindCSS configuration
└── vite.config.js           # Vite configuration
```

## Contributing

We welcome contributions to enhance this project. To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Made with 💜 by [Your Name](https://github.com/yourusername)
