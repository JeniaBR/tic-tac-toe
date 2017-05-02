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

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
}

  handleTileClick = (location, player) => {
    if(this.state.gameBoard[location] === 'X' || this.state.gameBoard[location] === 'O' || this.state.winner){
      //This tile is taken already
      return;
    }
    const currentGameBoard = this.state.gameBoard.slice();
    currentGameBoard[location] = this.state.turn;
    this.setState({
      gameBoard: currentGameBoard,
      turn: this.state.turn === 'X' ? 'O' : 'X'
    });

    const winner = this.calculateWinner(currentGameBoard);

    if(winner){
      this.setState({
        winner: this.state.turn
      })
    }

    const moves = currentGameBoard.join('').replace(/ /g, '');
    if(moves.length === 9){
      this.setState({
        winner: 'd'
      });
    }

    // this.setState({
    //   turn: this.state.turn === 'X' ? 'O' : 'X'
    // })

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