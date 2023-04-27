import React,{useState,useEffect} from 'react'

export const RemoveNodeBtn = (props) => {


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
      props.toolMode("Remove-Mode");
  }

  return (
    <button className={`border w-[5vw] h-[5vh] mx-2 bg-blue-200 ${enable ? `bg-teal-400`:`bg-blue-200`}`} onClick = {clickButton}>
        Remove 
    </button>
  )
}
