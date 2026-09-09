# Terepson Portfolio

A minimalist portfolio website for stylist and costume designer Jörgen Terepson, showcasing selected work across commercials, music videos, film, portraits and prints.

## About the project

This website was designed and developed as a custom portfolio experience with an editorial, fashion-focused visual direction.

The UI/UX, visual identity, layout, typography, navigation and interaction concepts were created specifically for this portfolio rather than based on a pre-existing website template.

A key part of the concept is the animated opening sequence: **TEREPSON** appears immediately in large typography while Jörgen Terepson's signature is progressively drawn on screen. Once the signature finishes, the intro transitions away to reveal the portfolio. The intro was developed as a custom interaction inspired by the feeling of an editorial fashion portfolio rather than a conventional website loading screen.

## Design & UX

The visual direction combines:

- Minimal editorial layout
- Strong oversized typography
- Black, white and cream tones with red accents
- Generous whitespace
- Grid-based portfolio galleries
- Fullscreen image viewing
- Responsive desktop and mobile layouts
- Motion used selectively to create a more distinctive experience

The UI/UX and interaction design were independently created for this project, including the overall page structure, navigation, category system, gallery behavior and animated intro.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS
- Vercel

## Features

- Responsive portfolio layout
- Animated introductory sequence
- Custom animated signature
- Category navigation
- Commercials portfolio
- Music Videos portfolio
- Film portfolio
- Portrait gallery
- Prints gallery
- Vimeo and YouTube video integration
- Fullscreen image lightbox
- Responsive mobile navigation
- Lazy-loaded images
- Optimized web images
- Automatic production deployment through Vercel

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Intro.tsx
│   ├── VideoCard.tsx
│   ├── ImageGallery.tsx
│   ├── CategoryOverview.tsx
│   ├── About.tsx
│   └── Footer.tsx
└── data/
    └── projects.ts

public/
├── projects/
│   ├── commercials/
│   ├── music-videos/
│   ├── film/
│   ├── portraits/
│   └── prints/
└── signature/
```

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Deployment

The production website is deployed with Vercel.

Changes pushed to the `main` branch are automatically deployed to production.

## Author

Designed and developed by Maria Port
