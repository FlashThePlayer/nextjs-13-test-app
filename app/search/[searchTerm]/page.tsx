import { Pokemon } from "../../../pokemonApi";
import { SearchTermPageProps } from "../../../types";
import { notFound } from "next/navigation";
import PokemonCard from "./PokemonCard";

const search = async (searchTerm: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
  );

  if (response.status === 404) return null;

  const result: Pokemon = await response.json();
  return result;
};

const SearchTermPage = async ({
  params: { searchTerm },
}: SearchTermPageProps) => {
  const pokemon = await search(searchTerm);

  if (!pokemon) return notFound();

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};

export default SearchTermPage;
