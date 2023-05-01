import React, {useState, useEffect, useRef } from 'react';
import Table from './components/Table';
import  H1Button from './components/H1Button';
import H2Button from './components/H2Button';
import ConnectMode from './components/ConnectMode';
import Connect3 from './components/Connect3';
import  AddMode  from './components/AddMode';
import Intructions from './components/Intructions';
import RemoveNodeBtn from './components/RemoveNodeBtn';
import Head from 'next/head'



export default function Home() {
  const [mode,setMode] = useState("");

  const [toolMode,setToolMode] = useState("");

  const [isNext , setIsNext] = useState(true);

  useEffect(() => {
    console.log("toolMode mode is",toolMode);
  },[toolMode])

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
    <>
     <Head>
      <title>Henneberg Simulator</title>
      <meta name='description' content='Simulator program for Henneberg Moves in Rigidity Theory' />
    </Head>
   <div className = "mx-[7%]">
    <div className = "flex justify-center align-middle p-5">
        <h1 className = "text-6xl font-semibold">Henneberg Simulator</h1>
    </div>
    <hr></hr>
    <div className = "flex my-[1%] h-[80vh]">
      <div className = "w-[55%]">
        <Table toolMode = {toolMode} isNext = {isNext} setIsNext = {handleNext}/>
      </div>
      <div className = "w-[45%] bg-yellow-50">
        <div>
          <div className  = "flex mx-10 border mb-2">
            <H1Button mode={handleModeChange} currentMode = {mode}/>
            <H2Button mode = {handleModeChange} currentMode = {mode}/>
          </div>
          <div className = "flex  mx-10">
            <ConnectMode  currentMode = {toolMode}/>
            <Connect3  currentMode = {toolMode}/>
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
    </>
  )
}

