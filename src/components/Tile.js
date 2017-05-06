import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  let value = props.value;
  
  return(
    <div className='tile' onClick={()=>{props.onTileClick(props.location)}}>
      {value}
    </div>
  );
}

Tile.propTypes = {
  
}

export default Tile;