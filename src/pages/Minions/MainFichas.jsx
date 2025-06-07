import React, { useState } from 'react';
import Character from "./PlayerCard";
import Inventory from "./PlayerInventory";
import Equipment from "./PlayerEquipment";
import personagens from './utils/minions';


const MainFichas = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('MINIONS');
  const [characterData, setCharacterData] = useState(personagens);

  
  const handleSelectCharacter = (name) => {
    setSelectedCharacter(name);
  };

  
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
     
      <div className="w-1/4 p-4 bg-gray-900 border-r border-gray-700">
        <Inventory items={characterData[selectedCharacter].inventory} />
      </div>

      
      <div className="w-1/2 p-6 bg-yellow-200 text-black rounded-lg shadow-lg">
        <Character
          characters={characterData}
          selectedCharacter={selectedCharacter}
          onSelectCharacter={handleSelectCharacter}
          onUpdateStat={handleUpdateStat}
        />
      </div>

      
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
