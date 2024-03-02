import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_LIST_NAME = gql`
  query PokemonNameList {
    pokemon_v2_pokemon {
      name
      id
    }
  }
`;

const PokemonList = () => {
  const { loading, data, error } = useQuery(GET_POKEMON_LIST_NAME);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return data.pokemon_v2_pokemon.map((pokemon) => (
    <div key={pokemon.id}>
      {pokemon.id} {pokemon.name}
    </div>
  ));
};

export default PokemonList;
