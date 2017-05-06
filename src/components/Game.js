import React, {Component} from 'react';
import Board from './Board';
import Announcement from './Announcement';
import SelectPlayer from './SelectPlayer';

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
      winner: null,
      maxPlayer: 'X',
      minPlayer: 'O',
      startGame: false
    }
  }

  isTie = (board) => {
    const moves = board.join('').replace(/ /g, '');
    if(moves.length === 9){
      return true;
    }
    return false;
  }

  calculateWinner = (squares) => {
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

  handleSelectPlayer = (selectedPlayer) => {
    if(selectedPlayer === 'X'){
      this.setState({
        gameBoard: [
        '','','',
        '','','',
        '','',''
        ],
        turn: 'X',
        winner: null,
        maxPlayer: 'X',
        minPlayer: 'O',
        startGame: true,
      });
    } else {
      this.setState({
        gameBoard: [
        '','','',
        '','','',
        '','',''
        ],
        turn: 'O',
        winner: null,
        maxPlayer: 'O',
        minPlayer: 'X',
        startGame: true
      });
    }
  }

  resetBoard = () => {
    this.setState({
      winner: null,
      startGame: false
    });
  }

  validMove = (move, player, board) => {
    const newBoard = board.slice();
    if(newBoard[move] === ''){
      newBoard[move] = player;
      return newBoard;
    }else{
      return null;
    }
  }

  findAiMove = (board) => {
    let bestMoveScore = 100;
    let move = null;

    if (this.calculateWinner(board) || this.isTie(board)) {
      return null;
    }

    for (let i = 0; i < board.length; i++) {
      let newBoard = this.validMove(i, this.state.minPlayer, board);
      if(newBoard){
        let moveScore = this.maxScore(newBoard);
        if(moveScore < bestMoveScore){
          bestMoveScore = moveScore;
          move = i;
        }
      }
    }
    return move;
  }

  minScore = (board) => {
    const winner = this.calculateWinner(board);
    if(winner === this.state.maxPlayer){
      return 10;
    } else if (winner === this.state.minPlayer){
      return -10;
    } else if(this.isTie(board)){
      return 0;
    } else {
      let bestMoveValue = 100;
      for (let i = 0; i < board.length; i++) {
        let newBoard = this.validMove(i, this.state.minPlayer, board);
        if(newBoard){
          let predictedMoveValue = this.maxScore(newBoard);
          if(predictedMoveValue < bestMoveValue){
            bestMoveValue = predictedMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  }

  maxScore = (board) => {
    const winner = this.calculateWinner(board);
    if(winner === this.state.maxPlayer){
      return 10;
    } else if (winner === this.state.minPlayer){
      return -10;
    } else if(this.isTie(board)){
      return 0;
    } else {
      let bestMoveValue = -100;
      for (let i = 0; i < board.length; i++) {
        let newBoard = this.validMove(i, this.state.maxPlayer, board);
        if(newBoard){
          let predictedMoveValue = this.minScore(newBoard);
          if(predictedMoveValue > bestMoveValue){
            bestMoveValue = predictedMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  }

  handleTileClick = (location) => {
    let player = this.state.turn;
    let currentGameBoard = this.validMove(location, player, this.state.gameBoard);
    if(!currentGameBoard){
      return;
    }
    if(this.calculateWinner(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      });
      return;
    }
    if(this.isTie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      });
      return;
    }

    this.setState({
      gameBoard: currentGameBoard
    });

    player = this.state.minPlayer;
    currentGameBoard = this.validMove(this.findAiMove(currentGameBoard), player, currentGameBoard);
    if(this.calculateWinner(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      });
      return;
    }
    if(this.isTie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      });
      return;
    }

    setTimeout(() => {
      this.setState({
      gameBoard: currentGameBoard
    });
    },500);
    
  }


  render(){
    return(
      <div>
        {this.state.winner ? <Announcement onClick={this.resetBoard} winner={this.state.winner} minPlayer={this.state.minPlayer}/> : null}
        {!this.state.startGame ? <SelectPlayer onSelectPlayer={this.handleSelectPlayer}/> : null}
        <div className='main-container'>
          <Board onTileClick={this.handleTileClick} turn={this.state.turn} board={this.state.gameBoard}/>
        </div>
      </div>
    );
  }
}

export default Game;