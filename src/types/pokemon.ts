export interface NamedResource {
  name: string;
  url: string;
}

export interface PokemonTypeSlot {
  slot: number;
  type: NamedResource;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonStat {
  base_stat: number;
  stat: NamedResource;
}

/** Full detail shape returned by /pokemon/:name */
export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonTypeSlot[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
}

/** Enriched list item stored in usePokemon state */
export interface PokemonListItem {
  id: number;
  name: string;
  sprite: string;
  types: string[];
}
