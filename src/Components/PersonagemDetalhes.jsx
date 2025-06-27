import React from 'react';
import HPBar from './HPBar'; 
import personagens from '../path/to/personagens'; 

const PersonagemDetalhes = () => {
  const malzahar = personagens.Malzahar;

  return (
    <div>
      <h1>{malzahar.name}</h1>
      <img src={malzahar.image} alt={malzahar.name} />
      <p>Level: {malzahar.level}</p>
      <p>Grade: {malzahar.grade}</p>

    
      <HPBar personagem={malzahar} /> 
    </div>
  );
};

export default PersonagemDetalhes;
