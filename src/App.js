import './styles/styles.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [entered, setEntered] = useState(0);

  // console.log('before');
  // useEffect(() => {
  //   console.log('counter: ', counter);
  // }, [counter]);
  // console.log('after');

  // useEffect(() => {
  //   document.title = `${counter} / ${entered}`;
  // }, [counter, entered]);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((value) => value + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>{counter}</div>
    // <div>
    //   <button
    //     onMouseEnter={(e) => setEntered(entered + 1)}
    //     onClick={(e) => setCounter(counter + 1)}
    //   >
    //     {counter} / {entered}
    //   </button>
    // </div>
  );
};

export default App;
