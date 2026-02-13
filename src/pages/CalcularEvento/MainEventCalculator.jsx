import { useState } from 'react'
import DamageCalculator from './DamageCalculator';
import { DamageContext } from "../../context/main"
import script from './utils/scripts/Script.js';

const MainEventCalculator = () => {
    const [valueDice, setvalueDice] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [valuesHit, setValuesHit] = useState([0,0,0]);
    const [calculatedDamage, setCalculatedDamage] = useState(0);
    const [currentAtletism, setCurrentAtletism] = useState(0);
    const [colorHit, setColorHit] = useState(null);
  
    function rollDice() {
      const dice = Math.floor(Math.random() * 20) + 1;
      
      setvalueDice(dice);
      return dice;
    }

     const addClick = () => {
  setClickCount(prev => prev + 1);
  return clickCount + 1; // retorna o valor atualizado
};
  
    function updateValues(currentAtletism){
      if (!currentAtletism) {
        setValuesHit([0, 0, 0]);
      } else {
        let hit = Math.round(currentAtletism * 0.50);
        let nearMiss = Math.round(currentAtletism * 0.80);
        let blackFlash = Math.round(currentAtletism * 0.20);
  
        setValuesHit([hit, nearMiss, blackFlash]);
      }
    }
  
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
      if (colorHit === 'ERROU' && valueDice < 20) {
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
    if (valueDice < 20) {
      return 'text-red-500';
    } else
    return 'text-red-900';
  };
  
    const handleAtletismChange = (event) => {
      if (!event.target.value) {
        const atletism = 0;
        setCurrentAtletism(atletism); 
      } else {
        const atletism = parseFloat(event.target.value);
        setCurrentAtletism(atletism); 
      }
    };
  
    const handleCalculateDamage = () => {
      const damage = script(valueDice, currentAtletism, setNewValueHit)
      setCalculatedDamage(damage);
    }
  
    return (
        <DamageContext.Provider value={{ valueDice, rollDice, valuesHit, calculatedDamage, updateValues, currentAtletism, handleAtletismChange, getColor, handleCalculateDamage, colorHit, setNewValueHit, getColorHit, clickCount, addClick,}}>
            <DamageCalculator/>
        </DamageContext.Provider>
    )
}

export default MainEventCalculator;