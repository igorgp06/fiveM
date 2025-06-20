RegisterCommand('createObj', async () => {

    const model = 'prop_conc_blocks01c'
    await carregarModelo(model);

    const [x, y, z] = GetEntityCoords(PlayerPedId());

    const pallet = CreateObject(model, x, y, z - 1, false, false, false);

    SetObjectAsNoLongerNeeded(pallet);
    SetModelAsNoLongerNeeded(model);
});

RegisterKeyMapping('createObj', 'Criar um palete de pedras', 'keyboard', 'H')
