# Pokédex

Pokédex is a responsive Pokémon search app built using Next.js, Tailwind CSS, and the PokéAPI. It lets users easily search Pokémon by type or name, view Pokémon details, and navigate smoothly through intuitive breadcrumbs.

## 🚀 Features

- **Pokémon Search**: Search Pokémon by name.
- **Type Filtering**: Filter Pokémon by type.
- **Pokémon Cards**: Display results as interactive Pokémon cards.
- **Dynamic Routes**: Individual detailed pages for each Pokémon.
- **Breadcrumb Navigation**: Clear navigation showing current path.
- **Responsive Design**: Mobile-friendly UI.
- **Server-side Rendering**: Optimized performance with Next.js.

## 🛠️ Tech Stack

- Next.js (App Router)
- Tailwind CSS
- PokéAPI
- TypeScript (optional, but recommended)

## 📂 Project Structure
```
pokedex-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── pokemon/
│       └── [name]/page.tsx
├── components/
│   ├── PokemonCard.tsx
│   ├── SearchForm.tsx
│   └── Breadcrumb.tsx
├── hooks/
│   └── usePokemon.ts
├── lib/
│   └── api.ts
└── styles/
    └── globals.css
```

## 🛠️ Tech Stack

- Next.js 14
- Tailwind CSS
- React Server & Client Components
- Custom Hooks
- Server Actions
- Dynamic Routing

## ⚙️ Installation & Setup

Clone and install dependencies:

```bash
git clone <your_repo_url>
cd pokedex-app
npm install
npm run dev
```

Visit the app at `http://localhost:3000`

## 🎨 UI and Design

The app UI is responsive and optimized for mobile views using Tailwind CSS.

## 📌 API Reference

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)

## 🧑‍💻 Author

- **Utkarsh Katiyar**

## 📄 License

Licensed under the MIT License.
