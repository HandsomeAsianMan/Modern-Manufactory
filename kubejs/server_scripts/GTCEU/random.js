// priority: 0
ServerEvents.recipes(event => {

    //sky alloy dust
    event.recipes.gtceu.mixer('gtceu:sky_alloy_dust')
        .itemInputs('5x gtceu:fluix_silicon_mix_dust', '2x ae2:sky_dust', '3x gtceu:steel_dust')
        .itemOutputs('10x gtceu:sky_alloy_dust')
        .duration(200)
        .EUt(812);


    //fluix silicon mix
    event.recipes.gtceu.mixer('gtceu:fluix_silicon_mix')
        .itemInputs('11x gtceu:silicon_dust','4x ae2:fluix_dust')
        .itemOutputs('15x gtceu:fluix_silicon_mix_dust')
        .duration(1800)
        .EUt(24)


    //crystal fabricator controller recipe
    event.shaped('gtceu:crystal_fabricator',[
        'SHQ',
        'HMH',
        'FHC'
    ],{
        S: 'ae2:sky_stone_block',
        Q: 'minecraft:quartz_block',
        C: '#forge:storage_blocks/certus_quartz',
        F: 'ae2:fluix_block',
        M: 'gtceu:hv_machine_hull',
        H: '#gtceu:circuits/hv'
    });


    //certus using fabricator
    event.recipes.gtceu.crystal_fabricator('ae2:certus_quartz_crystal')
        .notConsumable('ae2:certus_quartz_crystal')
        .itemOutputs('8x ae2:certus_quartz_crystal')
        .duration(200)
        .EUt(112);
    
    
    //fluix using fabricator
    event.recipes.gtceu.crystal_fabricator('ae2:fluix_crystal')
        .itemInputs('minecraft:quartz')
        .itemOutputs('4x ae2:fluix_crystal')
        .duration(200)
        .EUt(812);


    //sky stone using fabricator
    event.recipes.gtceu.crystal_fabricator('ae2:sky_stone_block')
        .itemInputs('minecraft:gravel')
        .itemOutputs('ae2:sky_stone_block')
        .duration(100)
        .EUt(512);


    //quartz using fabricator
    event.recipes.gtceu.crystal_fabricator('minecraft:quartz')
        .itemInputs('minecraft:sand')
        .itemOutputs('8x minecraft:quartz')
        .duration(200)
        .EUt(82)

});