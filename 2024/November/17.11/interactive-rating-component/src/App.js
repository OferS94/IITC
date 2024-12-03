import './App.css';
import {useState} from 'react';
import RatingStateEnd from './components/RatingStateEnd';
import RatingStateStart from './components/RatingStateStart';

// function App() {
//   const [userChoice , setUserChoice] = useState(0);
//   const [didUserChoose , setDidUserChoose] = useState(false);

//   return (
//     <div className="App">
//       { didUserChoose ? (
//   <RatingStateEnd userChoice = (userChoice) />
//   ) : (
//   <RatingStateStart
//   updateChoice = {(choice) => setUserChoice(choice)}
//   setDidUserChoose = {()=> setDidUserChoose(true)}
//   />
// )}
            
//     </div>
//     );
//   }
function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserChoose, setDidUserChoose] = useState(false);

  return (
    <div className="App">
      {didUserChoose ? (
        <RatingStateEnd userChoice={userChoice} />
      ) : (
        <RatingStateStart
          updateChoice={(choice) => setUserChoice(choice)}
          setDidUserChoose={() => setDidUserChoose(true)}
        />
      )}
    </div>
  );
} 
export default App;
