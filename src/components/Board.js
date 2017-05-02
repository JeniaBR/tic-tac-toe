import React, {Component} from 'react';
import Tile from './Tile';

const Board = (props) => {

    return(
      <div className='board-container'>
        {props.board.map((value,i)=>{
          return <Tile 
                  onTileClick={props.onTileClick} 
                  key={i} 
                  location={i} 
                  value={value}
                  turn={props.turn}/>
        })}
      </div>
    );
}

export default Board;