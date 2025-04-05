function CalcularDano(dado) {   
    let acerto = Math.round(accuracyElement.value * 0.25);
    let raspao = Math.round(accuracyElement.value * 0.40);
    let blackFlash = Math.round(accuracyElement.value * 0.1);
    
    let percFisico = parseFloat(strengthElement.value) || 0;
    let percTecnica = parseFloat(techniqueElement.value) || 0;
    let dano;
    damageElement.classList.remove("text-white", "text-red-700", "text-amber-400", "text-green-500", "text-sky-500");

    if (dado === 1 || dado === 2 || dado === 3) {
        percTecnica *= 3.0  
        dano = (percFisico + percTecnica)
        damageElement.classList.add("text-white");
        return damageElement.textContent = `Black Flash Dano 300%: ${dano.toFixed(2)}`;
    } else if (dado-2 <= blackFlash) {
        percTecnica *= 2.40 
        dano = (percFisico + percTecnica)
        damageElement.classList.add("text-amber-400");
        return damageElement.textContent = `Black Flash Dano: ${dano.toFixed(2)}`;
    } else if (dado-2 <= acerto) {
        percTecnica *= 0.80
        dano = (percFisico + percTecnica)
        damageElement.classList.add("text-green-500");
        return damageElement.textContent = `Dano de Acerto: ${dano.toFixed(2)}`;
    } else if (dado-2 <= raspao) {
        percFisico *= 0.50
        percTecnica *= 0.20
        dano = (percFisico + percTecnica)
        damageElement.classList.add("text-sky-500");
        return damageElement.textContent = `Dano de Raspão: ${dano.toFixed(2)}`;
    } else {
        damageElement.classList.add("text-red-700");
        return damageElement.textContent = 'Você Errou';
    };
}