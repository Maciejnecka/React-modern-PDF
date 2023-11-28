import React, { useReducer } from 'react';
import './styles/styles.css';
const App = () => {
  const init = { firstName: '', lastName: '' };
  const reducer = (state, { name, value }) => {
    return { ...state, [name]: value };
  };
  const [state, dispatch] = useReducer(reducer, init);
  const { firstName, lastName } = state;
  return (
    <div>
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => dispatch(e.target)}
      />
      <input
        name="lastName"
        value={lastName}
        onChange={(e) => dispatch(e.target)}
      />
    </div>
  );
};

export default App;
