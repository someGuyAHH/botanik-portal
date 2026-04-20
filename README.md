# Anadolu Botanik Portalı

## Overview
An interactive React web application featuring a clickable map of Turkey where users can explore endemic plants native to each of the 81 provinces. Includes a backend API for adding new plants to any province.

## Tech Stack
- **Frontend:** React 19 + Vite 8
- **Backend:** Express 5 (Node.js)
- **Map Library:** turkey-map-react
- **Styling:** CSS with Google Fonts (Playfair Display + Inter)
- **Package Manager:** npm
- **Concurrency:** concurrently (runs frontend + backend together)

## Project Structure
```
src/
  main.jsx            # App entry point
  App.jsx             # Main component with map logic, stats, backend integration
  CityPanel.jsx       # Province detail panel with plant list and "Add Plant" button
  AddPlantModal.jsx   # Modal form for adding new plants via backend API
  App.css             # All styles (design system)
  index.css           # Global reset + Google Fonts import
  data/
    plants.js         # Static endemic plant data organized by province
  assets/             # Images and icons
server/
  index.js            # Express API server (port 3001)
  db.json             # JSON file database for user-added plants
public/               # Static assets (favicon, icons)
index.html            # HTML entry point
vite.config.js        # Vite config (port 5000, proxy /api → 3001, allowedHosts: true)
```

## API Endpoints (backend port 3001, proxied via Vite)
- `GET /api/plants` — All user-added plants (JSON)
- `GET /api/plants/:city` — User-added plants for a specific city
- `POST /api/plants/:city` — Add a new plant to a city `{ ad, yoresel, latince, amac }`
- `DELETE /api/plants/:city/:index` — Remove a user-added plant

## Development
- Run both: `npm run dev` (Vite on 5000 + Express on 3001 concurrently)
- Frontend only: `npm run dev:frontend`
- Backend only: `npm run dev:backend`
- Build: `npm run build`

## Deployment
- Type: Static site
- Build command: `npm run build`
- Public directory: `dist`

## Design System
- Header: dark green gradient with stats (81 İl, 7 Bölge, N Bitki)
- Fonts: Playfair Display (headings), Inter (body)
- Color coding: 7 geographic regions each with a distinct color
- Plant cards: hover animations, dashed border for user-added plants
- Modals: blur overlay with slide-up animation
