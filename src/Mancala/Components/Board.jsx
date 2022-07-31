import React, {useState} from "react" 

const Board = () => {
  const Svg = () => {
    return (
      <svg width="400" height="180">
      <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
      />
    </svg> 
    )
  }
  
  // state to store the user input
  const [userInput, setUserInput] = useState([])
  
  // handler function to add component to array: new pit
  const renderComponent = () => {
    setUserInput(userInput.concat(<Svg key={userInput.length}/>))
  }
  
    return (
      <>
      <h1>Mancala</h1>
      <input type="text" name="" id=""/>
      <button onClick={renderComponent}>Render component</button>
      {userInput}
      </>
    )
}

export default Board