import React from 'react';

const Character = ({ characters, selectedCharacter, onSelectCharacter, onUpdateStat }) => {
  if (!characters[selectedCharacter]) return null;
  const character = characters[selectedCharacter];

  const handleInputChange = (stat, value) => {
    if (value < 0) {
      value = 0;
    } else if (value > character.maxStats[stat]) {
      value = character.maxStats[stat];
    }
    onUpdateStat(stat, value);
  };

  return (
    <div className="bg-[#f9c87f] rounded-xl p-5 shadow-lg max-w-6xl w-[95%] flex gap-5 mx-auto">
      
      <div className="bg-[#f9c87f] rounded-xl p-5 text-center shadow-lg flex-1">
        <div className="mb-5">
          <label htmlFor="character-select" className="text-xl font-bold">Escolha o Personagem</label>
          <select
            id="character-select"
            onChange={(e) => onSelectCharacter(e.target.value)}
            value={selectedCharacter}
            className="w-full p-2.5 rounded-lg border border-gray-400 bg-white cursor-pointer text-center"
          >
            {Object.keys(characters).map((name) => (
              <option key={name} value={name}>{characters[name].name}</option>
            ))}
          </select>
        </div>

        <div className="flex max-w-[80%] rounded-lg m-10 justify-center">
          <img src={character.image} alt={character.name} className="w-40 rounded-lg shadow-md" />
        </div>

        <h2 className="mt-4 text-[#333] font-bold text-xl border-b-2 border-gray-400 shadow-lg shadow-gray-500/50 p-3 bg-gray-200 rounded-lg">
          {character.name}
        </h2>
        
        {Object.entries(character.stats).map(([stat, value]) => {
          if (stat === 'DarkHp') return null;

          let barColor = 'bg-green-600';
          if (stat === 'hp') {
            const percentage = (value / character.maxStats[stat]) * 100;
            if (percentage < 30) {
              barColor = 'bg-red-600';
            } else if (percentage < 50) {
              barColor = 'bg-yellow-600';
            }
          } else {
            barColor = stat === 'energy' ? 'bg-[#5ae9dd]' : stat === 'stamina' ? 'bg-orange-600' : 'bg-purple-600';
          }

          return (
            <div key={stat} className="mt-4">
              <div className="flex items-center mb-2.5">
                <input
                  type="text"
                  value={stat.toUpperCase()}
                  disabled
                  className="w-[20%] text-center bg-transparent border-none text-black font-bold mx-2"
                />
                <div className="w-[80%] bg-[rgb(27,26,26)] rounded-xl h-6 relative">
                {stat === 'hp' && character.name === 'Malzahar' ? (
                    <>
                      <div
                        className={`h-full border-2 border-black border-solid rounded-xl transition-all duration-700 ${barColor}`}
                        style={{ width: `${(value / character.maxStats[stat]) * 100}%` }}
                      ></div>
                      <div
                        className="absolute bottom-0 w-full h-2/4 bg-purple-600 border-2 border-black border-solid rounded-xl transition-all duration-700"
                        style={{ width: `${(character.stats.DarkHp / character.maxStats.DarkHp) * 100}%` }}
                      ></div>
                    </>
                  ) : stat !== 'DarkHp' ? (
                            
                            <div
                              className={`h-full border-2 border-black border-solid rounded-xl transition-all duration-700 ${barColor}`}
                              style={{
                                width: stat !== 'DarkHp' 
                                  ? `${(value / character.maxStats[stat]) * 100}%` 
                                  : null
                              }}
                            ></div>

                  ):null}
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {stat !== 'DarkHp' ? `${value}/${character.maxStats[stat]}`: null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex flex-col mt-4">
          {character.name !== 'Malzahar' ? (
            ['hp', 'stamina', 'energy', 'panic'].map((stat) => (
              <div className="flex flex-row mt-2 w-full" key={stat}>
                <label className="font-bold w-[20%]" htmlFor={`${stat}-change`}>
                  {stat.charAt(0).toUpperCase() + stat.slice(1)}:
                </label>
                <input
                  className="w-[40%] font-sans rounded-lg border border-gray-400 text-center mx-1"
                  placeholder="0"
                  type="number"
                  id={`${stat}-change`}
                  value={character.stats[stat]}
                  onChange={(e) => handleInputChange(stat, Number(e.target.value))}
                />
              </div>
            ))
          ) : (
            <>
              <div className="flex flex-col mt-4">
                {['hp', 'DarkHp', 'stamina', 'energy', 'panic'].map((stat) => (
                  <div className="flex flex-row mt-2 w-full" key={stat}>
                    <label className="font-bold w-[20%]" htmlFor={`${stat}-change`}>
                      {stat.charAt(0).toUpperCase() + stat.slice(1)}:
                    </label>
                    <input
                      className="w-[40%] font-sans rounded-lg border border-gray-400 text-center mx-1"
                      placeholder="0"
                      type="number"
                      id={`${stat}-change`}
                      value={character.stats[stat]}
                      onChange={(e) => handleInputChange(stat, Number(e.target.value))}
                    />
                  </div>
                ))
}</div>
            </>
          )}
        </div>

      </div>
      
    </div>
  );
};

export default Character;
