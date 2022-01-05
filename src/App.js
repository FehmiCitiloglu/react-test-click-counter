
import './App.css';
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div data-test="component-app" className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
