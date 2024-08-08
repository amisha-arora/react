import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

// Define the JSX element
const anotherElement = (
  <a href='https://google.com' target='_blank' >
    Visit Google by clicking
  </a>
);
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'hi!AMISHa'
)

// Render the JSX element to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
);
