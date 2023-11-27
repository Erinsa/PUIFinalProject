import React, { Component } from 'react';
import './App.css';
import GamePage from './main-game/MainGameScreen.js';
// import new_image from "./assets/Card_Back.png"


class App extends Component {

  render() {
    return (
        <div className = "App">
          <GamePage/>
          <img src= "/assets/Card_Back.png"/>
        </div>
    );
  }
}
  
export default App;
