// import { useState, useEffect } from "react";
// import axios from "axios";

// const PokeSlide = ({ name, url }) => {
//   const [pokemon, setPokemon] = useState(null);

//   const fetchData = async () => {
//     try {
//       const { data } = await axios.get(url);
//       setPokemon(data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     pokemon && (
//       <div>
//         <h1>{name}</h1>
//           <ul>
//             {pokemon.types.map(({ type }) => (
//               <li key={type.name}>{type.name}</li>
//             ))}
//           </ul>
//           <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
//       </div>
//     )
//   );
// };

// export default PokeSlide

import { useState, useEffect } from "react";
import axios from "axios";

const PokeSlide = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <div>
        <h1>{name}</h1>
          <ul>
            {pokemon.types.map(({ type }) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      </div>
    )
  );
};

export default PokeSlide