import './styles/styles.css';
import React from 'react';
import Box from './Box';

import { TextContext } from './context';

export default class App extends React.Component {
  render() {
    const { Provider } = TextContext;
    return (
      <Provider value={'Context API test!'}>
        <Box />
      </Provider>
    );
  }
}
