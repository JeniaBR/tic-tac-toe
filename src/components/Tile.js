import React from 'react';
import PropTypes from 'prop-types';

const Tile = (props) => {
  let value = props.value;
  let selectedX = 'selectedX';
  let selectedO = 'selectedO';
  let unselected = 'unselected';
  let sign = value === 0 ? null : (value === -1 ? 'X' : 'O');
  return(
    <div onClick={props.onClick} className={`tile ${value === 0 ? unselected : (value === -1 ? selectedX : selectedO)}`}>
      {sign}
    </div>
  );
}

Tile.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tile;