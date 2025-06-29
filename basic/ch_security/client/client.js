RegisterCommand('security', () => {

    const ped = PlayerPedId();
    const seg = ClonePed(ped, true, true, true);

    const group = GetPlayerGroup(PlayerId());

    SetPedAsGroupLeader(ped, group);
    SetPedAsGroupMember(seg, group);
    SetPedNeverLeavesGroup(seg, true);
    SetGroupSeparationRange(group, 10);

});