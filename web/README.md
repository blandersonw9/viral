# Viral App

A modern web application built with Next.js and Firebase, featuring Google Authentication and a responsive sidebar layout.

## Features

- ✅ Google Authentication with Firebase
- ✅ Responsive sidebar navigation
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript support
- ✅ Static export for Firebase Hosting
- ✅ Dark/Light mode support

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing project
3. Go to Project Settings > General > Your apps
4. Add a web app and copy the configuration
5. Create a `.env.local` file in the `web` directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Enable Google Authentication

1. In Firebase Console, go to Authentication > Sign-in method
2. Enable Google provider
3. Add your domain to authorized domains

### 3. Development

```bash
cd web
npm install
npm run dev
```

### 4. Build & Deploy

```bash
npm run build
firebase deploy
```

## Project Structure

```
web/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   │   ├── ui/             # UI components (Button, etc.)
│   │   ├── Sidebar.tsx     # Main sidebar component
│   │   └── MainLayout.tsx  # Layout wrapper
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   └── lib/                # Utilities and configs
│       ├── firebase.ts     # Firebase configuration
│       └── utils.ts       # Utility functions
├── docs/designs/           # Figma designs and assets
└── public/                 # Static assets
```

## Components

### Sidebar
- Navigation menu with icons
- User profile section
- Sign out functionality
- Responsive design

### Authentication
- Google OAuth integration
- Protected routes
- User state management
- Loading states

## Next Steps

1. Add your Firebase configuration
2. Customize the sidebar menu items
3. Add more pages and features
4. Implement your specific business logic
5. Deploy to Firebase Hosting

## Design Assets

Design files are stored in `docs/designs/` folder. Use these as reference for:
- Layout structure
- Color schemes
- Component styling
- User flow