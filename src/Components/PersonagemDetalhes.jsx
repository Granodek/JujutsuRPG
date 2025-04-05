// src/components/PersonagemDetalhes.jsx (ou o nome do componente que exibe o personagem)

import React from 'react';
import HPBar from './HPBar'; // Importe o componente HPBar
import personagens from '../path/to/personagens'; // Importe os dados do personagem

const PersonagemDetalhes = () => {
  const malzahar = personagens.Malzahar; // Selecione o personagem Malzahar

  return (
    <div>
      <h1>{malzahar.name}</h1>
      <img src={malzahar.image} alt={malzahar.name} />
      <p>Level: {malzahar.level}</p>
      <p>Grade: {malzahar.grade}</p>

      {/* Barra de HP */}
      <HPBar personagem={malzahar} /> {/* Passando Malzahar como prop para o HPBar */}
    </div>
  );
};

export default PersonagemDetalhes;
