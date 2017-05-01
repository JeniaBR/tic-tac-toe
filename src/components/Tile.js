import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  let value = props.value;
  let selectedX = 'selectedX';
  let selectedO = 'selectedO';
  let unselected = 'unselected';
  let sign = value === 0 ? null : (value === -1 ? 'X' : 'O');
  
  return(
    <div className='tile' onClick={()=>{props.onTileClick(props.location)}}>
      {value}
    </div>
  );
}

Tile.propTypes = {
  
}

export default Tile;