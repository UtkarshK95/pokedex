"use client";
import SearchForm from "@/components/SearchForm";
import PokemonCard from "@/components/PokemonCard";
import { usePokemon } from "@/hooks/usePokemon";

export default function Home() {
  const { filteredPokemon, isLoading, setSearchTerm, setSelectedType } =
    usePokemon();

  return (
    <main className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Pokédex</h1>
        <p className="text-slate-500 text-sm mt-1">
          Original 151 Pokémon
        </p>
      </header>

      <SearchForm
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
      />

      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-red-500" />
        </div>
      ) : filteredPokemon.length === 0 ? (
        <p className="py-24 text-center text-slate-400">No Pokémon found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredPokemon.map((pokemon, index) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} priority={index < 10} />
          ))}
        </div>
      )}
    </main>
  );
}
