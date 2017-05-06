import React from 'react';
import PropTypes from 'prop-types';


const SelectPlayer = (props) => {
  return(
    <div  className='overlay'>
      <div className='overlay-content'>
        <h1>Choose side:</h1>
        <div className='select-player-container'>
          <div onClick={props.onSelectPlayer.bind(null,'X')} className="select-tile">X</div>
          <div onClick={props.onSelectPlayer.bind(null,'O')} className="select-tile">O</div>
        </div>
      </div>
    </div>
  );
}

SelectPlayer.propTypes = {
  onSelectPlayer: PropTypes.func.isRequired
}

export default SelectPlayer;