import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ThemeContext from './context/ThemeContext';
import TextContext from './context/TextContext';
import ColorContext from './context/ColorContext';

export { TextContext, ColorContext, ThemeContext };

const root = createRoot(document.querySelector('#root'));

root.render(<App />);

reportWebVitals();
