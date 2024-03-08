ServerEvents.recipes(event => {
    
    //1k cell
    event.shaped('ae2:cell_component_1k',[
        'WCW',
        'CLC',
        'WCW'
    ],{
        W: 'gtceu:fine_copper_wire',
        C: 'ae2:certus_quartz_crystal',
        L: 'ae2:logic_processor',
    });

    //4k cell
    event.shaped('ae2:cell_component_4k',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:fine_silver_wire',
        C: '#gtceu:circuits/lv',
        P: 'ae2:cell_component_1k',
        G: 'ae2:quartz_glass'
    });

    //16k cell
    event.shaped('ae2:cell_component_16k',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:fine_gold_wire',
        C: '#gtceu:circuits/mv',
        P: 'ae2:cell_component_4k',
        G: 'ae2:quartz_glass'
    });

    //64k cell
    event.shaped('ae2:cell_component_64k',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:fine_platinum_wire',
        C: '#gtceu:circuits/hv',
        P: 'ae2:cell_component_16k',
        G: 'ae2:quartz_glass'
    });

    //256k cell
    event.shaped('ae2:cell_component_256k',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:fine_sky_alloy_wire',
        C: '#gtceu:circuits/ev',
        P: 'ae2:cell_component_64k',
        G: 'ae2:quartz_glass'
    });

    //Item cell housing
    event.shaped('ae2:item_cell_housing',[
        'SGS',
        'W W',
        'PPP'
    ],{
        S: 'gtceu:polyethylene_foil',
        G: 'ae2:quartz_glass',
        W: 'gtceu:fine_silver_wire',
        P: 'gtceu:steel_plate'
    });

    //Fluid cell housing
    event.shaped('ae2:fluid_cell_housing',[
        'SGS',
        'W W',
        'PPP'
    ],{
        S: 'gtceu:polyethylene_foil',
        G: 'ae2:quartz_glass',
        W: 'gtceu:fine_silver_wire',
        P: 'gtceu:copper_plate'
    });

    //Quartz glass
    event.recipes.gtceu.alloy_smelter('ae2:quartz_glass')
        .itemInputs('4x minecraft:glass','3x ae2:certus_quartz_dust')
        .itemOutputs('5x ae2:quartz_glass')
        .duration(400)
        .EUt(24);

    //Quartz fibre
    event.recipes.gtceu.autoclave('ae2:quartz_fiber_water')
        .itemInputs('#ae2:all_quartz')
        .inputFluids('minecraft:water 250')
        .itemOutputs('8x ae2:quartz_fiber')
        .duration(1200)
        .EUt(24);
    event.recipes.gtceu.autoclave('ae2:quartz_fiber_distilled_water')
        .itemInputs('#ae2:all_quartz')
        .inputFluids('gtceu:distilled_water 50')
        .itemOutputs('8x ae2:quartz_fiber')
        .duration(600)
        .EUt(24);

    //Interface
    event.shaped('ae2:interface',[
        'WAW',
        'GMG',
        'WFW'
    ],{
        W: 'gtceu:fine_copper_wire',
        A: 'ae2:annihilation_core',
        G: 'ae2:quartz_glass',
        M: 'gtceu:lv_machine_casing',
        F: 'ae2:formation_core'
    });

    //Pattern provider
    event.shaped('ae2:pattern_provider',[
        'WAW',
        'RMR',
        'WFW'
    ],{
        W: 'gtceu:fine_gold_wire',
        A: 'ae2:annihilation_core',
        R: 'gtceu:lv_robot_arm',
        M: 'gtceu:lv_machine_casing',
        F: 'ae2:formation_core'
    });

    //Annihilation core
    event.recipes.gtceu.assembler('ae2:annihilation_core')
        .itemInputs('4x ae2:fluix_crystal','#gtceu:circuits/ulv','2x gtceu:fine_platinum_wire')
        .itemOutputs('8x ae2:annihilation_core')
        .duration(800)
        .EUt(16);

    //Formation core
    event.recipes.gtceu.assembler('ae2:formation_core')
        .itemInputs('4x ae2:certus_quartz_crystal','#gtceu:circuits/ulv','2x gtceu:fine_platinum_wire')
        .itemOutputs('8x ae2:formation_core')
        .duration(800)
        .EUt(16);

    //Press recipes
    event.recipes.gtceu.forming_press('ae2:printed_calculation_processor')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('ae2:certus_quartz_crystal')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(300)
        .EUt(24);
    event.recipes.gtceu.forming_press('ae2:printed_logic_processor')
        .notConsumable('ae2:logic_processor_press')
        .itemInputs('minecraft:gold_ingot')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(300)
        .EUt(24);
    event.recipes.gtceu.forming_press('ae2:printed_engineering_processor')
        .notConsumable('ae2:engineering_processor_press')
        .itemInputs('minecraft:diamond')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(300)
        .EUt(24);
    event.recipes.gtceu.forming_press('ae2:printed_silicon')
        .notConsumable('ae2:silicon_press')
        .itemInputs('gtceu:fluix_silicon_mix_dust')
        .itemOutputs('ae2:printed_silicon')
        .duration(300)
        .EUt(24);

    //Processor recipes
    event.recipes.gtceu.assembler('ae2:calculation_processor')
        .itemInputs('ae2:printed_calculation_processor','ae2:printed_silicon','4x gtceu:fine_copper_wire')
        .itemOutputs('ae2:calculation_processor')
        .duration(100)
        .EUt(24);
    event.recipes.gtceu.assembler('ae2:logic_processor')
        .itemInputs('ae2:printed_logic_processor','ae2:printed_silicon','4x gtceu:fine_copper_wire')
        .itemOutputs('ae2:logic_processor')
        .duration(100)
        .EUt(24);
    event.recipes.gtceu.assembler('ae2:engineering_processor')
        .itemInputs('ae2:printed_engineering_processor','ae2:printed_silicon','4x gtceu:fine_copper_wire')
        .itemOutputs('ae2:engineering_processor')
        .duration(100)
        .EUt(24);
});