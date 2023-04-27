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
        const data = "H1";
        props.mode(data);
    }

  return (
    <button className={`border w-[5vw] h-[5vh] my-5  mr-2 ${enable ? `bg-teal-400`:`bg-blue-200`}`} onClick={handleClick}>
        H1 Mode
    </button>
  )
}
