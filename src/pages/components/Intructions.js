import React, { useState, useEffect } from 'react'

const Instructions = (props) => {
  const [mode, setMode] = useState("");
  const [steps, setSteps] = useState([]);

  const h1 = [
    {
      step: "step1",
      description: "Select any point in the graph to start",
      show: true,
    },
    {
      step: "step2",
      description: "Select two joints in the graph that do not already contain a bar",
      show: false,
    },
    {
      step: "step3",
      description: "Select two other joints in the graph that do not already contain a bar",
      show: false,
    },
    {
      step: "step4",
      description: "description4",
      show: false,
    },
    {
      step: "step5",
      description: "description5",
      show: false,
    },
  ];

  const h2 = [
    {
      step: "step1",
      description: "description1",
      show: true,
    },
    {
      step: "step2",
      description: "description2",
      show: false,
    },
    {
      step: "step3",
      description: "description3",
      show: false,
    },
    {
      step: "step4",
      description: "description4",
      show: false,
    },
    {
      step: "step5",
      description: "description5",
      show: false,
    },
  ];

  useEffect(() => {
    console.log("Mode changed to:", mode);
    if (mode === "h1") {
      setSteps(h1);
    } else if (mode === "h2") {
      setSteps(h2);
    }
  }, [mode]);

  useEffect(()=>{
    console.log("steps changed to:", steps);
  },[steps])

  const clickH1Mode = () => {
    setMode("h1");
    props.mode("H1");
  };

  const clickH2Mode = () => {
    setMode("h2");
    props.mode("H2");
  };

  const clickNext = () => {
    const updatedSteps = [...steps];
    for (let i = 0 ; i < updatedSteps.length ; i++) {
      if(updatedSteps[i].show === false){
        updatedSteps[i].show = true;
        setSteps(updatedSteps);
        break;
      }
    }

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
            <button className="border" onClick={clickH2Mode}>
              H-2 Mode
            </button>
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
        <button className="border w-[30%]" onClick={clickNext}>Next</button>
      </div>
    </div>
  );
};

export default Instructions;