import React, { Component } from 'react';
import Board from './components/Board';
import Information from './components/Information';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Welcome To my Tic-Tac-Toe :)</h1>
        <div className='main-container'>
          <Board/>
          <Information/>
        </div>
      </div>
    );
  }
}

export default App;
