import React,{useState,useEffect} from 'react'

export const AddMode = (props) => {

  const [enable,setEnable] = useState(true);

//   let clickButton(){
//     props.toolMode("Add-mode");
//   }
    let clickButton = () =>{
        props.toolMode("Add-Mode");
    }
  return (
    <button className='border w-[5vw] h-[5vh] mx-2 bg-blue-200' onClick={clickButton}>
        Add
    </button>
  )
}
