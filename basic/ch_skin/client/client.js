RegisterCommand('skin', async () => {
    let hash = GetHashKey('Beach01AFM')
    await carregarModelo(hash)
    SetPlayerModel(PlayerId(), hash)
    SetPedDefaultComponentVariation(PlayerPedId())
})