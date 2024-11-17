
import './App.css';
import { useState } from 'react';
// import // 

function App() {
    const [counter, setCounter] = useState(0);
    const increaseCount = () =>{
      setCounter(counter +1)
    }
    
    const reduceCount = () =>{
      setCounter(counter -1)
    }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className='counter-container'>
        <button onClick={reduceCount} className="button-19" >-</button>
        <p className='counter'>{counter}</p>
        <button onClick={increaseCount} className="button-19" >+</button>
      </div>
    </div>
  );
}

export default App;
