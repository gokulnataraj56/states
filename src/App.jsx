import { useState } from 'react'
import { useEffect } from 'react'

function App(){
  const [count ,setCount] =useState(0);
  useEffect(() =>{
    setCount(10);
  },[])
  console.log(count)
  return(
    <h1>{count}</h1>
  );
}
export default App;