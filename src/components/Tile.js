import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  let {value,location} = props;
  
  return(
    <div className='tile' onClick={()=>{props.onTileClick(location)}}>
      {value}
    </div>
  );
}

Tile.propTypes = {
  onTileClick: PropTypes.func.isRequired,
  location: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
}

export default Tile;