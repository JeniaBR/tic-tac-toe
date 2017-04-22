import React, {Component} from 'react';

class Board extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='board-container'>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
        <div className='tile'></div>
      </div>
    );
  }
}

export default Board;