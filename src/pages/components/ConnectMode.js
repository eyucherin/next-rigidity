import React, {useState,useEffect} from 'react'

const ConnectMode = (props) => {

    const [enable,setEnable] = useState(true);

    useEffect(() => {
      if(props.currentMode == "Connect-Mode"){
          setEnable(true);
      }
      else{
          setEnable(false);
      }
    });

    let clickButton = () =>{
        props.toolMode("Connect-Mode");
    }

  return (
    <button className={`border w-[5vw] h-[5vh] mx-2 bg-blue-200 ${enable ? `bg-teal-400`:`bg-blue-200`}`} onClick = {clickButton}>
        Connect 
    </button>
  )
}

export default ConnectMode