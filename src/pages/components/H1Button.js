import React,{useState,useEffect} from 'react'

export const H1Button = (props) => {
    const [enable,setEnable] = useState(true);


    useEffect(() => {
        if(props.currentMode == "" || props.currentMode == "H1"){
            setEnable(true);
        }else{
            setEnable(false);
        }
    });

    function handleClick() {
        const data = "H1";
        props.mode(data);
    }

  return (
    <button className={`border w-[5vw] h-[5vh] my-5  mr-2 ${enable ? `bg-blue-200`:`bg-red-200`}`} onClick={handleClick} >
        H1 Mode
    </button>
  )
}
