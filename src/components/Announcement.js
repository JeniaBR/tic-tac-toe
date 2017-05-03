import React from 'react';

const Announcement = (props) => {
  return(
    <div className={props.winner ? 'visible' : 'hidden'}>
      <h2>Game Over {props.winner}</h2>
    </div>
  );
}

export default Announcement;