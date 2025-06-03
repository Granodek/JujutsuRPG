function RyumaAttack(dice, defense, accuracy, technique, strength, mastery, setNewValueHit) {   
    let acerto = Math.round(accuracy * 0.25);
    let raspao = Math.round(accuracy * 0.40);
    let blackFlash = Math.round(accuracy * 0.1);
    
    let percFisico = parseFloat(strength)|| 0;
    let percTecnica = parseFloat(technique)|| 0;
    let percVariaTecnica = 0.30;
    let percVariaFisico = 0.70;
    let percMastery = Number(mastery) || 0;

    let danoArma = 15;
    let dano;

    if (dice === 1) {
        percTecnica *= percVariaTecnica * 2;
        percFisico *= percVariaFisico * 2;
        dano = percFisico + percTecnica + danoArma * 2;
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("BLACKFLASH!!!");
        return `Dano Crítico de 200%: ${dano.toFixed(2)}`;
    } else if (dice <= blackFlash) {
        percFisico *= percVariaFisico * 1.50;
        percTecnica *= percVariaTecnica * 1.50;
        dano = percFisico + percTecnica + danoArma;
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("BLACKFLASH!");
        return `Dano Crítico: ${dano.toFixed(2)}`;
    } else if (dice <= acerto) {
        percTecnica *= percVariaTecnica;
        percFisico *= percVariaFisico;
        dano = percFisico + percTecnica + danoArma;
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("ACERTO");
        return `Dano de Acerto: ${dano.toFixed(2)}`;
    } else if (dice <= raspao) {
        percFisico *= percVariaFisico/2
        percTecnica *= percVariaFisico/2
        dano = percFisico + percTecnica + danoArma / 2
        dano *= (1 + percMastery / 100);
        dano = (dano/100) * (100-defense);
        setNewValueHit("RASPAO");
        return `Dano de Raspão: ${dano.toFixed(2)}`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default RyumaAttack;