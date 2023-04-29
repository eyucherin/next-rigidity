import React,{useState, useEffect} from "react";

const H2Button = (props) => {
  const [enable,setEnable] = useState(false);

    useEffect(() => {
      if(props.currentMode == "" || props.currentMode == "H1"){
          setEnable(false);
      }else{
          setEnable(true);
      }
    });

    function handleClick() {
        // const data = "H2";
        // props.mode(data);
    }

  return (
    <button className={`border w-[50%] h-[5vh] ${enable ? `bg-amber-200`:`bg-blue-200`}`} onClick={handleClick}>
        H2 Mode
    </button>
  )
}

export default H2Button;
