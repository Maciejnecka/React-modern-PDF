import './styles/styles.css';
import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const style = { border: `${isHover * 4}px solid red` };

  return (
    <div>
      <button
        style={style}
        onMouseEnter={(e) => setIsHover(true)}
        onMouseLeave={(e) => setIsHover(false)}
        onClick={(e) => setCounter(counter + 1)}
      >
        {counter}
      </button>
    </div>
  );
};

export default App;
