# TaytThreads Frontend

## Project Overview

TaytThreads is a 2nd-hand clothes e-commerce platform connecting buyers and sellers. This repository contains the frontend application built with React.js and TypeScript.

## Project Structure

- **Project Management:** [Jira Board](https://taytthreads.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog)
- **Design System:** [Figma File](https://www.figma.com/design/THA9ONk6yAnemaLDnYq8kf/TaytThreads?node-id=0-1&t=7O1XmCEf7bvyuFjx-1)

## Tech Stack

- **Framework:** React.js
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **HTTP Client:** Axios

## Prerequisites

- Node.js >= 16.x
- npm >= 8.x or yarn >= 1.22.x

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/taytthreads-frontend.git
   cd taytthreads-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root based on `.env.example` and fill in the required values:

   ```env
   VITE_API_URL=https://api.taytthreads.com
   VITE_AUTH_CLIENT_ID=YOUR_COGNITO_CLIENT_ID
   ```

## Available Scripts

- `npm run dev` - Start the development server on [http://localhost:3000](http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier

## Folder Breakdown

```plaintext
src/
├── assets/           # Images, fonts, and other static files
├── components/       # Reusable UI components
├── pages/            # Route-based pages
├── services/         # API client and business logic
├── stores/           # State management (e.g., Zustand/Redux)
├── styles/           # Global styles, theme, and utility classes
├── utils/            # Helper functions and constants
├── App.tsx           # Application root
├── index.tsx         # Entry point
└── vite.config.ts    # Vite configuration
```

- **assets/**: Stores static assets like images and icons.
- **components/**: Small, reusable UI pieces (buttons, inputs, cards).
- **pages/**: Top-level pages mapped to routes (e.g., Home, Product, Dashboard).
- **services/**: API calls and data-fetching logic.
- **stores/**: Global state setup.
- **styles/**: Global CSS and Tailwind configuration overrides.
- **utils/**: General helpers and constants.

## Contributing

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit:

   ```bash
   git commit -m "feat: add your feature description"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request and request review.
