import Image from "next/image";
import Link from "next/link";
import type { PokemonListItem } from "@/types/pokemon";

interface Props {
  pokemon: PokemonListItem;
  priority?: boolean;
}

const PokemonCard = ({ pokemon, priority = false }: Props) => (
  <Link
    href={`/pokemon/${pokemon.name}`}
    className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
  >
    <span className="self-end text-xs text-slate-400">
      #{String(pokemon.id).padStart(3, "0")}
    </span>
    <Image
      src={pokemon.sprite}
      alt={pokemon.name}
      width={96}
      height={96}
      priority={priority}
      unoptimized
    />
    <h3 className="capitalize font-semibold text-slate-800">{pokemon.name}</h3>
    <div className="flex gap-1 flex-wrap justify-center">
      {pokemon.types.map((type) => (
        <span
          key={type}
          className="rounded-full bg-slate-100 px-2 py-0.5 text-xs capitalize text-slate-600"
        >
          {type}
        </span>
      ))}
    </div>
  </Link>
);

export default PokemonCard;
