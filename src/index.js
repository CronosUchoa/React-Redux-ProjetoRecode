import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//provider responsavel de conectar app com a store
import { Provider } from "react-redux";
import Store  from './store';

ReactDOM.render(
 <Provider store={Store}>
   <App />
 </Provider>
,
  document.getElementById('root')
);

