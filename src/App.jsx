import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
function Add(){
  setCount((count) =>{ 
      return(
      count = count+1
      );
    }
  );
}
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={Add}>Add</button>
    </>
  );
}

export default App;