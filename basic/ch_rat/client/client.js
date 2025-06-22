let rato;
RegisterCommand('ratobomba', async () => {
    modelo = 'a_c_rat';
    await carregarModelo(modelo);
    let [x, y, z] = GetEntityCoords(PlayerPedId());
    rato = CreatePed(28, modelo, x, y, z, 0, false, false);
})
RegisterCommand('explodir', async () => {
    let [x, y, z] = GetEntityCoords(rato);
    AddExplosion(x, y, z, 49, 1, true, false, 0);
    SetPedAsNoLongerNeeded(rato);
    SetModelAsNoLongerNeeded(modelo);
})
RegisterCommand('rseguir', async () => {
    let [x, y, z] = GetEntityCoords(PlayerPedId());
    TaskGoToCoordAnyMeans(rato, x, y, z, 5, 0, false, 786603, 0xbf800000)
})