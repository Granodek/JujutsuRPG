import React from 'react';
import charactersData from './characters';

const StatusScreen = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      {charactersData.map((character, index) => (
        <div key={index} className="mb-6 border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-bold text-yellow-400">{character.name}</h2>
          <p className="text-gray-400">Grade: {character.grade} | Level: {character.level}</p>
          <p>Health: {character.health} | Stamina: {character.stamina}</p>
          <p>Jujutsu Energy: {character.jujutsuEnergy}</p>
          <p>Strength: {character.strength} | Speed: {character.speed}</p>
          <p>Intelligence: {character.intelligence} | Accuracy: {character.accuracy}</p>
          <p>Resistance: {character.resistance}</p>
          <p className="text-blue-400">Técnica: {character.jujutsuTechnique}</p>
          {character.additionalStatus && <p className="text-green-400">Status Adicional: {character.additionalStatus}</p>}
          <h3 className="text-xl font-semibold mt-4">Efeitos Passivos</h3>
          <ul className="list-disc pl-5">
            {character.passiveEffects.map((effect, i) => (
              <li key={i}>{effect}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Habilidades</h3>
          <ul className="list-disc pl-5">
            {character.abilities.map((ability, i) => (
              <li key={i}>
                <p className="text-yellow-300">{ability.name}</p>
                <p>{ability.description}</p>
                <p className="text-gray-400">Custo: {ability.cost}</p>
                {ability.range && <p className="text-gray-400">Alcance: {ability.range}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StatusScreen;