import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchPokemonByName } from "@/lib/api";
import Breadcrumb from "@/components/Breadcrumb";
import type { PokemonTypeSlot } from "@/types/pokemon";

type Props = {
  params: Promise<{ name: string }>;
};

export default async function PokemonDetailPage({ params }: Props) {
  const { name } = await params;

  let pokemon;
  try {
    pokemon = await fetchPokemonByName(name);
  } catch {
    notFound();
  }

  const sprite =
    pokemon.sprites.front_default;

  return (
    <main className="container mx-auto px-4 py-6 max-w-lg">
      <Breadcrumb name={name} />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h1 className="capitalize text-2xl font-bold text-slate-800">
            {name}
          </h1>
          <span className="text-slate-400 text-sm">
            #{String(pokemon.id).padStart(3, "0")}
          </span>
        </div>

        <div className="flex justify-center my-4">
          <Image
            src={sprite}
            alt={name}
            width={160}
            height={160}
            priority
            unoptimized
          />
        </div>

        <div className="flex gap-2 mb-4">
          {pokemon.types.map(({ type }: PokemonTypeSlot) => (
            <span
              key={type.name}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm capitalize text-slate-600"
            >
              {type.name}
            </span>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-slate-400 text-xs mb-1">Height</dt>
            <dd className="font-semibold text-slate-700">
              {(pokemon.height / 10).toFixed(1)} m
            </dd>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <dt className="text-slate-400 text-xs mb-1">Weight</dt>
            <dd className="font-semibold text-slate-700">
              {(pokemon.weight / 10).toFixed(1)} kg
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
