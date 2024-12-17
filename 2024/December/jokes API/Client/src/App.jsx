import axios from 'axios';
import { useState , useEffect } from 'React';
import './App.css'

function App() {
  const [joke , setJoke] = useState('');

  async function fetchJoke (){
  const res = await axios.get('http://localhost:3000/api/v1/jokes/random')
  console.log(res.data)
  setJoke(res.data)
  }

  useEffect(() => {
    fetchJoke
  } , [])

  return (
    <>
        <div>
          <h1>Random Joke</h1>
          <p>{joke.setup}</p>
          <p>{joke.punchLine}</p>
        </div>
        <button onClick={fetchJoke}>Get random Joke</button>
    </>
  )
}

export default App