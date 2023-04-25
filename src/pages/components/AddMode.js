import React,{useState,useEffect} from 'react'

export const AddMode = () => {

  const [enable,setEnable] = useState(true);


  return (
    <button className='border w-[5vw] h-[5vh] mx-2 bg-blue-200'>
        Add
    </button>
  )
}
