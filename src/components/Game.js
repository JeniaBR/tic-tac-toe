import React, {Component} from 'react';
import Board from './Board';
import Information from './Information';
import Announcement from './Announcement';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      gameBoard: [
        '','','',
        '','','',
        '','',''
      ],
      turn: 'X',
      winner: null
    }
  }

  handleTileClick = (location, player) => {
    console.log('Clicked on TILE',location);
  }

  resetBoard = () => {
    this.setState({
      gameBoard: [
        '','','',
        '','','',
        '','',''
      ],
      turn: 'X',
      winner: null
    });
  }

  render(){
    return(
      <div>
        <Announcement winner={this.state.winner}/>
        <div className='main-container'>
          <Board onTileClick={this.handleTileClick} turn={this.state.turn} board={this.state.gameBoard}/>
          <button onClick={this.resetBoard}>Reset</button>
          <Information/>
        </div>
      </div>
    );
  }
}

export default Game;