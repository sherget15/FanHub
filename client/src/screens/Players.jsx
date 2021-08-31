import React from 'react';

export default function Players(props) {
  const { players } = props;

  return (
    <div>
      <h3>Players</h3>
      {players.map((player) => (
        <p key={player.id}>{player.name}</p>
      ))}
    </div>
  );
}