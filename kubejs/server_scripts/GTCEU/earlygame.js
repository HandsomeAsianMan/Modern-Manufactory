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


    //greenhouse controller recipe
    event.shaped('gtceu:greenhouse',[
        'PCP',
        'WMW',
        'PCP'
    ],{
        P: 'gtceu:steel_plate',
        C: '#gtceu:circuits/lv',
        W: 'gtceu:fine_platinum_wire',
        M: 'gtceu:lv_machine_hull'
    });

    //greenhouse function
    function GreenhouseRecipe(recipeID, output, seed, fluid, time, eu) {
        event.recipes.gtceu.greenhouse(recipeID)
        .notConsumable(seed)
        .itemOutputs(output)
        .inputFluids(fluid)
        .duration(time)
        .EUt(eu);
    };

    //Array of plants grown with typical greenhouse recipe
    //['minecraft:template','16x minecraft:template','minecraft:template_seeds'],
    for (let plant of 
    [
        ['minecraft:potato','16x minecraft:potato', 'minecraft:potato'],
        ['minecraft:carrot','16x minecraft:carrot', 'minecraft:carrot'],
        ['minecraft:sweet_berries','16x minecraft:sweet_berries', 'minecraft:sweet_berries'],
        ['minecraft:vine','16x minecraft:vine', 'minecraft:vine'],
        ['minecraft:glow_berries','16x minecraft:glow_berries', 'minecraft:glow_berries'],
        ['minecraft:nether_wart','16x minecraft:nether_wart', 'minecraft:nether_wart'],
        ['minecraft:cocoa_beans','16x minecraft:cocoa_beans', 'minecraft:cocoa_beans'],
        ['minecraft:cactus','16x minecraft:cactus', 'minecraft:cactus'],
        ['minecraft:kelp','16x minecraft:kelp', 'minecraft:kelp'],
        ['minecraft:bamboo','16x minecraft:bamboo', 'minecraft:bamboo'],
        ['minecraft:sugar_cane','16x minecraft:sugar_cane', 'minecraft:sugar_cane'],
        ['minecraft:brown_mushroom','16x minecraft:brown_mushroom', 'minecraft:brown_mushroom'],
        ['minecraft:sea_pickle','16x minecraft:sea_pickle', 'minecraft:sea_pickle'],
        ['minecraft:lily_pad','16x minecraft:lily_pad', 'minecraft:lily_pad'],
        ['minecraft:seagrass','16x minecraft:seagrass', 'minecraft:seagrass'],
        ['minecraft:red_mushroom','16x minecraft:red_mushroom', 'minecraft:red_mushroom'],
        ['minecraft:wheat','16x minecraft:wheat','minecraft:wheat_seeds'],
        ['minecraft:melon','16x minecraft:melon','minecraft:melon_seeds'],
        ['minecraft:beetroot','16x minecraft:beetroot','minecraft:beetroot_seeds'],
        ['minecraft:pumpkin','16x minecraft:pumpkin','minecraft:pumpkin_seeds'],
        ['minecraft:chorus_fruit',['16x minecraft:chorus_fruit','4x minecraft:chorus_flower'],'minecraft:chorus_flower'],
        ['minecraft:moss_block','16x minecraft:moss_block','minecraft:moss_block'],
        ['minecraft:oak_log',['16x minecraft:oak_log','3x minecraft:oak_sapling'],'minecraft:oak_sapling'],
        ['minecraft:birch_log',['16x minecraft:birch_log','3x minecraft:birch_sapling'],'minecraft:birch_sapling'],
        ['minecraft:spruce_log',['16x minecraft:spruce_log','3x minecraft:spruce_sapling'],'minecraft:spruce_sapling'],
        ['minecraft:dark_oak_log',['16x minecraft:dark_oak_log','3x minecraft:dark_oak_sapling'],'minecraft:dark_oak_sapling'],
        ['minecraft:jungle_log',['16x minecraft:jungle_log','3x minecraft:jungle_sapling'],'minecraft:jungle_sapling'],
        ['minecraft:acacia_log',['16x minecraft:acacia_log','3x minecraft:acacia_sapling'],'minecraft:acacia_sapling'],
        ['minecraft:cherry_log',['16x minecraft:cherry_log','3x minecraft:cherry_sapling'],'minecraft:cherry_sapling'],
        ['minecraft:mangrove_log',['16x minecraft:mangrove_log','3x minecraft:mangrove_propagule'],'minecraft:mangrove_propagule'],
        ['minecraft:warped_stem',['16x minecraft:warped_stem','3x minecraft:warped_fungus','5x minecraft:warped_wart_block','4x minecraft:shroomlight'],'minecraft:warped_fungus'],
        ['minecraft:crimson_stem',['16x minecraft:crimson_stem','3x minecraft:crimson_fungus','5x minecraft:nether_wart_block','4x minecraft:shroomlight'],'minecraft:crimson_fungus'],
        ['gtceu:rubber_tree',['16x gtceu:rubber_log','3x gtceu:rubber_sapling','18x gtceu:sticky_resin'],'gtceu:rubber_sapling'],
        ['farmersdelight:rice_panicle','16x farmersdelight:rice_panicle','farmersdelight:rice'],
        ['farmersdelight:tomato','16x farmersdelight:tomato','farmersdelight:tomato_seeds'],
        ['farmersdelight:onion','16x farmersdelight:onion','farmersdelight:onion'],
        ['farmersdelight:cabbage','16x farmersdelight:cabbage','farmersdelight:cabbage_seeds']
    ]) {GreenhouseRecipe(plant[0],plant[1],plant[2],'minecraft:water 1000',600,16);};


    //quartz from silicon dioxide
    event.recipes.gtceu.autoclave('gtceu:autoclave/silicon_dioxide_to_quartzite_and_quartz_gem')
        .itemInputs('gtceu:silicon_dioxide_dust')
        .inputFluids('gtceu:distilled_water 250')
        .chancedOutput('gtceu:quartzite_gem',1000,1000)
        .chancedOutput('minecraft:quartz',1000,1000)
        .EUt(24)
        .duration(600);


    //mud
    event.recipes.gtceu.chemical_reactor('minecraft:mud')
        .itemInputs('minecraft:dirt')
        .inputFluids('minecraft:water 500')
        .itemOutputs('minecraft:mud')
        .EUt(8)
        .duration(60);


    //clay
    event.recipes.gtceu.mixer('minecraft:clay')
        .itemInputs('minecraft:mud','minecraft:sand')
        .itemOutputs('2x minecraft:clay')
        .inputFluids('minecraft:water 500')
        .EUt(12)
        .duration(60)


    //resin board
    event.shapeless('gtceu:resin_circuit_board',['#minecraft:wooden_slabs','2x gtceu:sticky_resin']);
    event.shaped('3x gtceu:resin_circuit_board',[
        'RRR',
        'SSS',
        'RRR'
    ],{
        R: 'gtceu:sticky_resin',
        S: '#minecraft:wooden_slabs'
    });


    //red alloy dust
    event.shapeless('gtceu:red_alloy_dust',['gtceu:copper_dust','4x minecraft:redstone']);
});
