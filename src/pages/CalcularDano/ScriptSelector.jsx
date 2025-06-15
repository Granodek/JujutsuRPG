import { useContext, useMemo } from "react";
import { DamageContext } from "../../context/main";
import scripts from "./utils/scripts/scripts";

const ScriptSelector = () => {
    const {
        currentScript,
        handleScriptChange
    } = useContext(DamageContext);

    const scriptKeys = useMemo(() => Object.keys(scripts), []);
    const selectedScript = currentScript || { name: 'Ataque não encontrado', image: '' };

    return (
        <div id="script-selector" className="flex flex-col justify-center items-center h-full space-y-5">
            <h2 className="text-white text-2xl font-semibold tracking-wide mb-4 mt-10">
                Escolha o Ataque
            </h2>

            <div className="flex flex-row space-x-6 w-full max-w-xs">
                <select
                    className="w-full p-2.5 rounded-lg border border-gray-400 bg-white cursor-pointer text-center"
                    onChange={(e) => handleScriptChange(e.target.value)}
                    value={currentScript ? scriptKeys.find(key => scripts[key].name === currentScript.name) : ''}
                >
                    {scriptKeys.map((key) => (
                    <option key={key} value={key}>
                        {scripts[key].name}
                    </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col justify-center items-center mt-5 w-full h-80 bg-gray-800 rounded-lg p-4">
                {selectedScript.image ? (
                    <img
                        src={selectedScript.image}
                        alt={selectedScript.name}
                        className="h-52 object-cover rounded-lg shadow-md"
                        loading="lazy"
                    />
                ) : (
                    <div className="h-52 flex items-center justify-center text-white">
                        Sem imagem disponível
                    </div>
                )}
                <p className="text-white text-lg font-medium mt-5 tracking-wide border-b-2 border-gray-500 pb-1 text-center">
                    {selectedScript.name}
                </p>
            </div>
        </div>
    );
};

export default ScriptSelector;