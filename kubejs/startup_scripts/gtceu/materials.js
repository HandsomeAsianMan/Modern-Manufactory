// priority: 0

//Materials
GTCEuStartupEvents.registry('gtceu:material', event => {

    //skystone alloy
    event.create('sky_alloy')
    .ingot()
    .blastTemp(1900,'mid',1924,1600)
    .iconSet(GTMaterialIconSet.DULL)
    .color('0x383838')
    .secondaryColor('0x6ae4fc')
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
    .cableProperties(GTValues.V[GTValues.IV],2,1,false);
    
    //fluix silicon mix
    event.create('fluix_silicon_mix')
    .dust()
    .color('0x242424');
});