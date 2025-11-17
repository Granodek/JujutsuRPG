function rearuFist(dice, defense, accuracy, technique, strength, mastery, setNewValueHit) {
    let acerto = Math.round(accuracy * 0.25);
    let raspao = Math.round(accuracy * 0.40);
    let blackFlash = Math.round(accuracy * 0.1);
    let rearuDice;
    if (dice === 4) {
        rearuDice = dice - 3;
    } else if (dice === 3) {
        rearuDice = dice - 2;
    } else if (dice === 2) {
        rearuDice = dice - 1;
    } else if (dice === 1){
        rearuDice = dice;
    } else {
        rearuDice = dice - 3;
    }
    
    let percFisico = parseFloat(strength) || 0;
    let percTecnica = parseFloat(technique) || 0;
    let percMastery = Number(mastery) || 0;
    let dano;

    if (rearuDice === 1) {
        percTecnica *= 3.0
        percFisico *= 1.5   
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("BLACKFLASH!!!");
        return `Black Flash Dano 300%: ${dano.toFixed(2)}`;
    } else if (rearuDice <= blackFlash) {
        percTecnica *= 2.40 
        dano = (percFisico * 1.2) + percTecnica
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("BLACKFLASH!");
        return `Black Flash Dano: ${dano.toFixed(2)}`;
    } else if (rearuDice <= acerto) {
        percTecnica *= 0.60
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("ACERTO");
        return `Dano de Acerto: ${dano.toFixed(2)}`;
    } else if (rearuDice <= raspao) {
        percFisico *= 0.50
        percTecnica *= 0.30
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("RASPAO");
        return `Dano de Raspão: ${dano.toFixed(2)}`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default rearuFist;