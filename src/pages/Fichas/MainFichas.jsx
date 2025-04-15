import React, { useState } from 'react';
import Character from "./PlayerCard";
import Inventory from "./PlayerInventory";
import Equipment from "./PlayerEquipment";
import personagens from './utils/personagens';


const MainFichas = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('Rearu');
  const [characterData, setCharacterData] = useState(personagens);

  // Função para mudar o personagem selecionado
  const handleSelectCharacter = (name) => {
    setSelectedCharacter(name);
  };

  // Função para atualizar os atributos dos personagens
  const handleUpdateStat = (stat, value) => {
    setCharacterData((prevData) => ({
      ...prevData,
      [selectedCharacter]: {
        ...prevData[selectedCharacter],
        stats: {
          ...prevData[selectedCharacter].stats,
          [stat]: value,
        },
      },
    }));
  };

  return (
    <div className="flex min-h-screen bg-red-700 text-white">
      {/* Inventário */}
      <div className="w-1/4 p-4 bg-gray-900 border-r border-gray-700">
        <Inventory items={characterData[selectedCharacter].inventory} />
      </div>

      {/* Ficha do Personagem */}
      <div className="w-1/2 p-6 bg-yellow-200 text-black rounded-lg shadow-lg">
        <Character
          characters={characterData}
          selectedCharacter={selectedCharacter}
          onSelectCharacter={handleSelectCharacter}
          onUpdateStat={handleUpdateStat}
        />
      </div>

      {/* Equipamentos */}
      <div className="w-1/4 p-4 bg-gray-900 border-l border-gray-700">
        <Equipment 
          equipment={characterData[selectedCharacter].equipment} 
          level={characterData[selectedCharacter].level} 
          grade={characterData[selectedCharacter].grade} 
          effects={characterData[selectedCharacter].effects} 
        />
      </div>
    </div>
  );
}

export default MainFichas;
