import React from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';

const Board = (props) => {

    return(
      <div className='board-container'>
        {props.board.map((value,i)=>{
          return <Tile 
                  onTileClick={props.onTileClick} 
                  key={i} 
                  location={i} 
                  value={value}/>
        })}
      </div>
    );
}

Board.propTypes = {
  onTileClick: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired
}

export default Board;