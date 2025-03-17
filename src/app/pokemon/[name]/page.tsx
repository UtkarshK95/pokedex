import { fetchPokemonByName } from "@/lib/api";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

type PokemonDetailProps = {
  params: Promise<{ name: string }> | { name: string };
};

const PokemonDetailPage = async ({ params }: PokemonDetailProps) => {
  // Await params explicitly here to safely use them
  const { name } = await params;
  const pokemon = await fetchPokemonByName(name);

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb name={name} />
      <h1 className="capitalize text-2xl font-bold mb-4">{name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={name}
        width={200}
        height={200}
        priority
      />
      <div className="mt-4">
        <p>
          <strong>Height:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Type:</strong>{" "}
          {pokemon.types.map((type: any) => type.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
