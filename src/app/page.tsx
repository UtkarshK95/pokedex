"use client";
import SearchForm from "@/components/SearchForm";
import PokemonCard from "@/components/PokemonCard";
import { usePokemon } from "@/hooks/usePokemon";

export default function Home() {
  const { filteredPokemons, filterPokemon } = usePokemon();

  return (
    <main className="container mx-auto">
      <SearchForm onFilter={filterPokemon} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}
