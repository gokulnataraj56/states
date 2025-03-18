import { useState } from 'react'
import { useEffect } from 'react'

function App(){
  const [count ,setCount] =useState(0);
  useEffect(() =>{
    setCount(100);
    console.log("use effect");
    
  },[count])
  console.log(count);
  return(
    <>
    <h1>{count}</h1>
    <button type="button" onClick={() => setCount((ok) => ok =ok+10 )} >Add</button>
    </>
  );
}
export default App;