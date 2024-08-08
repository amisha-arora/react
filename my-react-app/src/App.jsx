import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
            onClick={() => setColor("purple")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >purple</button>
          <button 
            onClick={() => setColor("lavender")}
            className="outlined-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >lavender</button>
          <button 
            onClick={() => setColor("blue")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >blue</button>
          <button 
            onClick={() => setColor("green")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >green</button>
          <button 
            onClick={() => setColor("yellow")}
            className="outlined-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >yellow</button>
          <button 
            onClick={() => setColor("orange")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >orange</button>
          <button 
            onClick={() => setColor("red")}
            className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >red</button>
          <button 
            onClick={() => setColor("pink")}
            className="outlined-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >pink</button>
          <button 
            onClick={() => setColor("olive")}
            className="outlined-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "olive" }}
          >olive</button>
        </div>
      </div>
    </div>
  );
}

export default App;
