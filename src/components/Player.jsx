import React from 'react';
import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name)

  const handleClick = () => {
    setIsEditing(!isEditing);
  }

  const onPlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className='player'>
        {isEditing && <input type='text' value={playerName} onChange={onPlayerNameChange} />}
        {!isEditing && <span className='player-name'>{playerName}</span>}
        <span className='player-symbol'>{symbol}</span>
      </span>
      {!isEditing && <button onClick={handleClick}>Edit</button>}
      {isEditing && <button onClick={handleClick}>Save</button>}
    </li>
  );
};

export default Player;
