import React,{useState, useEffect} from "react";

export const H2Button = (props) => {
  const [enable,setEnable] = useState(false);

    useEffect(() => {
      if(props.currentMode == "" || props.currentMode == "H1"){
          setEnable(false);
      }else{
          setEnable(true);
      }
    });

    function handleClick() {
        const data = "H2";
        props.mode(data);
    }

  return (
    <button className={`border w-[5vw] h-[5vh] mx-2 ${enable ? `bg-teal-400`:`bg-blue-200`}`} onClick={handleClick}>
        H2 Mode
    </button>
  )
}
