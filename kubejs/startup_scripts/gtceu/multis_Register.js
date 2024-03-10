// priority: 0


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    //greenhouse recipe type
    event.create('greenhouse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);

    //crystal fabricator recipe type
    event.create('crystal_fabricator')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {

    //greenhouse
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .appearanceBlock(GTBlocks.MACHINE_CASING_LV)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
            OverclockingLogic.PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC','CCCCC','CGGGC','CGGGC','CGGGC','CCCCC')
            .aisle('CCCCC','CFFFC','G   G','G   G','G   G','CGGGC')
            .aisle('CCCCC','CFFFC','G   G','G   G','G   G','CGGGC')
            .aisle('CCCCC','CFFFC','G   G','G   G','G   G','CGGGC')
            .aisle('CCCCC','CCXCC','CGGGC','CGGGC','CGGGC','CCCCC')
            .where('X', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .setMinGlobalLimited(25)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.ability(PartAbility.MAINTENANCE)
                .setExactLimit(1)))
            .where('F',Predicates.blocks('minecraft:grass_block'))
            .where('G',Predicates.blocks('gtceu:tempered_glass'))
            .where(' ',Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor', false);

    
    //crystal fabricator
    event.create('crystal_fabricator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('crystal_fabricator')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
            OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC','FAF','FAF','FAF','CCC')
            .aisle('CCC','AOA','AZA','AOA','CCC')
            .aisle('CXC','FAF','FAF','FAF','CCC')
            .where('X', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.ability(PartAbility.MAINTENANCE)
                .setExactLimit(1)))
            .where('A', Predicates.blocks('ae2:growth_accelerator'))
            .where('F', Predicates.blocks('ae2:fluix_block'))
            .where('O', Predicates.blocks('minecraft:obsidian'))
            .where('Z', Predicates.blocks('ae2:flawless_budding_quartz'))
        .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel',
            'gtceu:block/multiblock/implosion_compressor', false);

});

