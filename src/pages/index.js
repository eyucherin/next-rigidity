import React, {useState, useEffect, useRef } from 'react';
import { Table } from './components/Table';
import { H1Button } from './components/H1Button';
import { H2Button } from './components/H2Button';
import ConnectMode from './components/ConnectMode';
import { AddMode } from './components/AddMode';
import Intructions from './components/Intructions';


export default function Home() {

  return (
   <div>
    <div className = "flex justify-center align-middle p-5">
        <h1 className = "text-4xl font-bold">Hennaberg Simulator</h1>
    </div>
    <div className = "flex">

      <div>
      <div className = "ml-20">
        <H1Button/>
        <H2Button/>
        <ConnectMode/>
        <AddMode/>
      </div>
        <Table />
      </div>
      <Intructions/>
    </div>
    </div>
  )
}

