import React, {Component} from 'react';
import Board from './Board';
import Information from './Information';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        '','','',
        '','','',
        '','',''
      ]
    }
  }

  render(){
    return(
      <div className='main-container'>
        <Board board = {this.state.gameBoard}/>
        <Information/>
      </div>
    );
  }
}

export default Game;