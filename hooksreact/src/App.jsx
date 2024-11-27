import { useState } from "react";
import './assets/App.css';

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () =>{
    if (count >0 ){
      setCount(count-1);
    }   
  }

  return (
    <>
      <h1>Number of days you have logged in:</h1>
      <button onClick={addValue}>Entered {count}</button>
      <h1>Number of days you logged out:</h1>
      <button onClick={removeValue}>exited:{count}</button>
    </>
  );
}

export default App;
