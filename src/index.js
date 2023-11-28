import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import TextContext from './context/TextContext';
import ColorContext from './context/ColorContext';

export { TextContext, ColorContext };

const root = createRoot(document.querySelector('#root'));

root.render(<App />);

reportWebVitals();
