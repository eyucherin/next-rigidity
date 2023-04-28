import React, {useState, useEffect, useRef } from 'react';
import { Table } from './components/Table';
import { H1Button } from './components/H1Button';
import { H2Button } from './components/H2Button';
import ConnectMode from './components/ConnectMode';
import { AddMode } from './components/AddMode';
import Intructions from './components/Intructions';
import { Reset } from './components/Reset';
import { RemoveNodeBtn } from './components/RemoveNodeBtn';


export default function Home() {
  const [mode,setMode] = useState("");

  const [toolMode,setToolMode] = useState("");

  const [isNext , setIsNext] = useState(true);

  useEffect(() => {
    // console.log("Mode changed to:", mode);
    // console.log("Tool Mode changed to:", toolMode);
  }, [mode,toolMode]);

  function handleModeChange(data) {
    // console.log("Data received from child component:", data);
    setMode(data);
  }

  let handleToolMode = (data) =>{
    // console.log("Tool Mode is:", data);
    setToolMode(data);
  }

  let handleNext = (val) => {
    // console.log(isNext);
    setIsNext(val);
  }


  return (
   <div className = "mx-[10%]">
    <div className = "flex justify-center align-middle p-5">
        <h1 className = "text-4xl font-bold">Henneberg Simulator</h1>
    </div>
    <div className = "flex">

      <div className = "border w-[40%]">
        <Table toolMode = {toolMode} isNext = {isNext} setIsNext = {handleNext}/>
      </div>
      <div className = "border w-[60%]">
        <div className = "ml-10 flex">
        <H1Button mode={handleModeChange} currentMode = {mode}/>
        <H2Button mode = {handleModeChange} currentMode = {mode}/>
        <ConnectMode toolMode = {handleToolMode} currentMode = {toolMode}/>
        <AddMode toolMode = {handleToolMode} currentMode = {toolMode}/>
        <Reset mode = {handleModeChange}/>
        <RemoveNodeBtn toolMode = {handleToolMode}  currentMode = {toolMode}></RemoveNodeBtn>
      </div>
        <Intructions mode = {handleModeChange} toolMode = {handleToolMode} isNext = {isNext} setIsNext = {handleNext}/>
      </div>
    </div>
    </div>
  )
}

