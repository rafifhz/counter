import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showDecreaseButton, setShowDecreaseButton] = useState(false);
  const [backgroundColor, setColor] = useState('white');

  useState(() => {
    alert("Welcome");
  }, []);

 

  useEffect(() => {
    
    if (count === 10) {
      setColor('green');
      alert('count is 10')
    } else if (count === 100) {
      setColor('pink');
      alert('count is 100')

    } else if (count === 1000) {
      setColor('aqua');
      alert('count is 1000')

    }
  }, [count]);

  const handleIncreaseClick = () => {
    setCount(prevCount => {
      if (prevCount >= 1000) {
        setShowDecreaseButton(true);
        return prevCount;
      } else if (prevCount >= 100) {
        return prevCount + 100;
      } else if (prevCount >= 10) {
        return prevCount + 10;
      } else {
        return prevCount + 1;
      }
    });
  };

  const handleDecreaseClick = () => {
    setCount(prevCount => {
      if (prevCount > 100) {
        return prevCount - 100;
      } else if (prevCount > 10) {
        return prevCount - 10;
      } else if (prevCount > 0) {
        return prevCount - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="text" style={{ backgroundColor: backgroundColor }}>
      <h1>Count is {count}</h1>
      <div className='container'>
      <button className='btn1' onClick={handleIncreaseClick}>
        Increase Count
      </button>
      <button className="btn2" onClick={handleDecreaseClick} style={{ display: showDecreaseButton || "none" }}>Decrease count</button>


    
    </div>
    </div>

  );
}

export default App;