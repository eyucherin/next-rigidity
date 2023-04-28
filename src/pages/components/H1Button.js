import React,{useState,useEffect} from 'react'

export const H1Button = (props) => {
    const [enable,setEnable] = useState(false);


    useEffect(() => {
        if(props.currentMode == "" || props.currentMode == "H2"){
            setEnable(false);
        }else{
            setEnable(true);
        }
    });

    function handleClick() {
        // const data = "H1";
        // props.mode(data);
    }

  return (
    <button className={`border w-[50%] h-[5vh] ${enable ? `bg-amber-200`:`bg-blue-200`}`} onClick={handleClick}>
        H1 Mode
    </button>
  )
}
