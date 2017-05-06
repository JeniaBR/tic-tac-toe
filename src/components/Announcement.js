import React from 'react';
import PropTypes from 'prop-types';

const Announcement = (props) => {
  const {minPlayer, winner} = props;
  let message;

  if(minPlayer === winner){
    message = 'You Lost :(';
  } else {
    message = 'Great! It`s a tie';
  }
  
  return(
    <div  className={winner ? 'overlay' : 'hidden'}>
      <div className='overlay-content'>
        <h1>{message}</h1>
        <button className='button' onClick={props.onClick}>Play again?</button>
      </div>
    </div>
  );
}

Announcement.propTypes = {
  onClick: PropTypes.func.isRequired,
  winner: PropTypes.string.isRequired,
  minPlayer: PropTypes.string.isRequired
}

export default Announcement;