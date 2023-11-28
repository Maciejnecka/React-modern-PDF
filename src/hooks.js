import { useState, useEffect } from 'react';

export const useTimer = (seconds) => {
  const [counter, setCounter] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((currCounter) => {
        const nextCounter = currCounter - 1;
        if (nextCounter === 0) {
          clearInterval(id);
        }
        return nextCounter;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return counter;
};

export const useChangeHandler = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  return {
    value: value,
    onChange: (e) => setValue(e.target.value),
  };
};
