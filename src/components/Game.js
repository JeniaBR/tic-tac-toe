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
      winner: null,
      maxPlayer: 'X',
      minPlayer: 'O'
    }
  }

  isTie = (board) => {
    const moves = board.join('').replace(/ /g, '');
    if(moves.length === 9){
      return true;
    }
    return false;
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


  resetBoard = () => {
    this.setState({
      gameBoard: [
        '','','',
        '','','',
        '','',''
      ],
      turn: 'X',
      winner: null,
      maxPlayer: 'X',
      minPlayer: 'O'
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
    if(winner === 'X'){
      return 10;
    } else if (winner === 'O'){
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
    if(winner === 'X'){
      return 10;
    } else if (winner === 'O'){
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

    player = 'O';
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

    this.setState({
      gameBoard: currentGameBoard
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