// priority: 0

//Early game is steam-lv
ServerEvents.recipes(event => {

    //wrought iron
    event.smelting('gtceu:wrought_iron_ingot','minecraft:iron_ingot');


    //fireclay dust
    event.shapeless('8x gtceu:fireclay_dust',[
        'gtceu:brick_dust','gtceu:clay_dust'
    ]);

    //firebrick
    event.smelting('gtceu:firebrick','gtceu:fireclay_dust');


    //steel with PBF
    event.recipes.gtceu.primitive_blast_furnace('gtceu:steel_ingot')
        .itemInputs('2x gtceu:wrought_iron', ['gtceu:coke_gem','gtceu:coke_dust'])
        .itemOutputs('2x gtceu:steel_ingot')
        .duration(200);
    //steel block
    event.recipes.gtceu.primitive_blast_furnace('gtceu:steel_block')
        .itemInputs('2x gtceu:wrought_iron_block','gtceu:coke_block')
        .itemOutputs('2x gtceu:steel_block')
        .duration(1700);
});