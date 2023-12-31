import React from 'react';
import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name)

  const handleClick = () => {
    setIsEditing(() => !isEditing);
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className='player'>
        {isEditing && <input type='text' required value={playerName} onChange={handleChange} />}
        {!isEditing && <span className='player-name'>{playerName}</span>}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
