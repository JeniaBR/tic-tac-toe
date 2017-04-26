import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  return(
    <div onClick={props.onClick} className='tile'>
      {props.value === 0 ? null : props.value}
    </div>
  );
}

Tile.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Tile;