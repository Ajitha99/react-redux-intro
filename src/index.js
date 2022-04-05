import React from 'react';
import ReactDOM from 'react-dom';
//this below line creates a global store
import { createStore } from 'redux';
//It is what we use to send data down to hierarchy
import { Provider } from 'react-redux';
//reducer function
import reducerFunc from './reducers/reducers.js';
import './index.css';
import App from './App';


//const store = createStore(//reducer goes here)
const store = createStore(reducerFunc)

ReactDOM.render(
  <React.StrictMode>
    {/* here through store props, sending global store data to hierarchy */}
    <Provider store = {store}>
      <App />
    </Provider>
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

