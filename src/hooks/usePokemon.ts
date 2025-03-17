import { useEffect, useState } from "react";
import { fetchPokemons } from "@/lib/api";

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokemonList(data.results);
      setFilteredPokemons(data.results);
    };
    getPokemons();
  }, []);

  const filterPokemon = (type: string, searchTerm: string) => {
    let filtered = pokemonList;

    if (searchTerm) {
      filtered = filtered.filter((pokemon: any) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPokemons(filtered);
  };

  return { filteredPokemons, filterPokemon };
};
