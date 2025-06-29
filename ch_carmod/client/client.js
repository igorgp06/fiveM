RegisterCommand('carmod', async() => {
    const carModel = 'pariah';
    await loadModel(carModel);

    const ped = PlayerPedId();

    const [x, y, z] = GetEntityCoords(ped);

    const car = CreateVehicle(carModel, x, y, z, 0, true, false);

    SetModelAsNoLongerNeeded(carModel);
    SetVehicleAsNoLongerNeeded(car);

    SetPedIntoVehicle(ped, car, -1);

    const objModel = 'prop_roadheader_01';

    await loadModel(objModel);

    const obj = CreateObjectNoOffset(objModel, x, y, z, true, false, false);

    SetModelAsNoLongerNeeded(objModel);
    SetObjectAsNoLongerNeeded(obj);

    AttachEntityToEntity(obj, car, 0, 0, 0, 0, 0, 0, 0, false, true, false, false, 0, true);

});