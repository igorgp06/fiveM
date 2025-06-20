RegisterCommand('createObj', async () => {

    const model = 'prop_conc_blocks01c'
    await carregarModelo(model)

    const [x, y, z] = GetEntityCoords(PlayerPedId())

    CreateObject(model, x, y, z - 1, false, false, false)
});