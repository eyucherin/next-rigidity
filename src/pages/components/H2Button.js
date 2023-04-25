import React,{useState, useEffect} from "react";

export const H2Button = (props) => {
  const [enable,setEnable] = useState(true);

    useEffect(() => {
      if(props.currentMode == "" || props.currentMode == "H2"){
          setEnable(true);
      }else{
          setEnable(false);
      }
    });

    function handleClick() {
        const data = "H2";
        props.mode(data);
    }

  return (
    <button className={`border w-[5vw] h-[5vh] mx-2 ${enable ? `bg-blue-200`:`bg-red-200`}`} onClick={handleClick}>
        H2 Mode
    </button>
  )
}
