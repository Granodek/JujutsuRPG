function cabecaCorre(dice, defense, accuracy, technique, strength, mastery, setNewValueHit) {  
    let acerto = Math.round(accuracy * 0.25);
    let raspao = Math.round(accuracy * 0.40);
    let blackFlash = Math.round(accuracy * 0.1);
    if(blackFlash > 20){
        blackFlash = 20;
    }
    let percFisico = parseFloat(strength) || 0;
    let percTecnica = parseFloat(technique) || 0;
    let percMastery = Number(mastery) || 0;

    let dano;
    let danoEnergia = (percTecnica * 0.75);

    if((100-defense) >= 100){
        danoEnergia = Math.abs((danoEnergia/100) * (100-defense));
    }

    if (dice === 1) {
        percTecnica *= 2.1
        dano = (percFisico * 1.35) + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        danoEnergia *= (1 + percMastery / 100);
        setNewValueHit("BLACKFLASH!!!");
        return `Black Flash Dano: ${dano.toFixed(0)} e ${danoEnergia.toFixed(0)}`;
    } else if (dice <= blackFlash) {
        percTecnica *= 2.1
        dano = (percFisico * 1.35) + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        danoEnergia *= (1 + percMastery / 100);
        setNewValueHit("BLACKFLASH!");
        return `Black Flash Dano: ${dano.toFixed(0)} e ${danoEnergia.toFixed(0)}`;
    } else if (dice <= acerto) {
        percTecnica *= 0.9
        percFisico *= 0.7
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        danoEnergia *= (1 + percMastery / 100);
        setNewValueHit("ACERTO");
        return `Dano de Acerto: ${dano.toFixed(0)} e ${danoEnergia.toFixed(0)}`;
    } else if (dice <= raspao) {
        percFisico *= 0.45
        percTecnica *= 0.35
        dano = percFisico + percTecnica
        dano *= (1 + percMastery / 100);
        dano = Math.abs((dano/100) * (100-defense));
        danoEnergia *= (1 + percMastery / 100);
        setNewValueHit("RASPAO");
        return `Dano de Raspão: ${dano.toFixed(0)} e ${danoEnergia.toFixed(0)}`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default cabecaCorre;