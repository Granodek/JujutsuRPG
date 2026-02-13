import React, { useState, useEffect } from 'react';
import Character from "./PlayerCard";
import Inventory from "./PlayerInventory";
import Equipment from "./PlayerEquipment";
import { Helmet } from "react-helmet";

const MainFichas = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('Rearu');
  const [characterData, setCharacterData] = useState({});
  const [newEffect, setNewEffect] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemEffect, setItemEffect] = useState('');
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [equipmentGrade, setEquipmentGrade] = useState('');
  const [equipmentEffect, setEquipmentEffect] = useState('');
  const [saveName, setSaveName] = useState('');
   const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const saves = Object.keys(localStorage)
      .filter(key => key.startsWith('characterData_'))
      .map(key => key.replace('characterData_', ''));
  
    setSavedList(saves);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('characterData');
    if (savedData) {
      setCharacterData(JSON.parse(savedData));
    } else {
      fetch('/item.json')
        .then((res) => res.json())
        .then((data) => setCharacterData(data))
        .catch((err) => console.error("Erro ao carregar item.json:", err));
    }
  }, []);

  if (!characterData[selectedCharacter]) return <div>DEU RUIM...</div>;

  const handleSelectCharacter = (name) => {
    setSelectedCharacter(name);
  };

  const handleUpdateStat = (stat, value) => {
    setCharacterData((prevData) => {
      const updatedData = {
        ...prevData,
        [selectedCharacter]: {
          ...prevData[selectedCharacter],
          stats: {
            ...prevData[selectedCharacter].stats,
            [stat]: value,
          },
        },
      };
      return updatedData;
    });
  };

  const handleInputChange = (e, field) => {
    const { name, value } = e.target;

    if (name === "name" || name === "level" || name === "grade") {
      setCharacterData((prevData) => {
        const updatedData = {
          ...prevData,
          [selectedCharacter]: {
            ...prevData[selectedCharacter],
            [name]: value,
          },
        };
        return updatedData;
      });
    } else {
      setCharacterData((prevData) => {
        const updatedData = {
          ...prevData,
          [selectedCharacter]: {
            ...prevData[selectedCharacter],
            [field]: {
              ...prevData[selectedCharacter][field],
              [name]: value,
              ...(name === 'hp' && { DarkHp: value, shield: value })
            },
          },
  
        };
        return updatedData;
      });
    }
  };

  const handleAddItemToInventory = () => {
    if (itemName.trim() !== '' && itemQuantity > 0) {
      const newItem = { name: itemName, quantity: itemQuantity, effect: itemEffect };
      setCharacterData((prevData) => {
        const updatedData = {
          ...prevData,
          [selectedCharacter]: {
            ...prevData[selectedCharacter],
            inventory: [...prevData[selectedCharacter].inventory, newItem],
          },
        };
        return updatedData;
      });
      setItemName('');
      setItemQuantity(0);
      setItemEffect('');
    }
  };

  const handleRemoveItemFromInventory = (indexToRemove) => {
    setCharacterData((prevData) => {
      const updatedInventory = [...prevData[selectedCharacter].inventory];
      const item = updatedInventory[indexToRemove];
  
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        updatedInventory.splice(indexToRemove, 1);
      }
  
      return {
        ...prevData,
        [selectedCharacter]: {
          ...prevData[selectedCharacter],
          inventory: updatedInventory,
        },
      };
    });
  };

  const handleAddEffect = () => {
    if (newEffect.trim() !== '') {
      setCharacterData((prevData) => {
        const updatedData = {
          ...prevData,
          [selectedCharacter]: {
            ...prevData[selectedCharacter],
            effects: [...prevData[selectedCharacter].effects, newEffect],
          },
        };
        return updatedData;
      });
      setNewEffect('');
    }
  };

  const handleRemoveEffect = (indexToRemove) => {
  setCharacterData((prevData) => {
    const updatedEffects = prevData[selectedCharacter].effects.filter((_, index) => index !== indexToRemove);
    return {
      ...prevData,
      [selectedCharacter]: {
        ...prevData[selectedCharacter],
        effects: updatedEffects,
      },
    };
  });
};


  const handleAddEquipment = () => {
    if (
      equipmentType.trim() !== '' &&
      equipmentName.trim() !== '' &&
      equipmentGrade.trim() !== '' &&
      equipmentEffect.trim() !== ''
    ) {
      const newEquipment = { name: equipmentName, grade: equipmentGrade, effect: equipmentEffect };
      setCharacterData((prevData) => {
        const updatedEquipment = {
          ...prevData[selectedCharacter].equipment,
          [equipmentType]: newEquipment,
        };
        const updatedData = {
          ...prevData,
          [selectedCharacter]: {
            ...prevData[selectedCharacter],
            equipment: updatedEquipment,
          },
        };
        return updatedData;
      });
      setEquipmentName('');
      setEquipmentGrade('');
      setEquipmentType('');
      setEquipmentEffect('');
    }
  };

  const handleRemoveEquipment = (type) => {
    setCharacterData((prevData) => {
      const updatedEquipment = { ...prevData[selectedCharacter].equipment };
      delete updatedEquipment[type];
      return {
        ...prevData,
        [selectedCharacter]: {
          ...prevData[selectedCharacter],
          equipment: updatedEquipment,
        },
      };
    });
  };

  const handleSubmit = () => {
    if (!saveName.trim()) {
      alert('Por favor, digite um nome para o salvamento.');
      return;
    }

    localStorage.setItem(`characterData_${saveName}`, JSON.stringify(characterData));
    alert(`Dados salvos como "${saveName}"!`);
    setSavedList(prev => prev.filter(save => save !== name));
  };

  const handleLoadSave = (name) => {
    const saved = localStorage.getItem(`characterData_${name}`);
    if (saved) {
      setCharacterData(JSON.parse(saved));
      alert(`Salvamento "${name}" carregado!`);
    } else {
      alert(`Não foi encontrado nenhum salvamento com esse nome.`);
    }
  };

  const getAllSaves = () => {
    return Object.keys(localStorage).filter(key => key.startsWith('characterData_')).map(key => key.replace('characterData_', ''));
  };

  const handleDeleteSave = (name) => {
    localStorage.removeItem(`characterData_${name}`);
    alert(`Salvamento "${name}" deletado!`);
    setSavedList(prev => prev.filter(save => save !== name));
  };

  const handleExportSave = (name) => {
      const conteudo = localStorage.getItem(`characterData_${name}`); 
      
      const blob = new Blob([conteudo], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${name}.json`;
      a.click();

      URL.revokeObjectURL(url);
    };

    const handleJsonUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = JSON.parse(e.target.result);
      const saveName = file.name.replace(/\.[^/.]+$/, "");
      localStorage.setItem(`characterData_${saveName}`, JSON.stringify(json));
      alert(`JSON salvo como characterData_${saveName} no localStorage!`);
      setSavedList(prev => prev.filter(save => save !== name));
    } catch {
      alert("Arquivo inválido! Não é um JSON válido.");
    }
  };
  reader.readAsText(file);
}



  return (
    <div className="flex min-h-screen bg-red-700 text-white">
      <Helmet>
        <title>Fichas</title>
      </Helmet>
      <div className="w-1/4 p-4 bg-gray-900 border-r border-gray-700">
        <Inventory items={characterData[selectedCharacter].inventory} />
        <h3 className="text-lg font-semibold mt-4">Remover Item</h3>
        <ul className="list-disc pl-5">
          {characterData[selectedCharacter].inventory.map((item, index) => (
            <li key={index}>
              {item.name} <button onClick={() => handleRemoveItemFromInventory(index)} className="text-red-400 ml-2">Remover</button>
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Remover Efeito</h3>
        <ul className="list-disc pl-5">
                {characterData[selectedCharacter].effects.map((effect, index) => (
                  <li key={index}>
                    {effect} <button onClick={() => handleRemoveEffect(index)} className="text-red-400 ml-2">Remover</button>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold">Remover Equipamento</h3>
        <ul className="list-disc pl-5">
          {Object.entries(characterData[selectedCharacter].equipment).map(([type, equip], index) => (
            <li key={index}>
              {type}: {equip.name} <button onClick={() => handleRemoveEquipment(type)} className="text-red-400 ml-2">Remover</button>
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-6">Gerenciar Salvamentos</h3>
        <input type="file" accept=".json" onChange={handleJsonUpload} />
        <ul className="list-disc pl-5">
          {getAllSaves().map((name, index) => (
            <li key={index}>
              {name}
              <button onClick={() => handleLoadSave(name)} className="text-blue-400 ml-2">Carregar</button>
              <button onClick={() => handleDeleteSave(name)} className="text-red-400 ml-2">Excluir</button>
              <button onClick={() => handleExportSave(name)} className="text-green-400 ml-2">Exportar</button>
            </li>
          ))}
        </ul>
      </div>
      

      <div className="w-1/2 p-6 bg-yellow-200 text-black rounded-lg shadow-lg">
        <Character
          characters={characterData}
          selectedCharacter={selectedCharacter}
          onSelectCharacter={handleSelectCharacter}
          onUpdateStat={handleUpdateStat}
        />

        <div className="bg-gray-800 p-4 rounded-lg mt-5">
          <h2 className="text-xl font-bold mb-4">Editar Personagem</h2>

          <label className="block mb-2">
            Nome:
            <input
              type="text"
              name="name"
              value={characterData[selectedCharacter].name}
              onChange={(e) => handleInputChange(e, 'name')}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </label>

          <label className="block mb-2">
            Level:
            <input
              type="number"
              name="level"
              value={characterData[selectedCharacter].level}
              onChange={(e) => handleInputChange(e, 'level')}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </label>

          <label className="block mb-2">
            Grade:
            <input
              type="text"
              name="grade"
              value={characterData[selectedCharacter].grade}
              onChange={(e) => handleInputChange(e, 'grade')}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </label>

          <label className="block mb-2">
            Efeitos:
            <div>
              <input
                type="text"
                value={newEffect}
                onChange={(e) => setNewEffect(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white mt-2"
                placeholder="Digite um novo efeito"
              />
              <button
                onClick={handleAddEffect}
                className="bg-blue-600 p-2 rounded text-white mt-2"
              >
                Adicionar Efeito
              </button>
            </div>
          </label>

          {['hp', 'stamina', 'energy', 'panic'].map((stat) => (
            <label className="block mb-2" key={stat}>
              {stat.charAt(0).toUpperCase() + stat.slice(1)} Max:
              <input
                type="number"
                name={stat}
                value={characterData[selectedCharacter].maxStats[stat]}
                onChange={(e) => handleInputChange(e, 'maxStats')}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </label>
          ))}
          
          {['shield', 'DarkHp'].map((stat) => (
            <label className="block mb-2" key={stat}>
              {stat.charAt(0).toUpperCase() + stat.slice(1)} Max:
              <input
                type="number"
                name={stat}
                value={characterData[selectedCharacter].maxStats['hp']}
                onChange={(e) => handleInputChange(e, 'maxStats')}
                className="w-full p-2 rounded bg-gray-700 text-white"
                disabled
              />
            </label>
          ))}

          <div className="mt-4">
            <label className="block mb-2">
              Nome do item:
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite o nome do item"
              />
            </label>

            <label className="block mb-2">
              Quantidade:
              <input
                type="number"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(Number(e.target.value))}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite a quantidade"
              />
            </label>

            <label className="block mb-2">
              Efeito do item:
              <input
                type="text"
                value={itemEffect}
                onChange={(e) => setItemEffect(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite o efeito do item"
              />
            </label>

            <button
              onClick={handleAddItemToInventory}
              className="bg-blue-600 p-2 rounded text-white mt-4"
            >
              Adicionar Item ao Inventário
            </button>
          </div>

          <div className="mt-4">
            <label className="block mb-2">
              Tipo do Equipamento:
              <input
                type="text"
                value={equipmentType}
                onChange={(e) => setEquipmentType(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite o tipo do equipamento (ex: arma, armadura...)"
              />
            </label>
                        {//adoadoado quem ta lendo isso e não escreveu é viado  
                        }
            <label className="block mb-2">
              Nome do Equipamento:
              <input
                type="text"
                value={equipmentName}
                onChange={(e) => setEquipmentName(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite o nome do equipamento"
              />
            </label>

            <label className="block mb-2">
              Grau do Equipamento:
              <input
                type="text"
                value={equipmentGrade}
                onChange={(e) => setEquipmentGrade(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite o grau do equipamento"
              />
            </label>

            <label className="block mb-2">
              Efeito do Equipamento:
              <input
                type="text"
                value={equipmentEffect}
                onChange={(e) => setEquipmentEffect(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite o efeito do equipamento"
              />
            </label>

            <button
              onClick={handleAddEquipment}
              className="bg-blue-600 p-2 rounded text-white mt-4"
            >
              Adicionar Equipamento
            </button>
          </div>
          <label className="block mb-2">
            Nome do salvamento:
            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Ex: Save1, Save2, etc"
            />
          </label>
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="bg-green-600 p-2 rounded text-white"
            >
              Salvar Alterações
            </button>
          </div>
        </div>
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
};

export default MainFichas;
