import React, {Component} from 'react';
import Board from './Board';
import Information from './Information';

class Game extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className='main-container'>
        <Board/>
        <Information/>
      </div>
    );
  }
}

export default Game;