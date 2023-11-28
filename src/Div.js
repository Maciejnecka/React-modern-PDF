import React from 'react';
import { TextContext } from './context';

export default class Div extends React.Component {
  static contextType = TextContext;

  render() {
    return <div>{this.context}</div>;
  }
}
