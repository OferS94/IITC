import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SinglePokemon = () => {
  const { name } = useParams(); // Get Pokémon name from the URL
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemonDetails(data);
    };

    fetchPokemonDetails();
  }, [name]);

  return pokemonDetails ? (
    <div style={{ padding: "20px", textAlign: "center", alignItems: "center", justifyContent: "center"}}>
      <h1>{pokemonDetails.name}</h1>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={pokemonDetails.name}
        style={{ height: "150px" }}
      />
      <h2>Types:</h2>
      <ul>
        {pokemonDetails.types.map((typeInfo, index) => (
          <li key={index}>{typeInfo.type.name}</li>
        ))}
      </ul>
      <h2>Abilities:</h2>
      <ul>
        {pokemonDetails.abilities.map((abilityInfo, index) => (
          <li key={index}>{abilityInfo.ability.name}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default SinglePokemon;
