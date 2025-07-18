import ScriptSelector from "./ScriptSelector";
import DiceHits from "./DiceHits";
import DamageInputs from "./DamageInputs";
import bgShibuya from "../../assets/cidade.png"

const DamageCalculator = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-800" style={{ backgroundImage: `url(${bgShibuya})` }}>
      <section className="max-w-4xl mx-auto p-5">
        <ScriptSelector />
        <DiceHits />
        <DamageInputs/>
      </section>
    </div>
    );
  };

export default DamageCalculator;