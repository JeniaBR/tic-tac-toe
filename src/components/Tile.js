import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  return(
    <div onClick={props.onClick.bind(this, props.id)} className='tile'></div>
  );
}

Tile.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile;