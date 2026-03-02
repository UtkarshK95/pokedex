import type { NamedResource, Pokemon } from "@/types/pokemon";

/** List of the first 151 Pokémon (name + url only). Cached for 24 h. */
export async function fetchPokemonList(): Promise<NamedResource[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`Failed to fetch Pokémon list: ${res.status}`);
  const data = await res.json();
  return data.results as NamedResource[];
}

/** All available types. Cached for 24 h. */
export async function fetchTypes(): Promise<NamedResource[]> {
  const res = await fetch("https://pokeapi.co/api/v2/type", {
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`Failed to fetch types: ${res.status}`);
  const data = await res.json();
  return data.results as NamedResource[];
}

/** Full Pokémon detail by name or id. */
export async function fetchPokemonByName(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error(`Pokémon not found: ${name}`);
  return res.json() as Promise<Pokemon>;
}

/** Full Pokémon detail by its direct API url. */
export async function fetchPokemonByUrl(url: string): Promise<Pokemon> {
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`Failed to fetch Pokémon from ${url}`);
  return res.json() as Promise<Pokemon>;
}
