import React, {Component} from 'react';
import Tile from './Tile';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: true,
      gameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerVal: -1,
      computerVal: 1,
      player: false,
      computer: true
    }
  }

  handleReset = () => {
    this.setState({
      gameState: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
  }

  handleClick = (clicked) => {
    console.log(clicked);
  }

  render(){
    return(
      <div className='board-container'>
        <Tile id={0} onClick={this.handleClick}/>
        <Tile id={1} onClick={this.handleClick}/>
        <Tile id={2} onClick={this.handleClick}/>
        <Tile id={3} onClick={this.handleClick}/>
        <Tile id={4} onClick={this.handleClick}/>
        <Tile id={5} onClick={this.handleClick}/>
        <Tile id={6} onClick={this.handleClick}/>
        <Tile id={7} onClick={this.handleClick}/>
        <Tile id={8} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Board;