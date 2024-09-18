import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import App1 from './com/App1';
import Monsters from './com/Monsters';
// import Appsd1 from './Appsd1';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h2>Monsters application</h2>
        <Monsters></Monsters>
       {/* <App1></App1> */}
      </div>
    );
  }
}
  


export default App;
