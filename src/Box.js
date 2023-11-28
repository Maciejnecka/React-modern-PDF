import React from 'react';
import Div from './DIv';
import { ColorContext } from './context';

export default class Box extends React.Component {
  render() {
    const { Provider } = ColorContext;
    return (
      <Provider value="#336699">
        <Div />
      </Provider>
    );
  }
}
