import {useState} from 'react';
import { ContadorContext } from '../../context/main';
import Contador from './contador';

const MainCont = () => {
const [numero, setNumero] = useState(0);
    
const handlePlusNumber = () => {
    setNumero(numero+1);
};
const handleMinusNumber = () => {
    if(numero != 0){
        setNumero(numero-1);
    }
};
const handleWrongNumber = () => {
    setNumero(Infinity);   
};
const handleResetNumber = () => {
    setNumero(0);
};

    return(
         <ContadorContext.Provider value={{numero, handlePlusNumber, handleMinusNumber, handleResetNumber, handleWrongNumber}}>
            <Contador/>
        </ContadorContext.Provider>
        )
}
export default MainCont;
