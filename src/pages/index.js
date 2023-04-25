import React, {useState, useEffect, useRef } from 'react';
import { Table } from './components/Table';


export default function Home() {

  return (
   <div>
    <div className = "flex justify-center align-middle p-5">
        <h1 className = "text-4xl font-bold">Hennaberg Simulator</h1>
    </div>
    <Table />
    </div>
  )
}

