import React from 'react';
import './styles/styles.css';
import { useChangeHandler } from './hooks';
import { useTimer } from './hooks';

const App = () => {
  const count = useTimer(10);
  return <h1>{count === 0 ? 'koniec' : count}</h1>;

  // const firstNameProps = useChangeHandler();
  // const lastNameProps = useChangeHandler();

  // return (
  //   <>
  //     <input name="firstName" {...firstNameProps} />
  //     <input name="lastName" {...lastNameProps} />
  //   </>
  // );
};

export default App;
