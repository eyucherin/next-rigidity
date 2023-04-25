import React, {useState, useEffect, useRef } from 'react';
import { Table } from './components/Table';
import { H1Button } from './components/H1Button';
import { H2Button } from './components/H2Button';
import ConnectMode from './components/ConnectMode';
import { AddMode } from './components/AddMode';
import Intructions from './components/Intructions';
import { Reset } from './components/Reset';


export default function Home() {
  const [mode,setMode] = useState("");

  const [toolMode,setToolMode] = useState("");

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

  return (
   <div>
    <div className = "flex justify-center align-middle p-5">
        <h1 className = "text-4xl font-bold">Hennaberg Simulator</h1>
    </div>
    <div className = "flex">

      <div className = "border w-[40%]">
      <div className = "ml-20">
        <H1Button mode={handleModeChange} currentMode = {mode}/>
        <H2Button mode = {handleModeChange} currentMode = {mode}/>
        <ConnectMode toolMode = {handleToolMode}/>
        <AddMode toolMode = {handleToolMode}/>
        <Reset mode = {handleModeChange}/>
      </div>
        <Table toolMode = {toolMode} />
      </div>
      <div className = "border w-[60%]">
        <Intructions/>
      </div>
    </div>
    </div>
  )
}

