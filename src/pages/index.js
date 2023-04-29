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

  function handleModeChange(data) {
    setMode(data);
  }

  let handleToolMode = (data) =>{
    setToolMode(data);
  }

  let handleNext = (val) => {
    setIsNext(val);
  }


  return (
   <div className = "mx-[10%]">
    <div className = "flex justify-center align-middle p-5">
        <h1 className = "text-6xl font-semibold">Henneberg Simulator</h1>
    </div>
    <hr></hr>
    <div className = "flex my-[1%] h-[80vh]">

      <div className = "w-[55%]">
        <Table toolMode = {toolMode} isNext = {isNext} setIsNext = {handleNext}/>
      </div>
      <div className = "w-[45%] bg-yellow-50">
        <div className>
          <div className  = "flex mx-10 border mb-2">
            <H1Button mode={handleModeChange} currentMode = {mode}/>
            <H2Button mode = {handleModeChange} currentMode = {mode}/>
          </div>
          <div className = "flex  mx-10">
            <ConnectMode  currentMode = {toolMode}/>
            <AddMode  currentMode = {toolMode}/>
              {/* <Reset mode = {handleModeChange}/> */}
            <RemoveNodeBtn  currentMode = {toolMode}></RemoveNodeBtn>
          </div>
      </div>
        <Intructions mode = {handleModeChange} toolMode = {handleToolMode} isNext = {isNext} setIsNext = {handleNext}/>
      </div>
    </div>
    <hr></hr>
    <a  className = "hover:text-blue-600"href = "https://github.com/eyucherin/next-rigidity" target="_blank" >Source Code</a>
    <div>created by Elizabeth Yu</div>
    </div>
  )
}

