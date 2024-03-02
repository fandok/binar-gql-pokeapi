import { gql, useQuery } from "@apollo/client";

const GET_POKEMON_DETAIL = gql`
  query PokemonDetail {
    pokemon_v2_pokemon(where: { id: { _eq: 1 } }) {
      pokemon_v2_pokemonsprites(where: { id: { _eq: 1 } }) {
        id
        sprites
      }
    }
  }
`;

const PokemonDetail = () => {
  const { loading, data, error } = useQuery(GET_POKEMON_DETAIL);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <img
      src={
        data.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0].sprites.other[
          "official-artwork"
        ].front_default
      }
      alt="pokemon-picture"
    />
  );
};

export default PokemonDetail;
