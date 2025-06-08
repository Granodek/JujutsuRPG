import { ContadorContext } from "../../context/main";
import { useContext } from "react";
import fodase from "../../assets/espaco2.png"

const Contador = () => {
    const {numero, handlePlusNumber, handleResetNumber, handleMinusNumber, handleWrongNumber} = useContext(ContadorContext);
  return (
     <div className="min-h-screen bg-cover bg-center text-white flex justify-center items-center" style={{backgroundImage:  `url(${fodase})`}}>     
            <div className="flex items-center flex-col space-y-4 w-2/5 p-4  rounded-lg bg-gray-900 border border-gray-700">
                <p className="w-1/5 px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-md text-center">{numero}</p>
                 <div className="flex justify-center items-center flex-row w-2/5 space-x-5">
                 {[
                    {label: "Proximo", funcao: handlePlusNumber},
                    {label:"Anterior", funcao: handleMinusNumber}, 
                    {label: "Resetar", funcao: handleResetNumber}
                ]
                    .map(({label, funcao}) => 
                    <button className="w-2/5 px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-md text-center" onClick={funcao}>{label}</button>
                 )}
                   </div>
            </div>
           <button className="rounded-lg text-transparent" onClick={handleWrongNumber}>oi</button>
            
        </div>
    );
};
export default Contador;