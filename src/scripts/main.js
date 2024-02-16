const dataDoAniversario = new Date("Sep 07, 2024 19:00");
const timeStempDoAniversario = dataDoAniversario.getTime();

const contaTempo = setInterval(function(){

    const agora = new Date
    const timesStempAgora = agora.getTime();

    const distanciaAteOAniversario = timeStempDoAniversario - timesStempAgora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOAniversario % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOAniversario % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOAniversario % minutosEmMs) / 1000)

    document.getElementById("contador").innerHTML = `COMEÇA EM ${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}MIN ${segundosAteOEvento}S`

    if (distanciaAteOAniversario<0) {
        clearInterval(contaTempo);

        document.getElementById("contador").innerHTML = `VOCÊ CHEGOU TARDE, A FESTA JÁ ACABOU`
    }
},1000)
