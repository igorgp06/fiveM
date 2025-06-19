RegisterCommand('force', () => {
    SetWeaponDamageModifier('WEAPON_UNARMED', 100000)

})

RegisterCommand('rmForce', () => {
    SetWeaponDamageModifier('WEAPON_UNARMED', 1)
})