// import axios from "axios";
// import { useState, useEffect } from "react";
// import Pokemon from "./Pokemon/Pokemon.jsx";

// const Pokeball = ({ limit = 50 }) => {
//   const [pokemons, setPokemons] = useState([]);

//   const fetchData = async () => {
//     try {
//       const results = [];
//       let offset = 0;

//       // Loop until we have enough Pokémon (up to the limit)
//       while (results.length < limit) {
//         const { data } = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
//         );

//         results.push(...data.results); // Add new results
//         offset += 20; // Increment offset for the next batch

//         // Stop fetching if we reach or exceed the limit
//         if (results.length >= limit) break;
//       }

//       setPokemons(results.slice(0, limit)); // Trim to exact limit if overshot
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Pokémon List</h1>
//       <ul>
//         {pokemons.map((pokemon) => (
//           <li key={pokemon.name}>
//             <Pokemon name={pokemon.name} url={pokemon.url} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pokeball;
