function favorOfFateFist(dice, accuracy, technique, strength, mastery, setNewValueHit) {   
    
    let percFisico = parseFloat(strength) || 0;
    let percTecnica = parseFloat(technique) || 0;
    let percMastery = Number(mastery) || 0;
    let dano;

    if (dice <= 30) {
        percTecnica *= 3.0
        dano = (percFisico + percTecnica) 
        dano *= (1 + percMastery / 100);
        setNewValueHit("BLACKFLASH!!!");
        return `Dano Crítico de 100%: ${dano.toFixed(2)}`;
    } else if (dice <= 60) {
        percTecnica *= 2.40 
        dano = (percFisico + percTecnica)
        dano *= (1 + percMastery / 100);
        setNewValueHit("BLACKFLASH!");
        return `Dano Crítico: ${dano.toFixed(2)}`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default favorOfFateFist;