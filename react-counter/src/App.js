import React, { useState }from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count +1)
  }
  const minus = () => {
    setCount( count -1)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'black',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#e60000',
        textShadow: '2px 2px 4px #aaa'
      }}>Counter</h1>
      <p style={{
        fontSize: '1.5rem',
        margin: '20px 0',
        padding: '10px 20px',
        borderRadius: '10px',
        backgroundColor: '#e6e6fa',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
      }}>Count: {count}</p>
    <div>
      <button onClick={minus} style={{
          fontSize: '40px',
          padding: '10px 25px',
          margin: '0 10px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#ff6347',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease'
        }}>-</button>
      <button onClick={add} style={{
          fontSize: '40px',
          padding: '10px 20px',
          margin: '0 10px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#32cd32',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease'
        }}>+</button> 
      </div>
    </div>

  );
}

export default App;
