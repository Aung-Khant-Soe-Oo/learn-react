import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseValue = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseValue = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <h1>First React Mini Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={() => increaseValue()}>Increase</button>{" "}
      <button onClick={() => decreaseValue()}>Decrease</button>
      <p>Footer : </p>
    </>
  );
}

export default App;
