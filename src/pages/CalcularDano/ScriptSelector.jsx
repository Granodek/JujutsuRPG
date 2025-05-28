import { useContext} from "react";
import { DamageContext } from "../../context/main"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const ScriptSelector = () => {
    const { handlePreviousScript, handleNextScript, currentScript} = useContext(DamageContext);

    return (
        <div id="script-selector" className="flex flex-col justify-center items-center h-full space-y-5">
            <h2 className="text-white text-2xl font-semibold tracking-wide mb-4 mt-10">Escolha o Ataque</h2>
            <div id="buttons-container" className="flex flex-row space-x-6">
            
                <button
                                    id="previous-attack"
                                    onClick={() => {
                                        handlePreviousScript();
                                    }}
                                    className="bg-blue-600 hover:bg-blue-500 text-white h-16 w-16 rounded-full flex justify-center items-center text-4xl shadow-lg transition-transform transform hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={faBackward} className="text-slate-100" />
                                </button>
                                <button
                                    id="next-attack"
                                    onClick={() => {
                                        handleNextScript();
                                    }}
                                    className="bg-blue-600 hover:bg-blue-500 text-white h-16 w-16 rounded-full flex justify-center items-center text-4xl shadow-lg transition-transform transform hover:scale-110"
                                >
                                    <FontAwesomeIcon icon={faForward} className="text-slate-100" />
                                </button>
            </div>
        
            <div id="selected-attack" className="flex flex-col justify-center items-center mt-5 w-full h-80 bg-gray-800 rounded-lg p-4">
                <img
                    id="selected-image"
                    src={currentScript.image}
                    alt={currentScript.name}
                    className="h-52 object-cover rounded-lg shadow-md"
                />
                <p
                    id="selected-text"
                    className="text-white text-lg font-medium mt-5 tracking-wide border-b-2 border-gray-500 pb-1 text-center"
                >
                    {currentScript.name}
                </p>
            </div>
        </div>
    );
}

export default ScriptSelector;