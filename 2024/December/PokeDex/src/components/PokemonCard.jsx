import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
  const navigate = useNavigate(); // Initialize navigation hook

  const fetchPokemon = async () => {
    const { data } = await axios.get(pokemon.url);
    setPokemonData(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleCardClick = () => {
    navigate(`/pokemons/${pokemonData.name}`); // Navigate to SinglePokemon page
  };

  return (
    pokemonData.name && (
      <div
        onClick={handleCardClick} // Add click handler
        style={{
          backgroundColor: "#f3f3f3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "25vw",
          height: "25vh",
          borderRadius: "10px",
          border: "1px solid #0c0c0c",
          padding: "10px",
          cursor: "pointer", // Indicate clickable element
        }}
      >
        <img
          src={pokemonData?.sprites?.front_default}
          alt={pokemonData.name}
          style={{ marginTop: "10px" }}
        />
        <h4 style={{ marginBottom: "10px" }}>{pokemonData.name}</h4>
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {pokemonData.types?.map((typeInfo, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                padding: "5px 10px",
                fontSize: "0.9em",
                textTransform: "capitalize",
              }}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      </div>
    )
  );
};

export default PokemonCard;
