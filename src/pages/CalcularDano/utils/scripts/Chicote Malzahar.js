function chicote(dice, defense, accuracy, technique, strength, mastery, setNewValueHit) {   
    let acerto = Math.round(accuracy * 0.25);
    let raspao = Math.round(accuracy * 0.40);
    let blackFlash = Math.round(accuracy * 0.1);

    let percFisico = parseFloat(strength) || 0;
    let percTecnica = parseFloat(technique) || 0;
    let percMastery = Number(mastery) || 0;
    let percArma;

    let dano;

    if (dice === 1) {
        percArma = percFisico * 2.8 + (percTecnica * 1.25);
        dano = percArma * 1.5
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("BLACKFLASH!!!");
        return `Dano Crítico 150%: ${dano.toFixed(2)}`;
    } else if (dice <= blackFlash) {
        percArma = percFisico * 2.1 + (percTecnica * 1.0);
        dano = percArma * 1.2
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("BLACKFLASH!");
        return `Dano Crítico: ${dano.toFixed(2)}`;
    } else if (dice <= acerto) {
        percArma = percFisico * 1.4 + (percTecnica * 0.5);
        dano = percArma;
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("ACERTO");
        return `Dano de Acerto: ${dano.toFixed(2)}`;
    } else if (dice <= raspao) {
        percArma = percFisico * 0.7 + (percTecnica * 0.25);
        dano = percArma;
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("RASPAO");
        return `Dano de Raspão: ${dano.toFixed(2)}`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default chicote;
