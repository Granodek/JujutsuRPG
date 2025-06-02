import IconCritDamage from '../../assets/Icon_CRIT_DMG.webp'
import { useContext } from 'react';
import { DamageContext } from "../../context/main"
import bgVortex from "../../assets/buraco negro.png"

const DamageInputs = () => {
    const { handleCalculateDamage, setNewValueHit, getColorHit, colorHit, valueDice, valuesHit, calculatedDamage, currentAccuracy, handleAccuracyChange, currentStrength, handleStrengthChange, currentTechnique, handleTechniqueChange, currentMastery, handleMasteryChange, currentDefense, handleDefenseChange } = useContext(DamageContext);
    return (
        <form id="inputs" className="bg-transparent  mt-5 p-5 bg-gray-800 rounded-lg bg-contain shadow-lg bg-center  bg-no-repeat" style={{
        backgroundImage: `url(${bgVortex})`,
        }}>
            <div className="flex flex-col justify-center items-center h-full w-full my-5">
              <button 
                id="damage-button" 
                onClick={(e) => { e.preventDefault(); handleCalculateDamage() }} 
                className="bg-blue-600 hover:bg-blue-500 text-white h-16 w-16 rounded-full flex justify-center items-center text-4xl shadow-lg transition-transform transform hover:scale-110"
                type="submit"
                >
                <img src={IconCritDamage} alt="icon" className="w-9 h-9" />
              </button>
              <h2 id="damage" className={`text-4xl font-bold py-2 px-4 rounded-lg shadow-md mt-4 bg-gray-800 ${getColorHit(colorHit,valueDice)}`}>
              {calculatedDamage || "0"}
              </h2>
            </div>

            {[
              { id: "defense", label: "Redução de dano", value: currentDefense, onChange: handleDefenseChange },
              { id: "accuracy", label: "Precisão", value: currentAccuracy, onChange: handleAccuracyChange },
              { id: "strength", label: "Dano Físico", value: currentStrength, onChange: handleStrengthChange },
              { id: "technique", label: "Técnica Jujutsu", value: currentTechnique, onChange: handleTechniqueChange },
              { id: "mastery", label: "Maestria", value: currentMastery, onChange: handleMasteryChange },
            ].map(({ id, label, value, onChange }) => (
              <div key={id} className="flex flex-col justify-center items-center h-full w-full mb-4">
                <label htmlFor={id} className="font-bold text-white mb-2">
                  {label}
                </label>
                <input 
                  id={id} 
                  value={value} 
                  onChange={onChange} 
                  type="number" 
                  placeholder="0" 
                  className="w-64 px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-md text-center"
                  />
              </div>
            ))}
          </form>
    )
}

export default DamageInputs;