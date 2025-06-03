import { useState } from 'react'
import DamageCalculator from './DamageCalculator';
import { DamageContext } from "../../context/main"
import scripts from './utils/scripts/scripts';

const MainDamageCalculator = () => {
    const [valueDice, setvalueDice] = useState(null);
    const [valuesHit, setValuesHit] = useState([0,0,0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [calculatedDamage, setCalculatedDamage] = useState(0);
    const [currentDefense, setCurrentDefense] = useState(0);
    const [currentAccuracy, setCurrentAccuracy] = useState(0);
    const [currentStrength, setCurrentStrength] = useState(0);
    const [currentTechnique, setCurrentTechnique] = useState(0);
    const [currentMastery, setCurrentMastery] = useState(0);
    const [currentScript, SetCurrentScript] = useState({});
    const [colorHit, setColorHit] = useState(null);
  
    function rollDice() {
      const dice = Math.floor(Math.random() * 100) + 1;
      
      setvalueDice(dice);
    }
  
    function updateValues(currentAccuracy){
      if (!currentAccuracy) {
        setValuesHit([0, 0, 0]);
      } else {
        let hit = Math.round(currentAccuracy * 0.25);
        let nearMiss = Math.round(currentAccuracy * 0.40);
        let blackFlash = Math.round(currentAccuracy * 0.10);
  
        setValuesHit([hit, nearMiss, blackFlash]);
      }
    }
  
    const handleNextScript = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scripts.length);
      SetCurrentScript(scripts[currentIndex])
  };

  const handlePreviousScript = () => {
    if(currentIndex >= 1){
      setCurrentIndex((prevIndex) => (prevIndex >=1 ? prevIndex - 1 : 0 ) % scripts.length);
      SetCurrentScript(scripts[currentIndex])
    }else{
      setCurrentIndex(6);
      SetCurrentScript(scripts[currentIndex])
    }
    
};
  
  const setNewValueHit = (newValue) => {
    setColorHit(newValue);
  }
  
    const getColorHit = (colorHit, valueDice) => {
      if (colorHit === 'BLACKFLASH!!!') {
          return 'text-white'
      } else
      if (colorHit === 'BLACKFLASH!' ) {
          return 'text-amber-400';
      } else
        if (colorHit === 'ACERTO') {
          return 'text-green-500'
      } else
        if (colorHit === 'RASPAO') {
          return 'text-sky-500';
      } 
      if (colorHit === 'ERROU' && valueDice < 100) {
        return 'text-red-500';
      } else
      return 'text-red-900';
  };
  
  const getColor = (valueDice, valuesHit) => {
    if (valueDice === 1) {
        return 'text-white'
    } else
    if (valueDice <= valuesHit[2]) {
        return 'text-amber-400';
    } else
      if (valueDice <= valuesHit[0]) {
        return 'text-green-500'
    } else
      if (valueDice <= valuesHit[1]) {
        return 'text-sky-500';
    } 
    if (valueDice < 100) {
      return 'text-red-500';
    } else
    return 'text-red-900';
  };
  
    const handleAccuracyChange = (event) => {
      if (!event.target.value) {
        const accuracy = 0;
        setCurrentAccuracy(accuracy); 
      } else {
        const accuracy = parseFloat(event.target.value);
        setCurrentAccuracy(accuracy); 
      }
    };

    const handleDefenseChange = (event) => {
      if (!event.target.value) {
        const defense = 0;
        setCurrentDefense(defense); 
      } else {
        const defense = parseFloat(event.target.value);
        setCurrentDefense(defense); 
      }
    };
  
    const handleCalculateDamage = () => {
      const damage = currentScript.calculateDamage(valueDice, currentDefense, currentAccuracy, currentTechnique, currentStrength, currentMastery, setNewValueHit)
      setCalculatedDamage(damage);
    }
  
    const handleStrengthChange = (event) => {
      if (!event.target.value) {
        const strength = 0;
        setCurrentStrength(strength); 
      } else {
        const strength = parseFloat(event.target.value);
        setCurrentStrength(strength); 
      }
    };
  
    const handleTechniqueChange = (event) => {
      if (!event.target.value) {
        const technique = 0;
        setCurrentTechnique(technique); 
      } else {
        const technique = parseFloat(event.target.value);
        setCurrentTechnique(technique); 
      }
    };
  
    const handleMasteryChange = (event) => {
      if (!event.target.value) {
        const mastery = 0;
        setCurrentMastery(mastery); 
      } else {
        const mastery = parseFloat(event.target.value);
        setCurrentMastery(mastery); 
      }
    };
  
    return (
        <DamageContext.Provider value={{ valueDice, rollDice, valuesHit, calculatedDamage, updateValues, currentIndex, handlePreviousScript, handleNextScript, currentAccuracy, handleAccuracyChange, getColor, handleCalculateDamage, handleStrengthChange, handleTechniqueChange, handleMasteryChange, currentScript, colorHit, setNewValueHit, getColorHit, currentDefense, handleDefenseChange}}>
            <DamageCalculator/>
        </DamageContext.Provider>
    )
}

export default MainDamageCalculator;