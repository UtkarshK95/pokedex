# Pokédex

A responsive Pokémon browser built with Next.js 15 and the PokéAPI. Browse all 151 original Pokémon, filter by type, search by name, and view individual detail pages.

## Overview

This project uses the Next.js App Router with a hybrid rendering model: the home page is a client component that fetches and filters data in the browser, while each Pokémon detail page is a server component rendered on demand. All PokéAPI responses are cached for 24 hours via the Next.js fetch cache.

## Features

- Real-time search by Pokémon name
- Filter by type via dropdown (all 18 types)
- Pokémon cards with sprite, ID, name, and type badges
- Detail page with height, weight, and type information
- Loading spinner and empty state for the list view
- Accessible form controls with labels and focus styles
- Proper 404 handling for unknown Pokémon routes
- Responsive grid layout (2 to 5 columns)

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15.5.12 (App Router) |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Data source | PokéAPI v2 |
| Font | Geist (via next/font) |
| Package manager | npm |

## Project Structure

```
src/
  app/
    layout.tsx              Root layout — metadata, font, global styles
    page.tsx                Home page — search, filter, Pokémon grid
    pokemon/[name]/
      page.tsx              Detail page — server component
  components/
    Breadcrumb.tsx          Navigation breadcrumb
    PokemonCard.tsx         Card with sprite, ID, name, type badges
    SearchForm.tsx          Name search input and type dropdown
  hooks/
    usePokemon.ts           Fetches and filters all 151 Pokémon client-side
  lib/
    api.ts                  PokéAPI fetch functions with error handling and cache hints
  types/
    pokemon.ts              Shared TypeScript interfaces
  styles/
    globals.css             Tailwind entry point and base resets
```

## Installation

```bash
git clone https://github.com/UtkarshK95/pokedex.git
cd pokedex
npm install
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Architecture Notes

- The home page fetches the list of 151 Pokémon and then resolves all 151 detail records in parallel via `Promise.all`. This trades initial load time for zero per-card waterfalls and enables full client-side filtering without additional requests.
- PokéAPI fetch calls in `lib/api.ts` use `next: { revalidate: 86400 }` so repeated builds and deployments do not re-fetch static data unnecessarily.
- The detail page uses `notFound()` from `next/navigation` to return a proper 404 for invalid Pokémon names rather than crashing with a 500.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes and open a pull request

## Support

- GitHub: [https://github.com/UtkarshK95](https://github.com/UtkarshK95)
- Buy Me a Coffee: [https://buymeacoffee.com/utkarshk95](https://buymeacoffee.com/utkarshk95)

## License

MIT © Utkarsh
