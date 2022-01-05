
import './App.css';
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);
  const [notNegativeError, setNotNegativeError] = React.useState(false)
  
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">The counter is currently&nbsp; : <span data-test="count">{ count }</span></h1>
      {notNegativeError && 
        <h3 data-test="counter-error">Counter can not go below zero</h3>
      }
      <button data-test="increment-button" onClick={() => {
        setCount(prevState => prevState = prevState + 1)
            setNotNegativeError(false)
        }}>Increment counter</button>
      <button data-test="decrement-button" onClick={() =>  {
          if(count === 0){
            setNotNegativeError(true)
          }
          if(count !== 0){
            setCount(prevState => prevState - 1)
          }
        }}>Decrement counter</button>
    </div>
  );
}

export default App;
