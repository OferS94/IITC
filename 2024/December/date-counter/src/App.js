import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("December 5 2024");
  date.setDate(date.getDate() + count);
  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePrevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNextCount() {
    const inc = step;
    setCount((c) => c + inc);
  }

  function handlePrevCount() {
    const inc = step;
    setCount((c) => c - inc);
  }

  return (
    <>
      <div className="stepper">
        <button onClick={handleNextStep}>+</button>
        <p> step: {step}</p>
        <button onClick={handlePrevStep}>-</button>
      </div>
      <div className="counter">
        <button onClick={handleNextCount}>+</button>
        <p>Count: {count}</p>
        <button onClick={handlePrevCount}>-</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </>
  );
}
