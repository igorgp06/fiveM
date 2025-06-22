let carro;
RegisterCommand('carro', async () => {
    let modelo = 'pariah';
    await carregarModelo(modelo);

    let [x, y, z] = GetEntityCoords(PlayerPedId());

    carro = CreateVehicle(modelo, x, y, z, 0, false, false);
    SetPedIntoVehicle(PlayerPedId(), carro, -1)

    SetModelAsNoLongerNeeded(modelo);
    SetVehicleAsNoLongerNeeded(carro);
})

RegisterCommand('drive', async () => {

    let blip = GetFirstBlipInfoId(8);

    let [x, y, z] = GetBlipInfoIdCoord(blip);

    TaskVehicleDriveToCoordLongrange(PlayerPedId(), carro, x, y, z, 20, 786484, 5)
})

RegisterCommand('stopTask', async () => {
    ClearPedTasks(PlayerPedId());
})
