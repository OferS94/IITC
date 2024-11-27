import { useState, useEffect } from "react";
import axios from 'axios'
import PokeSlide from "../Components/PokeSlide.jsx";
/////////////////////////////////////////////

const PokeData = () => {
    const [pokemonList , setPokemonList] = useState([]);

    const FetchPokemons = async () => {
        try {
            const fetchedPokemon = [];
            for (let i = 1 ; i <= 125 ; i++) {
                const response = await axios.get( 
                    `https://pokeapi.co/api/v2/pokemon/${i}`
                );
                fetchedPokemon.push(response.data);
            }
            setPokemonList(fetchedPokemon);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        FetchPokemons();
    } , []);

    return (
        <>
        <h1 className="hl">
        <span className="p"> P</span>okedex
      </h1>
      <div className="wrapImg">
        <div className="pokeCon">
          {pokemonList.map((pokemon) => (
            <PokeSlide
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              sprite={
                pokemon.sprites.versions["generation-v"]["black-white"][
                  "animated"
                ]
                  ? pokemon.sprites.versions["generation-v"]["black-white"][
                      "animated"
                    ].front_default
                  : pokemon.sprites.front_default
              }
            />
          ))}
        </div>
      </div>

        </>
    );
};

export default PokeData;