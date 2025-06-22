RegisterCommand('spawnPed', async() => {
    const model = 'a_f_m_beach_01'

    await loadModel(model);

    const ped = PlayerPedId();

    const [x, y,z] = GetEntityCoords(ped);

    const girl = CreatePed(5, model, x, y, z, 0, true, false)

    SetModelAsNoLongerNeeded(model);
    SetEntityAsNoLongerNeeded(girl);
});