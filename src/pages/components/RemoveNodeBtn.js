import React,{useState,useEffect} from 'react'

const RemoveNodeBtn = (props) => {


  const [enable,setEnable] = useState(true);

    useEffect(() => {
      if(props.currentMode == "Remove-Mode"){
          setEnable(true);
      }
      else{
          setEnable(false);
      }
    });

  let clickButton = () =>{
      // props.toolMode("Remove-Mode");
  }

  return (
    <button className={`border w-[33.333%] h-[6vh] ${enable ? `bg-amber-200`:`bg-blue-200`}`} onClick = {clickButton}>
        Remove 
    </button>
  )
}

export default RemoveNodeBtn;