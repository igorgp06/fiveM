RegisterCommand('giveWeaponKit', () => {
    const playerId = PlayerPedId()

    GiveWeaponToPed(playerId, -1074790547, 180, true, false)
    GiveWeaponToPed(playerId, -1045183535, 180, true, false)
    GiveWeaponToPed(playerId, -1716189206, 180, true, false)
})

RegisterCommand('deleteWeapons', () => {
    const playerId = PlayerPedId()

    RemoveAllPedWeapons(playerId)
})