// priority: 0

//elements
GTCEuStartupEvents.registry('gtceu:element', event => {

    //arcankanium
    event.create('arcankanium',201,249,-1,null,'Arc',false);


});


//Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('magic_metal')
    .ingot()
    .iconSet(GTMaterialIconSet.BRIGHT)
    .color('0xfb19ff')
    .secondaryColor('0xff00c3')
    .element(GTElements.get('arcankanium'))
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
    .cableProperties(GTValues.V[GTValues.UEV],32,0,true);
});