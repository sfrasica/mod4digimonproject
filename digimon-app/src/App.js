import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import DigimonContainer from './components/DigimonContainer.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
      <body className="App-body">
        <br/>
        <p>
         <DigimonContainer/>
        </p>
        </body>
      </header>
    
    </div>
  );
}

export default App;
