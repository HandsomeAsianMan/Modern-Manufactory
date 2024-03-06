// priority: 0
ServerEvents.recipes(event => {

    //wrought iron
    event.smelting('gtceu:wrought_iron_ingot','minecraft:iron_ingot');
    
    //greenhouse function
    function GreenhouseRecipe(output, seed) {
        if (typeof seed == 'undefined') {seed = output};
        event.recipes.gtceu.greenhouse(output)
        .notConsumable(seed)
        .itemOutputs(`16x ${output}`)
        .inputFluids('minecraft:water 1000')
        .duration(400)
        .EUt(64);
    };


    //List of plants grown without seeds
    for (let noSeed of [
        'minecraft:potato','minecraft:carrot','minecraft:sweet_berries','minecraft:vine',
        'minecraft:glow_berries','minecraft:nether_wart','minecraft:cocoa_beans','minecraft:cactus',
        'minecraft:kelp','minecraft:bamboo','minecraft:sugar_cane','minecraft:brown_mushroom',
        'minecraft:sea_pickle','minecraft:lily_pad','minecraft:seagrass','minecraft:red_mushroom'
        ]) {GreenhouseRecipe(noSeed);};
    
    //Plants with seeds
    GreenhouseRecipe('minecraft:wheat','minecraft:wheat_seeds');
    GreenhouseRecipe('minecraft:melon','minecraft:melon_seeds');
    GreenhouseRecipe('minecraft:beetroot','minecraft:beetroot_seeds');
    GreenhouseRecipe('minecraft:pumpkin','minecraft:pumpkin_seeds');
    GreenhouseRecipe('minecraft:chorus_fruit','minecraft:chorus_flower');
});