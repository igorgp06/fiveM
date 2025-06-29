async function loadModel(model) {
    console.log('carregando modelo...');

    RequestModel(model);

    Delay = (ms) => new Promise(res => setTimeout(res, ms));
    while (!HasModelLoaded(model)) {
        await Delay(500);
    }
    console.log('modelo carregado!');
};