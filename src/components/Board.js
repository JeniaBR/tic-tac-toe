import React, {Component} from 'react';
import Tile from './Tile';

class Board extends Component {
  constructor(){
    super();
    this.state = {
      gameState: Array(9).fill(0),
      playerVal: -1,
      computerVal: 1,
      player: false,
      computer: true,
      xIsNext: true,
      aiTurn: false
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if(!prevState.aiTurn && this.state.aiTurn){
      this.callAI();
    }
  }

  handleReset = () => {
    this.setState({
      gameState: Array(9).fill(0),
      aiTurn: false,
      xIsNext: true
    });
  }

  checkFull = (tiles) => {
    return tiles.every((item)=>{
      return item !== 0;
    });
  }

  callAI = () => {
    let gameState = this.state.gameState.slice();
    let computer = this.state.computer;
    this.aiTurn(gameState, 0, computer);
  }

  aiTurn = (tiles, depth, player) => {

    if(this.calculateWinner(tiles)){
      return -10 - depth;
    }

    if(this.checkFull(tiles)){
      return 0;
    }

    let max = -Infinity;
    let index = 0;
    let value = player ? this.state.playerVal : this.state.computerVal;

    for(let i = 0; i < 9; i++){
      if(tiles[i] === 0){
        let newGameState = tiles.slice();
        newGameState[i] = value;

        let moveVal = -this.aiTurn(newGameState, depth + 1, !player);

        if(moveVal > max){
          max = moveVal;
          index = i;
        }
      }
    }

    if(depth === 0){
      const gameState = this.state.gameState.slice();
      gameState[index] = this.state.computerVal;
      this.setState({
        gameState: gameState,
        xIsNext: !this.state.xIsNext,
        aiTurn: false
      })
    }

    return max;

  }

  renderTile(index) {
    return <Tile value={this.state.gameState[index]} onClick={()=>{this.handleClick(index)}}/>
  }

  handleClick = (i) => {
    const gameState = this.state.gameState.slice();
    if(this.calculateWinner(gameState) || (gameState[i] !== 0)){
      return;
    }

    gameState[i] = this.state.xIsNext ? this.state.playerVal : this.state.computerVal;

    this.setState({
      gameState: gameState,
      xIsNext: !this.state.xIsNext,
      aiTurn: true
    });

  }

  calculateWinner(tiles) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a];
      }
    }
    return null;
}

  render(){
    return(
      <div className='board-container'>
        {this.renderTile(0)}
        {this.renderTile(1)}
        {this.renderTile(2)}
        {this.renderTile(3)}
        {this.renderTile(4)}
        {this.renderTile(5)}
        {this.renderTile(6)}
        {this.renderTile(7)}
        {this.renderTile(8)}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Board;