# KnowFlow Promo Landing Page

A modern, conversion-focused landing page for KnowFlow - a personal knowledge management system that combines visual knowledge graphs, spaced repetition, and AI assistance.

## Features

- 🎨 Modern, clean design inspired by Open Notebook and Obsidian
- 📱 Mobile-first responsive layout
- ⚡ Built with Next.js 14, TypeScript, and TailwindCSS
- 🎭 Smooth animations with Framer Motion
- 🧩 shadcn/ui components for consistent UI
- 🎯 Conversion-optimized sections

## Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
knowflow_promo/
├── pages/
│   ├── _app.tsx          # App wrapper with global styles
│   ├── _document.tsx     # Document structure
│   └── index.tsx         # Main landing page
├── components/
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts          # Utility functions
├── styles/
│   └── globals.css       # Global styles with Tailwind
└── public/               # Static assets
```

## Landing Page Sections

1. **Hero Section** - Strong headline with CTA buttons
2. **Problem → Agitation → Solution** - Emotional journey
3. **How KnowFlow Works** - 3-step process explanation
4. **Main Features** - Comprehensive feature grid
5. **Who This Is For** - Target audience breakdown
6. **Comparison Table** - vs Notion/Anki/Obsidian
7. **Waitlist CTA** - Email capture form
8. **Footer** - Links and company info

## Customization

### Colors

Edit `tailwind.config.ts` and `styles/globals.css` to customize the color scheme.

### Content

All copy and content can be edited in `pages/index.tsx`.

## License

MIT

