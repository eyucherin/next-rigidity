import React from 'react'

const Reset = (props) => {

    function handleClick() {
        const data = "";
        props.mode(data);
    }

  return (
    <button className={`border w-[5vw] h-[5vh] mx-2 bg-blue-200`} onClick={handleClick}>
        Reset
    </button>
  )
}

export default Reset;