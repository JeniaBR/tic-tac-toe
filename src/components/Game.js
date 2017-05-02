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
      turn: 'X'
    }
  }

  handleTileClick = (location, player) => {
    console.log('Clicked on TILE',location);
  }

  render(){
    return(
      <div>
        <Announcement/>
        <div className='main-container'>
          <Board onTileClick={this.handleTileClick} turn={this.state.turn} board={this.state.gameBoard}/>
          <Information/>
        </div>
      </div>
    );
  }
}

export default Game;