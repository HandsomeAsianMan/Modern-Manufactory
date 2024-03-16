// priority: 0

ServerEvents.recipes(event => {

    //Me wireless connector
    event.shaped('expatternprovider:wireless_connect',[
        'PWP',
        'AEA',
        'PWP'
    ],{
        P: 'gtceu:sky_alloy_plate',
        W: 'ae2:wireless_receiver',
        A: '#ae2:glass_cable',
        E: 'ae2:engineering_processor',
    })


    //Me wireless setup kit
    event.shaped('expatternprovider:wireless_tool',[
        ' W ',
        'SCS',
        ' P '
    ],{
        W: 'ae2:wireless_receiver',
        S: 'gtceu:fine_sky_alloy_wire',
        C: 'ae2:calculation_processor',
        P: 'gtceu:sky_alloy_plate'
    });


    //extended molecular assembler
    event.shaped('expatternprovider:ex_molecular_assembler',[
        'PEP',
        'EME',
        'PEP'
    ],{
        P: 'gtceu:sky_alloy_plate',
        E: 'ae2:engineering_processor',
        M: 'ae2:molecular_assembler'
    });


    //Infinite Cobble/Water cell
    event.replaceInput({ output: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}') }, 'minecraft:water_bucket', 'gtceu:infinite_water_cover'); //water
    event.replaceInput({ output: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}') }, 'minecraft:diamond', 'gtceu:hv_rock_crusher'); //cobble
});