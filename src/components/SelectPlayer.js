import React from 'react';

const SelectPlayer = (props) => {
  return(
    <div  className='overlay'>
      <div className='overlay-content'>
        <h2>Choose your side :)</h2>
        <button onClick={props.onSelectPlayer.bind(null,'X')}>X</button>
        <button onClick={props.onSelectPlayer.bind(null,'O')}>O</button>
      </div>
    </div>
  );
}

export default SelectPlayer;