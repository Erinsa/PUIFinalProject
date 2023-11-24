import React, { Component } from 'react';
import './App.css';
import GamePage from './main-game/MainGameScreen.js';


class App extends Component {

  render() {
    return (
        <div className = "App">
          <GamePage/>
        </div>
    );
  }
}
  
export default App;
