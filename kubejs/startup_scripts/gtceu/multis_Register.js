// priority: 0

//greenhouse
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('greenhouse')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC','CCCCC','CGGGC','CGGGC','CGGGC','CCCCC')
            .aisle('CCCCC','CFFFC','G   G','G   G','G   G','CGGGC')
            .aisle('CCCCC','CFFFC','G   G','G   G','G   G','CGGGC')
            .aisle('CCCCC','CFFFC','G   G','G   G','G   G','CGGGC')
            .aisle('CCCCC','CCXCC','CGGGC','CGGGC','CGGGC','CCCCC')
            .where('X', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:solid_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('F',Predicates.blocks('minecraft:grass_block'))
            .where('G',Predicates.blocks('gtceu:tempered_glass'))
            .where(' ',Predicates.any())
            .build())
        .workableCasingRenderer('gtceu:block/solid_machine_casing',
            'gtceu:block/multiblock/implosion_compressor', false);
});

