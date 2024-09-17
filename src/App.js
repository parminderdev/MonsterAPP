import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import App1 from './com/App1';
// import Appsd1 from './Appsd1';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h2>My New monster application</h2>
       <App1></App1>
      </div>
    );
  }
}
  


export default App;
