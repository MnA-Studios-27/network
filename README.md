<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Network by MNA Studios

A modern landing page for MNA Studios Network - transforming dreamers into creators and building creator-led service agencies.

## Features

- 🎨 Modern, responsive design with Framer Motion animations
- 💬 AI-powered Pathfinder chatbot using Gemini 2.0 Flash Lite
- 🚀 Built with React, TypeScript, and Vite
- 📱 Fully responsive across all devices

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling (via inline classes)
- **Gemini AI** - Chatbot intelligence
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd network-by-mna-studios
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Gemini API key to `.env`:
```
GEMINI_API_KEY=your_actual_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. Push your code to GitHub/GitLab/Bitbucket

2. Import your repository on [Vercel](https://vercel.com)

3. Configure environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add: `GEMINI_API_KEY` = your Gemini API key

4. Deploy! Vercel will automatically detect Vite and configure the build.

### Environment Variables

Make sure to add the following environment variable in your Vercel project settings:

- `GEMINI_API_KEY` - Your Google Gemini API key

## Project Structure

```
network-by-mna-studios/
├── components/          # React components
│   ├── Creators.tsx    # Active residents section
│   ├── Features.tsx    # Features section
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Journey.tsx     # Journey stages
│   ├── Navbar.tsx      # Navigation bar
│   ├── Pathfinder.tsx  # AI chatbot section
│   └── ...
├── services/           # Services and utilities
│   └── geminiService.ts # Gemini AI integration
├── public/             # Static assets
│   └── images/         # Image files
├── App.tsx             # Main app component
├── constants.tsx       # App constants and data
├── types.ts            # TypeScript types
├── index.tsx           # App entry point
└── vite.config.ts      # Vite configuration
```

## Features Overview

### Active Residents Section
Showcases the current cohort of creators in the MNA Studios network with their Instagram and agency links.

### AI Pathfinder
An intelligent chatbot powered by Gemini 2.0 Flash Lite that helps users discover their creative path and potential within the Network ecosystem.

### Journey Pipeline
Visual representation of the transformation journey from Dreamer to Product/Tech company.

## License

Private - All rights reserved by MNA Studios

## Support

For support, contact MNA Studios or open an issue in the repository.

---

View original AI Studio app: https://ai.studio/apps/drive/1cuFEBwn4wlN23KGHnixk6CRxbfoKHzgf
## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
