export const fetchPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  return res.json();
};

export const fetchTypes = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  return res.json();
};

export const fetchPokemonByName = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
};
