import React, { Component } from 'react';
import Game from './components/Game';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Welcome To my Tic-Tac-Toe :)</h1>
        <div>
          <Game/>
        </div>
      </div>
    );
  }
}

export default App;
