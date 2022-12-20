import { Pokemon } from "../../../pokemonApi";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pokemon.name}</div>
          <p className="text-gray-700 text-base">
            ID: {pokemon.id}
            <br />
            Base experience: {pokemon.base_experience}
            <br />
            Height: {pokemon.height}
            <br />
            Weight: {pokemon.weight}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </span>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
