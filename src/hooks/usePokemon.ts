import { useEffect, useMemo, useState } from "react";
import { fetchPokemonList, fetchPokemonByUrl } from "@/lib/api";
import type { PokemonListItem } from "@/types/pokemon";

export function usePokemon() {
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const list = await fetchPokemonList();
        // Fetch all 151 detail records in parallel
        const details = await Promise.all(list.map((p) => fetchPokemonByUrl(p.url)));
        const enriched: PokemonListItem[] = details.map((p) => ({
          id: p.id,
          name: p.name,
          sprite: p.sprites.front_default,
          types: p.types.map((t) => t.type.name),
        }));
        setAllPokemon(enriched);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const filteredPokemon = useMemo(() => {
    return allPokemon.filter((p) => {
      const matchesName = p.name.includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "" || p.types.includes(selectedType);
      return matchesName && matchesType;
    });
  }, [allPokemon, searchTerm, selectedType]);

  return { filteredPokemon, isLoading, setSearchTerm, setSelectedType };
}
