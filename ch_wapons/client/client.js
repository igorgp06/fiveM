RegisterCommand('giveKit', () => {
    const playerId = PlayerPedId();

    GiveWeaponToPed(playerId, -1074790547, 180, true, false);
    GiveWeaponToPed(playerId, -1045183535, 180, true, false);
    GiveWeaponToPed(playerId, -1716189206, 180, true, false);
    GiveWeaponToPed(playerId, 741814745, 20, true, false);

    emit('chat:addMessage', {
        args: ["Kit de armas adicionada ao seu inventário!"],
        color: [1, 254, 2]
    });
})

RegisterCommand('delKit', () => {
    const playerId = PlayerPedId();
    RemoveAllPedWeapons(playerId);
    emit('chat:addMessage', {
        args: ["Todas as armas foram removidas do seu inventário!"],
        color: [255, 0, 2]
    });
});

on('baseevents:onPlayerDied', (pedType, coords) => {
    console.log('pedType: ', pedType);
    console.log('coords: ', coords);
});
