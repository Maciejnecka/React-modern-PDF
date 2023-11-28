import React from 'react';
import { TextContext, ColorContext } from './context';

export default class Div extends React.Component {
  render() {
    const { Consumer: TextConsumer } = TextContext;
    const { Consumer: ColorConsumer } = ColorContext;
    return (
      <TextConsumer>
        {(text) => (
          <ColorConsumer>
            {(color) => (
              <div>
                {text} : {color}
              </div>
            )}
          </ColorConsumer>
        )}
      </TextConsumer>
    );
  }
}
