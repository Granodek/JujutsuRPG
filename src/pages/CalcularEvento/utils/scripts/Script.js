function script(dice, intimidation, setNewValueHit) {   
    let acerto = Math.round(intimidation * 0.5);
    let raspao = Math.round(intimidation * 0.8);
    let blackFlash = Math.round(intimidation * 0.2);

    if (dice === 1) {
       
        setNewValueHit("BLACKFLASH!!!");
        return `Calma Calabreso`;
    } else if (dice <= blackFlash) {
        setNewValueHit("BLACKFLASH!");
        return `Extremo`;
    } else if (dice <= acerto) {
        setNewValueHit("ACERTO");
        return `Bom`;
    } else if (dice <= raspao) {
        setNewValueHit("RASPAO");
        return `Normal`;
    } else {
        setNewValueHit("ERROU");
        return 'Você Errou';
    };
}

export default script;
