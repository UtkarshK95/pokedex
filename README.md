<div align="center">

# 🔴 Pokédex

**Browse, search, and explore all 151 original Pokémon.**

A responsive, blazing-fast Pokédex built with Next.js 15 and the PokéAPI — featuring real-time search, type filtering, and detailed individual pages with a hybrid rendering model.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pokedex--uk.vercel.app-blue?style=for-the-badge&logo=vercel)](https://pokedex-uk.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✨ Features

- **Real-time Search** — Filter Pokémon by name instantly as you type
- **Type Filtering** — Dropdown filter across all 18 Pokémon types
- **Pokémon Cards** — Sprite, ID, name, and type badges at a glance
- **Detail Pages** — Height, weight, types, and full info per Pokémon
- **Breadcrumb Navigation** — Seamless navigation between list and detail views
- **Loading & Empty States** — Spinner and fallback UI for the list view
- **Proper 404 Handling** — Invalid Pokémon routes return a clean 404
- **Responsive Grid** — Adapts from 2 to 5 columns across screen sizes

---

## 🛠️ Tech Stack

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Framework      | Next.js 15.5 (App Router)         |
| UI Library     | React 19                          |
| Language       | TypeScript 5                      |
| Styling        | Tailwind CSS 4                    |
| Data Source    | PokéAPI v2                        |
| Font           | Geist (via `next/font`)           |
| Deployment     | Vercel                            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+

### Installation

```bash
git clone https://github.com/UtkarshK95/pokedex.git
cd pokedex
npm install
```

### Run

```bash
npm run dev
```

App runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                # Root layout — metadata, font, global styles
│   ├── page.tsx                  # Home page — search, filter, Pokémon grid
│   └── pokemon/[name]/
│       └── page.tsx              # Detail page — server component
├── components/
│   ├── Breadcrumb.tsx            # Navigation breadcrumb
│   ├── PokemonCard.tsx           # Card with sprite, ID, name, type badges
│   └── SearchForm.tsx            # Name search input and type dropdown
├── hooks/
│   └── usePokemon.ts             # Fetches and filters all 151 Pokémon client-side
├── lib/
│   └── api.ts                    # PokéAPI fetch functions with error handling and cache hints
├── types/
│   └── pokemon.ts                # Shared TypeScript interfaces
└── styles/
    └── globals.css               # Tailwind entry point and base resets
```

---

## 🧪 Available Scripts

| Script            | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Start the development server   |
| `npm run build`   | Create a production build      |
| `npm run start`   | Start the production server    |
| `npm run lint`    | Run ESLint                     |

---

## 🏗️ Architecture Notes

- The home page fetches all 151 Pokémon and resolves their details in parallel via `Promise.all` — this trades initial load time for zero per-card waterfalls and enables full client-side filtering without additional requests
- PokéAPI fetch calls in `lib/api.ts` use `next: { revalidate: 86400 }` so repeated builds and deployments do not re-fetch static data unnecessarily
- The detail page uses `notFound()` from `next/navigation` to return a proper 404 for invalid Pokémon names rather than crashing with a 500

---

## ☕ Support the Project

- **GitHub:** [https://github.com/UtkarshK95/pokedex](https://github.com/UtkarshK95/pokedex)
- **Buy Me a Coffee:** [https://buymeacoffee.com/utkarshk95](https://buymeacoffee.com/utkarshk95)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/UtkarshK95">Utkarsh Katiyar</a>
</div>
