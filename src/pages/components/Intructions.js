import React, { useState, useEffect } from 'react'

const Instructions = (props) => {
  const [mode, setMode] = useState("");
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [counter,setCounter] = useState(0);

  const h1 = [
    {
      step: "step1",
      description: "Welcome to the Hennaberg Simulator, you have chosen to lean about the H-1 Move, click next to see further steps",
      mode:"",
      show:true,
    },
    {
      step: "step2",
      description: "Select any point in the graph to start",
      mode:"Add-Mode",
      show:false,
    },
    {
      step: "step3",
      description: "Select two joints in the graph that do not already contain a bar",
      mode:"Connect-Mode",
      show: false,
    },
    {
      step: "step4",
      description: "Select two other joints in the graph that do not already contain a bar",
      mode:"Connect-Mode",
      show: false,
    },
    {
      step: "step5",
      description: "FINISHED!",
      mode:"",
      show: false,
    },
  ];

  const h2 = [
    {
      step: "step1",
      description: "Welcome to the Hennaberg Simulator, you have chosen to lean about the H-2 Move, click next to see further steps",
      mode:"",
      show:true,
    },
    {
      step: "step2",
      description: "Remove an edge from the framework",
      mode:"Remove-Mode",
      show:false,
    },
    {
      step: "step3",
      description: "Select any point in the graph to add a new joint",
      mode:"Add-Mode",
      show: false,
    },
    {
      step: "step4",
      description: "Select two other joints in the graph that do not already contain a bar",
      mode:"Connect-Mode",
      show: false,
    },
    {
      step: "step5",
      description: "Select two other joints in the graph that do not already contain a bar",
      mode:"Connect-Mode",
      show: false,
    },
    {
      step: "step6",
      description: "Select two other joints in the graph that do not already contain a bar",
      mode:"Connect-Mode",
      show: false,
    },
    {
      step: "step7",
      description: "FINISHED!",
      mode:"",
      show: false,
    },
  ];

  useEffect(() => {
    // console.log("Mode changed to:", mode);
    if (mode === "h1") {
      setSteps(h1);
    } else if (mode === "h2") {
      setSteps(h2);
    }
    else{
      setSteps([]);
    }
  }, [mode]);


  const clickH1Mode = () => {
    setMode("h1");
    props.mode("H1");
  };

  const clickH2Mode = () => {
    setMode("h2");
    props.mode("H2");
  };

  const reset = () => {
    const updatedSteps = [...steps];
    for (let i = 1 ; i < updatedSteps.length ; i++) {
      updatedSteps[i].show = false;
    }
    props.mode("");
    setMode("");
    setCurrentStep(0);
    props.setIsNext(true);
  }

  const clickNext = () => {
    if(props.isNext || currentStep == 0){
      const updatedSteps = [...steps];
      for (let i = 0 ; i < updatedSteps.length ; i++) {
        if(updatedSteps[i].show === false){
          updatedSteps[i].show = true;
          setSteps(updatedSteps);
          if(updatedSteps[i].mode == "Add-Mode"){
            props.toolMode("Add-Mode");
          }
          else if(updatedSteps[i].mode == "Connect-Mode"){
            props.toolMode("Connect-Mode");
          }
          else if(updatedSteps[i].mode == "Remove-Mode"){
            props.toolMode("Remove-Mode");
          }
          else{
            props.toolMode("");
          }
          break;
        }
      }
      if(currentStep < steps.length -1){
        setCurrentStep(currentStep + 1);
      }
    }
    props.setIsNext(false);
    setCounter(counter+1);
  }



  return (
    <div className="mx-10 my-5 border border-red-300 h-[80%]">
      <div className="border h-[90%]">
        <div className="border flex justify-center">
          <div>Instructions</div>
        </div>

        {mode === "" ? (
          <div>Choose a mode</div>
        ) : <div>current mode: {mode}</div>}

        {mode === "" ? (
          <div>
            <button className="border" onClick={clickH1Mode}>
              H-1 Mode
            </button>
            {counter > 0 ? 
              <button className="border" onClick={clickH2Mode}>
              H-2 Mode
            </button>:<button className = "border" onClick={() => alert("Cannot initiate H-2 move on current framework")}>H-2 Mode</button>}
          </div>
        ) : null}

        <ul>
          {steps.map((item, index) =>
            item.show ? (
              <li key={index} className="border border-black">
                {item.step} - {item.description}
              </li>
            ) : null
          )}
        </ul>
      </div>

      <div className="border flex justify-end h-[10%]">
        {
          currentStep == steps.length -1 ?
          <button className="border w-[30%]" onClick={reset}>Reset</button>: <button className={`border w-[30%] ${props.isNext ? `bg-blue-300`:`bg-red-300`}`} onClick={clickNext}>Next</button>
        }
      </div>
    </div>
  );
};

export default Instructions;