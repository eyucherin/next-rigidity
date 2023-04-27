import React from 'react'

export const RemoveNodeBtn = (props) => {

let clickButton = () =>{
    props.toolMode("Remove-Mode");
}

  return (
    <button className='border w-[5vw] h-[5vh] mx-2 bg-blue-200' onClick = {clickButton}>
        Remove 
    </button>
  )
}
