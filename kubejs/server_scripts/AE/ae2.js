// priority: 0

ServerEvents.recipes(event => {
    
    //1k cell
    event.shaped('ae2:cell_component_1k',[
        'WCW',
        'CLC',
        'WCW'
    ],{
        W: 'gtceu:fine_copper_wire',
        C: '#forge:gems/certus_quartz',
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
        G: 'ae2:quartz_vibrant_glass'
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
        .itemInputs('4x minecraft:glass','3x #forge:dusts/certus_quartz')
        .itemOutputs('5x ae2:quartz_glass')
        .duration(400)
        .EUt(24);


    //Vibrant quartz glass
    event.recipes.gtceu.alloy_smelter('ae2:quartz_vibrant_glass')
        .itemInputs('ae2:quartz_glass','minecraft:glowstone_dust')
        .itemOutputs('ae2:quartz_vibrant_glass')
        .duration(200)
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
        .itemInputs('4x #forge:gems/certus_quartz','#gtceu:circuits/ulv','2x gtceu:fine_platinum_wire')
        .itemOutputs('8x ae2:formation_core')
        .duration(800)
        .EUt(16);


    //Press recipes
    event.recipes.gtceu.forming_press('ae2:printed_calculation_processor')
        .notConsumable('ae2:calculation_processor_press')
        .itemInputs('#forge:gems/certus_quartz')
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

        
    //Flux dust
    event.recipes.gtceu.macerator('ae2:fluix_dust')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(20)
        .EUt(2);


    //Sky dust
    event.recipes.gtceu.macerator('ae2:sky_dust')
        .itemInputs('ae2:sky_stone_block')
        .itemOutputs('ae2:sky_dust')
        .duration(20)
        .EUt(2);


    //fluix pearl
    event.recipes.gtceu.chemical_reactor('ae2:fluix_pearl')
        .itemInputs('minecraft:ender_pearl', '4x ae2:fluix_dust')
        .itemOutputs('ae2:fluix_pearl')
        .duration(200)
        .EUt(24)


    //wireless receiver
    event.shaped('ae2:wireless_receiver',[
        'FSF',
        'CEC',
        'WPW'
    ],{
        F: 'ae2:fluix_pearl',
        S: 'gtceu:mv_sensor',
        C: 'ae2:fluix_glass_cable',
        E: 'gtceu:mv_emitter',
        W: 'gtceu:fine_platinum_wire',
        P: 'gtceu:stainless_steel_plate'
    });


    //matter condenser
    event.shaped('ae2:condenser',[
        'PGP',
        'GFG',
        'PGP'
    ],{
        P: 'gtceu:steel_plate',
        G: 'ae2:quartz_glass',
        F: 'ae2:fluix_dust'
    });


    //molecular assembler
    event.shaped('ae2:molecular_assembler',[
        'PGP',
        'AMF',
        'PGP'
    ],{
        P: 'gtceu:steel_plate',
        G: 'ae2:quartz_glass',
        A: 'ae2:annihilation_core',
        M: 'gtceu:mv_assembler',
        F: 'ae2:formation_core'
    });


    //illuminated panel
    event.shaped('ae2:semi_dark_monitor',[
        'PWG'
    ],{
        P: 'gtceu:steel_plate',
        W: 'gtceu:fine_gold_wire',
        G: 'ae2:quartz_vibrant_glass'
    });


    //me level emitter
    event.shaped('3x ae2:level_emitter',[
        'RRC',
        'SWS'
    ],{
        R: 'gtceu:red_alloy_single_wire',
        C: 'ae2:calculation_processor',
        S: 'gtceu:steel_rod',
        W: 'gtceu:fine_copper_wire'
    });


    //crafting unit
    event.shaped('ae2:crafting_unit',[
        'PCP',
        'FLF',
        'PCP'
    ],{
        P: 'gtceu:steel_plate',
        C: 'ae2:calculation_processor',
        F: '#ae2:glass_cable',
        L: 'ae2:logic_processor'
    });


    //me controller
    event.shaped('ae2:controller',[
        'PFP',
        'FEF',
        'PFP'
    ],{
        P: 'gtceu:sky_alloy_plate',
        F: 'ae2:fluix_crystal',
        E: 'ae2:energy_acceptor'
    });


    //energy acceptor
    event.shaped('ae2:energy_acceptor',[
        'PGP',
        'GCG',
        'PGP'
    ],{
        P: 'gtceu:steel_plate',
        G: 'ae2:quartz_glass',
        C: '#gtceu:circuits/lv'
    });


    //growth accelerator
    event.shaped('ae2:growth_accelerator',[
        'PFP',
        'GBG',
        'PFP'
    ],{
        P: 'gtceu:steel_plate',
        F: '#ae2:glass_cable',
        G: 'ae2:quartz_glass',
        B: 'ae2:fluix_block'
    });


    //fluix glass cable
    event.recipes.gtceu.alloy_smelter('ae2:fluix_glass_cable')
        .itemInputs('ae2:quartz_fiber','ae2:fluix_dust')
        .itemOutputs('4x ae2:fluix_glass_cable')
        .duration(100)
        .EUt(24);
});