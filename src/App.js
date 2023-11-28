import './styles/styles.css';
import React, { useState, useEffect, useRef } from 'react';
const App = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);
  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((value) => value + 1);
    }, 1000);
    return () => stopInterval();
  }, []);
  return <button onClick={(e) => stopInterval()}>stop</button>;
};

export default App;
