import { useState } from 'react';
import RatingStateStart from './components/RatingStateStart';
import RatingStateEnd from './components/RatingStateEnd';
import './App.css'

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserChoose, setDidUserChoose] = useState(false);

  return (
    <div className="
        h-screen bg-neutral-very-dark-blue
        bg-cover bg-center flex justify-center items-center"
     >
      {didUserChoose ? (
        <RatingStateEnd userChoice={userChoice} />
      ) : (
        <RatingStateStart
        setUserChoice={setUserChoice}
        setDidUserChoose={setDidUserChoose} 
        />
      )}
    </div>
  );
}

export default App
