import { useState } from 'react';
import './App.css';
let adjustInterval='undefined';
function App() {
  const [start,setStart]=useState(0);
  const [disable,setDisable]=useState(false);
   const startWatch=()=>{
    //setStart(start+1);
    adjustInterval=setInterval(()=>{
      setStart((x)=>x+1)
    },1000)
    setDisable(true);
   }
   const stopWatch=()=>{
    clearInterval(adjustInterval);
    setDisable(false);

   }
   const resetWatch=()=>{
    clearInterval(adjustInterval);
    setDisable(false);
    setStart(0);
  }

  return (
    <div className="App">
      <h1>Start Stop Watch</h1>
     <h2>{start}</h2> 
      <button className='startWatch' disabled={disable} onClick={()=>startWatch()}>Start</button>
      <button className='stopWatch' onClick={()=>stopWatch()}>Stop</button>
      <button className='resetWatch' onClick={()=>resetWatch()}>Reset</button>
    </div>
  );
}

export default App;
