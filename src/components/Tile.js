import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  let value = props.value;
  let selected = 'selected';
  let unselected = 'unselcted';
  let sign = value === 0 ? null : (value === -1 ? 'X' : 'O');
  return(
    <div onClick={props.onClick} className={`tile ${value !== 0 ? selected : unselected}`}>
      {sign}
    </div>
  );
}

Tile.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile;