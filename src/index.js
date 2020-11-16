import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './AddUser/redux/Store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import AppUser from "./AddUser/AppUser";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
   <AppUser />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

