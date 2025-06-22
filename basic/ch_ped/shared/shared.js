async function loadModel(model) {
    console.log('carrgand modelo...');

    RequestModel(model);

    const Delay = (ms) => new Promise(res => setTimeout(res, ms));
    while(!HasModelLoaded(model)) {
        await Delay(1000);
    }

    console.log('modelo carregado!');
};