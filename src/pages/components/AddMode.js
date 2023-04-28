import React,{useState,useEffect} from 'react'

export const AddMode = (props) => {

  const [enable,setEnable] = useState(true);

  useEffect(() => {
    if(props.currentMode == "Add-Mode"){
        setEnable(true);
    }
    else{
        setEnable(false);
    }
  });


    let clickButton = () =>{
        // props.toolMode("Add-Mode");
    }
  return (
    <button className={`border w-[33.3333%] h-[5vh]  ${enable ? `bg-amber-200`:`bg-blue-200`}`}  onClick={clickButton}>
        Add
    </button>
  )
}
