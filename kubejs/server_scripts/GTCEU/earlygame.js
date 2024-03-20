// priority: 0

//Early game is steam-lv
ServerEvents.recipes(event => {

    //wrought iron
    event.smelting('gtceu:wrought_iron_ingot','minecraft:iron_ingot');


    //firebrick
    event.smelting('gtceu:firebrick','gtceu:fireclay_dust');


    //steel with PBF
    event.recipes.gtceu.primitive_blast_furnace('gtceu:steel_ingot')
        .itemInputs('2x gtceu:wrought_iron_ingot', ['gtceu:coke_gem','gtceu:coke_dust'])
        .itemOutputs('2x gtceu:steel_ingot')
        .duration(200);
    //steel block
    event.recipes.gtceu.primitive_blast_furnace('gtceu:steel_block')
        .itemInputs('2x gtceu:wrought_iron_block','gtceu:coke_block')
        .itemOutputs('2x gtceu:steel_block')
        .duration(1700);


    //rubber plate
    event.shaped('gtceu:rubber_plate',['H','R','R'],{H: '#forge:tools/hammers',R: 'gtceu:sticky_resin'});
});