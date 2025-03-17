import Link from "next/link";

const PokemonCard = ({ pokemon }: any) => (
  <Link
    href={`/pokemon/${pokemon.name}`}
    className="border rounded p-4 hover:bg-gray-100"
  >
    <h3 className="capitalize text-lg">{pokemon.name}</h3>
  </Link>
);

export default PokemonCard;
