import React, {useState,useEffect} from 'react'

const ConnectMode = () => {

    const [enable,setEnable] = useState(true);


  return (
    <button className='border w-[5vw] h-[5vh] mx-2 bg-blue-200'>
        Connect 
    </button>
  )
}

export default ConnectMode