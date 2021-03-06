import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {AlertState} from "./context/alert/alertState";
import {GithubState} from "./context/github/githubState";

ReactDOM.render(
  <React.StrictMode>
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertState>
    </GithubState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
