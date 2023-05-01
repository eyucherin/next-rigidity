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
    },[props.currentMode]);

    let clickButton = () =>{
        // props.toolMode("Connect-Mode");
    }

  return (
    <button className={`border w-[33.3333%] h-[6vh] ${enable ? `bg-amber-200`:`bg-blue-200`}`} onClick = {clickButton}>
      <div>Connect</div>
      <div>(2-deg)</div>
    </button>
  )
}

export default ConnectMode