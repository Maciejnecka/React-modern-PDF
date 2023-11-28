import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const Div = () => {
  const theme = useContext(ThemeContext);

  const style = {
    fontSize: theme.primaryFontSize,
    color: theme.primaryColor,
  };
  return <div style={style}>useContext!</div>;
};

export default Div;
