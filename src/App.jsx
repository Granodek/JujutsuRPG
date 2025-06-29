import { Routes, Route } from "react-router-dom";
import MainDamageCalculator from './pages/CalcularDano/MainDamageCalculator';
import MainEventCalculator from './pages/CalcularEvento/MainEventCalculator';
import MainFichas from "./pages/Fichas/MainFichas";
import MainMinions from "./pages/Minions/MainFichas";
import MainInimigos from "./pages/Inimigos/MainFichas";
import MainCont from "./pages/contadorRodada/MainCont";
import StatusScreen from "./pages/Status/StatusScreen";
import Home from "./pages/HomePage/Home";
import Navbar from "./Components/Navbar";
import Zoas from "./pages/Test/zoas";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/rodadas' element={<MainCont />} />
        <Route path='/calcular-dano' element={<MainDamageCalculator />} />
        <Route path='/calcular-evento' element={<MainEventCalculator />} />
        <Route path='/fichas' element={<MainFichas />} />
        <Route path='/inimigos' element={<MainInimigos />} />
        <Route path='/minions' element={<MainMinions />} />
        <Route path='/status' element={<StatusScreen />} />
        <Route path='/zoas' element={<Zoas />} />
      </Routes>
    </>
  )
}

export default App
