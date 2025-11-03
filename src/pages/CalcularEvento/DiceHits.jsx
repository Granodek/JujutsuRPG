import { useContext } from "react";
import { DamageContext } from "../../context/main"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBreakEffect from '../../assets/Icon_Break_Effect.webp'
import { faDiceD20, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

const DiceHits = () => {

    const { rollDice, valueDice, updateValues, currentAtletism, valuesHit, getColor, clickCount, addClick} = useContext(DamageContext);

    return (
        <div className="flex flex-col justify-center items-center h-full w-full mt-10 space-y-5">
                  <button
                    onClick={() => {
                      const newDice = rollDice();
                      const newClick = addClick();
                      updateValues(currentAtletism);
                      console.log(`click: ${newClick}, Dado: ${newDice}`);
                    }}
                    className="bg-black-600 hover:bg-blue-500 text-black hover:text-white h-16 w-16 rounded-full flex justify-center items-center text-4xl shadow-lg transition-transform transform hover:scale-110 "
                    >
                    <FontAwesomeIcon icon={faDiceD20} />
                  </button>
        
                    <h2
                    id="dice"
                    className={` text-4xl font-bold py-2 px-4 rounded-lg shadow-md ${getColor(
                      valueDice,
                      valuesHit
                    )} bg-gray-800`}
                    >
                    {valueDice === 1 ? (
                      <>
                        <img src={IconBreakEffect} alt="icon" className="w-12 h-12" />
                      </>
                            ) : valueDice === 20 ? (
                      <>
                        <FontAwesomeIcon icon={faSkullCrossbones} />
                      </>
                    ) : (
                      valueDice
                    )}
                  </h2>
        
                  <div className=" text-center bg-gray-700 rounded-lg p-4 shadow-md w-3/4">
                    <h3 className="font-bold text-slate-200 text-lg">Taxas de Acerto:</h3>
                    <p id="near-miss" className="font-bold text-sky-400">
                      {`Normal: ${valuesHit[1]}`}
                    </p>
                    <p id="hit" className="font-bold text-green-400">
                      {`Bom: ${valuesHit[0]}`}
                    </p>
                    <p id="blackFlash" className="font-bold text-amber-400">
                      {`Extremo: ${valuesHit[2]}`}
                    </p>
                  </div>
                </div>
    )
}

export default DiceHits;