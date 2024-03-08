// priority: 0
ServerEvents.recipes(event => {

    //wrought iron
    event.smelting('gtceu:wrought_iron_ingot','minecraft:iron_ingot');

    //sky alloy
    event.recipes.gtceu.alloy_smelter('gtceu:sky_alloy')
        .itemInputs('1x minecraft:iron_ingot', '2x ae2:sky_dust')
        .itemOutputs('1x gtceu:sky_alloy_ingot')
        .duration(200)
        .EUt(1924);

    //greenhouse controller recipe
    event.shaped('gtceu:greenhouse',
        [
            'PCP',
            'WMW',
            'PCP'
        ],{
            P: 'gtceu:steel_plate',
            C: '#gtceu:circuits/mv',
            W: 'gtceu:fine_platinum_wire',
            M: 'gtceu:solid_machine_casing'
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
        ['minecraft:chorus_fruit',['16x minecraft:chorus_fruit','4x minecraft:chorus_flower'],'minecraft:chorus_flower']
    ]) {GreenhouseRecipe(plant[0],plant[1],plant[2],'minecraft:water 1000',400,64);};
});