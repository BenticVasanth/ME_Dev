import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333; 
    margin: 0;
  }
  .btn-primary:hover{ 
      color: #fff;
      background-color: #286090;
      border-color: #204d74;
  }
  .btn-outline{
    border: none;
     
  }
  .btn-outline:hover{
    border: none;
    background-color: #286090;
    color: #fff;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <GlobalStyle/>
    <App />
  </BrowserRouter>
);
 
