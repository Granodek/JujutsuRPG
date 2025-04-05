import React, { useState, useEffect } from 'react';

const HPBar = ({ personagem }) => {
  const [hp, setHp] = useState(personagem.stats.hp);
  const [maxHp] = useState(personagem.maxStats.hp);

  const hpPercentage = (hp / maxHp) * 100;


  return (
    <div className="relative w-full h-4 bg-gray-700 rounded-lg overflow-hidden">
      
      <div
        className="absolute top-0 left-0 h-full bg-green-500"
        style={{ width: `${hpPercentage}%` }}
      ></div>


    </div>
  );
};

export default HPBar;
