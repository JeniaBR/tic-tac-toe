import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  return(
    <div className='tile'></div>
  );
}

Tile.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile;