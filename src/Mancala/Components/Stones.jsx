import React, {useState} from "react";

const Stones = () => {
  const Img = () => {
    return (
      <>
      <img src={"https://miro.medium.com/max/220/1*C351fbWRMQTvLkCbZtuEHw.png"} alt="stone-component"/>
      </>
    );
  };

  const [userInput, setUserInput] = useState(Number)

  const n = userInput;

  const getUserInputHandler = (e) => {
    setUserInput(console.log(e.target.value))
  }

  return (
    <>
    <input type="text" name="" id="" onSubmit={(e) => console.log(e.target.value)}/>
    <button onClick={getUserInputHandler}>Render stones</button>
      {[...Array(n)].map((stone, index) => (
        <>
          <Img />
        </> b
      ))}
    </>
  );
};

export default Stones;
