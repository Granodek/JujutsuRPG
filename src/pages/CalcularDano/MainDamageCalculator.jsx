import { useState, useCallback, useMemo } from 'react';
import DamageCalculator from './DamageCalculator';
import { DamageContext } from "../../context/main";
import scripts from './utils/scripts/scripts';

const scriptKeys = Object.keys(scripts);

const MainDamageCalculator = () => {
  const scriptKeys = useMemo(() => Object.keys(scripts), []);
  const [clickCount, setClickCount] = useState(0);
  const [valueDice, setvalueDice] = useState(null);
  const [valuesHit, setValuesHit] = useState([0, 0, 0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calculatedDamage, setCalculatedDamage] = useState(0);
  const [currentDefense, setCurrentDefense] = useState(0);
  const [currentAccuracy, setCurrentAccuracy] = useState(0);
  const [currentStrength, setCurrentStrength] = useState(0);
  const [currentTechnique, setCurrentTechnique] = useState(0);
  const [currentMastery, setCurrentMastery] = useState(0);
  const [currentScript, SetCurrentScript] = useState(scripts[scriptKeys[0]]);
  const [colorHit, setColorHit] = useState(null);

  function rollDice() {
    const dice = Math.floor(Math.random() * 100) + 1;
    setvalueDice(dice);
    return dice;
  }

  const addClick = () => {
  setClickCount(prev => prev + 1);
  return clickCount + 1; // retorna o valor atualizado
 };

  function updateValues(currentAccuracy) {
    if (!currentAccuracy) {
      setValuesHit([0, 0, 0]);
    } else {
      let hit = Math.round(currentAccuracy * 0.25);
      let nearMiss = Math.round(currentAccuracy * 0.40);
      let blackFlash = Math.round(currentAccuracy * 0.10);
      if(blackFlash > 20 && !currentScript.name.includes("(Itadori)")){
        blackFlash = 20;
      }
      setValuesHit([hit, nearMiss, blackFlash]);
    }
  }
  const handleScriptChange = useCallback((scriptName) => {
    if (scripts[scriptName]) {
      SetCurrentScript(scripts[scriptName]);
    }
  }, []);

  const handleNextScript = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % scriptKeys.length;
      SetCurrentScript(scripts[scriptKeys[nextIndex]]);
      return nextIndex;
    });
  };

  const handlePreviousScript = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex > 0 ? prevIndex - 1 : scriptKeys.length - 1;
      SetCurrentScript(scripts[scriptKeys[prev]]);
      return prev;
    });
  };

  const setNewValueHit = (newValue) => {
    setColorHit(newValue);
  };

  const getColorHit = (colorHit, valueDice) => {
    if (colorHit === 'BLACKFLASH!!!') {
      return 'text-white';
    } else if (colorHit === 'BLACKFLASH!') {
      return 'text-amber-400';
    } else if (colorHit === 'ACERTO') {
      return 'text-green-500';
    } else if (colorHit === 'RASPAO') {
      return 'text-sky-500';
    } else if (colorHit === 'ERROU' && valueDice < 100) {
      return 'text-red-500';
    } else return 'text-red-900';
  };

  const getColor = (valueDice, valuesHit) => {
    if (valueDice === 1) {
      return 'text-white';
    } else if (valueDice <= valuesHit[2]) {
      return 'text-amber-400';
    } else if (valueDice <= valuesHit[0]) {
      return 'text-green-500';
    } else if (valueDice <= valuesHit[1]) {
      return 'text-sky-500';
    }
    if (valueDice < 100) {
      return 'text-red-500';
    } else return 'text-red-900';
  };

  const handleAccuracyChange = (event) => {
    const accuracy = event.target.value ? parseFloat(event.target.value) : 0;
    setCurrentAccuracy(accuracy);
  };

  const handleDefenseChange = (event) => {
    const defense = event.target.value ? parseFloat(event.target.value) : 0;
    setCurrentDefense(defense);
  };

  const handleCalculateDamage = () => {
    console.log("Script atual:", currentScript?.name);
    if (!currentScript?.calculateDamage) return setCalculatedDamage(0);

    const damage = currentScript.calculateDamage(
      valueDice,
      currentDefense,
      currentAccuracy,
      currentTechnique,
      currentStrength,
      currentMastery,
      setNewValueHit
    );
    setCalculatedDamage(damage);
  };

  const handleStrengthChange = (event) => {
    const strength = event.target.value ? parseFloat(event.target.value) : 0;
    setCurrentStrength(strength);
  };

  const handleTechniqueChange = (event) => {
    const technique = event.target.value ? parseFloat(event.target.value) : 0;
    setCurrentTechnique(technique);
  };

  const handleMasteryChange = (event) => {
    const mastery = event.target.value ? parseFloat(event.target.value) : 0;
    setCurrentMastery(mastery);
  };

  return (
    <DamageContext.Provider
      value={{
        handleScriptChange,
        valueDice,
        rollDice,
        valuesHit,
        calculatedDamage,
        updateValues,
        currentIndex,
        handlePreviousScript,
        handleNextScript,
        currentAccuracy,
        handleAccuracyChange,
        getColor,
        handleCalculateDamage,
        handleStrengthChange,
        handleTechniqueChange,
        handleMasteryChange,
        currentScript,
        colorHit,
        setNewValueHit,
        getColorHit,
        currentDefense,
        handleDefenseChange,
        clickCount,
        addClick,
      }}
    >
      <DamageCalculator />
    </DamageContext.Provider>
  );
};

export default MainDamageCalculator;
