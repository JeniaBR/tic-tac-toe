import React from 'react';

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

export default Announcement;