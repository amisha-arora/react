import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-purple-300 text-pink-400 p-4 rounded-xl'>Tailwind</h1>
    </>
  );
}

export default App;
