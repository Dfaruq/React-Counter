import React, { useState }from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count +1)
  }
  const minus = () => {
    setCount( count -1)
  }
  return (
    <div className="app-container">
      <h1 className="app-title">Counter</h1>
      <p className="app-count">Count: {count}</p>
    <div>
      <button onClick={minus} className="app-button app-button-minus">-</button>
      <button onClick={add} className="app-button app-button-plus">+</button> 
      </div>
    </div>

  );
}

export default App;
