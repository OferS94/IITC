import axios from 'axios'
import { useState , useEffect } from 'react'

const PokemonFetcher = () =>{
    const [pokemons , setPokemons ] = useState([])
    const fetchData = async() => {
        try {
            const {data: {results} } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setPokemons(results)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    } , [])

    return 
    <div>
        <ul>
            {pokemons.map((pokemon) => {
                return <li   key={pokemon.name}>
                    <pokemon name = {pokemon.name} url={pokemon.url}/>
                </li>
            })}
        </ul>
    </div>
}

export default PokemonFetcher
