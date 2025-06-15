function Pistola(dice, defense, accuracy, technique, strength, mastery, setNewValueHit) {   
    let acerto = Math.round(accuracy * 0.25);
    let raspao = Math.round(accuracy * 0.40);
    let blackFlash = Math.round(accuracy * 0.1);

    let percFisico = parseFloat(strength) || 0;
    let percTecnica = parseFloat(technique) || 0;
    let percMastery = Number(mastery) || 0;

    let dano;

    if (dice === 1) {
        percTecnica *= 1.5  
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        setNewValueHit("BLACKFLASH!!!");
        return `Black Flash Dano 300%: ${dano.toFixed(2)}`;
    } else if (dice <= blackFlash) {
        percTecnica *= 1.2 
        dano = (percFisico * 0.75) + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        setNewValueHit("BLACKFLASH!");
        return `Black Flash Dano: ${dano.toFixed(2)}`;
    } else if (dice <= acerto) {
        percTecnica *= 0.60
        dano = (percFisico*0.5) + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        setNewValueHit("ACERTO");
        return `Dano de Acerto: ${dano.toFixed(2)}`;
    } else if (dice <= raspao) {
        percFisico *= 0.50
        percTecnica *= 0.30
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        setNewValueHit("RASPAO");
        return `Dano de Raspão: ${dano.toFixed(2)}`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default Pistola;