// priority: 0

ServerEvents.recipes(event => {
    
    //1k cell
    event.recipes.gtceu.assembler('assembler_cell_component_1k')
        .itemOutputs('ae2:cell_component_1k')
        .itemInputs('ae2:logic_processor', '#gtceu:circuits/ulv', '4x gtceu:fine_copper_wire', '4x #forge:gems/certus_quartz')
        .duration(40)
        .EUt(24);

    //4k cell
    event.recipes.gtceu.assembler('assembler_cell_component_4k')
        .itemOutputs('ae2:cell_component_4k')
        .itemInputs('ae2:cell_component_1k', '#gtceu:circuits/lv', '2x gtceu:fine_silver_wire')
        .duration(40)
        .EUt(30);

    event.recipes.gtceu.assembler('assembler_cell_component_4k_direct')
        .itemOutputs('ae2:cell_component_4k')
        .itemInputs('ae2:logic_processor','2x ae2:quartz_glass', '#gtceu:circuits/lv', '4x gtceu:fine_silver_wire')
        .duration(60)
        .EUt(30);


    //16k cell
    event.recipes.gtceu.assembler('assembler_cell_component_16k')
        .itemOutputs('ae2:cell_component_16k')
        .itemInputs('ae2:cell_component_4k', 'ae2:quartz_glass', '#gtceu:circuits/mv', '4x gtceu:fine_gold_wire')
        .duration(40)
        .EUt(112);

    event.recipes.gtceu.assembler('assembler_cell_component_16k_direct')
        .itemOutputs('ae2:cell_component_16k')
        .itemInputs('ae2:logic_processor','3x ae2:quartz_glass', '#gtceu:circuits/mv', '12x gtceu:fine_gold_wire')
        .duration(90)
        .EUt(112);

    //64k cell
    event.recipes.gtceu.assembler('assembler_cell_component_64k')
        .itemOutputs('ae2:cell_component_64k')
        .itemInputs('ae2:cell_component_16k', 'ae2:quartz_glass', '#gtceu:circuits/hv', '4x gtceu:fine_platinum_wire')
        .duration(40)
        .EUt(112);

    event.recipes.gtceu.assembler('assembler_cell_component_64k_direct')
        .itemOutputs('ae2:cell_component_64k')
        .itemInputs('ae2:logic_processor','4x ae2:quartz_glass', '#gtceu:circuits/hv', '12x gtceu:fine_platinum_wire')
        .duration(120)
        .EUt(112);

    //256k cell
    event.recipes.gtceu.assembler('assembler_cell_component_256k')
        .itemOutputs('ae2:cell_component_256k')
        .itemInputs('ae2:cell_component_64k', 'ae2:quartz_vibrant_glass', '#gtceu:circuits/ev', '2x gtceu:fine_sky_alloy_wire')
        .duration(40)
        .EUt(480);

    event.recipes.gtceu.assembler('assembler_cell_component_256k_direct')
        .itemOutputs('ae2:cell_component_256k')
        .itemInputs('ae2:logic_processor','2x ae2:quartz_vibrant_glass', '#gtceu:circuits/ev', '16x gtceu:fine_sky_alloy_wire')
        .duration(140)
        .EUt(480);


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

    //Item cell housing alt
    event.shaped('ae2:item_cell_housing',[
        'SGS',
        'W W',
        'PPP'
    ],{
        S: 'gtceu:rubber_plate',
        G: 'ae2:quartz_glass',
        W: 'gtceu:silver_single_wire',
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

    //Fluid cell housing alt
    event.shaped('ae2:fluid_cell_housing',[
        'SGS',
        'W W',
        'PPP'
    ],{
        S: 'gtceu:rubber_plate',
        G: 'ae2:quartz_glass',
        W: 'gtceu:silver_single_wire',
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


    //me energy level emitter
    event.shapeless('ae2:energy_level_emitter',['ae2:level_emitter']);
    event.shapeless('ae2:level_emitter',['ae2:energy_level_emitter'])

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


    //ae2 drive
    event.shaped('ae2:drive',[
        'PEP',
        'FCF',
        'PEP'
    ],{
        P: 'gtceu:steel_plate',
        E: 'ae2:engineering_processor',
        F: '#ae2:glass_cable',
        C: 'gtceu:steel_crate'
    });


    //ae2 chest
    event.shaped('ae2:chest',[
        'GTG',
        'FWF',
        'PPP'
    ],{
        G: 'ae2:quartz_glass',
        T: 'ae2:terminal',
        F: '#ae2:glass_cable',
        W: 'gtceu:fine_copper_wire',
        P: 'gtceu:steel_plate'
    });


    //blank pattern
    event.shaped('8x ae2:blank_pattern',[
        'SGS',
        'WLW',
        'PCP'
    ],{
        S: 'gtceu:polyethylene_foil',
        G: 'ae2:quartz_vibrant_glass',
        W: 'gtceu:fine_gold_wire',
        L: '#gtceu:circuits/lv',
        P: 'gtceu:steel_plate',
        C: 'ae2:calculation_processor'
    });


    //quantum ring
    event.shaped('ae2:quantum_ring',[
        'PLP',
        'ECF',
        'PLP'
    ],{
        P: 'gtceu:sky_alloy_plate',
        L: 'ae2:logic_processor',
        E: 'ae2:engineering_processor',
        C: 'ae2:energy_cell',
        F: '#ae2:glass_cable'
    });


    //quantum link chamber
    event.shaped('ae2:quantum_link',[
        'PGP',
        'GCG',
        'PGP'
    ],{
        P: 'ae2:fluix_pearl',
        G: 'ae2:quartz_vibrant_glass',
        C: '#gtceu:circuits/ev'
    });


    //me io port
    event.shaped('ae2:io_port',[
        'GGG',
        'DFD',
        'PLP',
    ],{
        G: 'ae2:quartz_glass',
        D: 'ae2:drive',
        F: '#ae2:glass_cable',
        P: 'gtceu:steel_plate',
        L: 'ae2:logic_processor'
    });


    //storage bus
    event.shapeless('ae2:storage_bus',[
        '#ae2:interface',
        '#gtceu:circuits/lv'
    ]);


    //basic card
    event.shapeless('2x ae2:basic_card',[
        'ae2:logic_processor',
        'ae2:calculation_processor',
        'gtceu:steel_plate',
        'gtceu:fine_gold_wire'
    ]);


    //advanced card
    event.shapeless('2x ae2:advanced_card',[
        'ae2:engineering_processor',
        'ae2:calculation_processor',
        'gtceu:steel_plate',
        'gtceu:fine_platinum_wire'
    ]);


    //wireless booster
    event.shapeless('4x ae2:wireless_booster',[
        'ae2:fluix_dust',
        '#forge:gems/certus_quartz',
        'gtceu:steel_plate'
    ]);


    //memory card
    event.shapeless('ae2:memory_card',[
        'ae2:calculation_processor',
        'gtceu:steel_plate',
        'gtceu:fine_gold_wire'
    ]);


    //cell workbench
    event.shaped('ae2:cell_workbench',[
        'QCQ',
        'WXW',
        'PPP'
    ],{
        Q: '#forge:gems/certus_quartz',
        C: 'ae2:calculation_processor',
        W: 'gtceu:fine_copper_wire',
        X: 'minecraft:chest',
        P: 'gtceu:steel_plate'
    });


    //charger
    event.shaped('ae2:charger',[
        'SCS',
        'SW ',
        'SCS'
    ],{
        S: 'gtceu:steel_plate',
        C: 'gtceu:copper_plate',
        W: 'gtceu:fine_copper_wire'
    });


    //spatial io port
    event.shaped('ae2:spatial_io_port',[
        'PSP',
        'FEF',
        'PSP'
    ],{
        P: 'gtceu:steel_plate',
        S: 'ae2:spatial_pylon',
        F: '#ae2:glass_cable',
        E: 'ae2:engineering_processor'
    });


    //energy cell
    event.shaped('ae2:energy_cell', [
        'CGC',
        'GBG',
        'CGC'
    ],{
        C: '#forge:gems/certus_quartz',
        G: 'ae2:quartz_glass',
        B: 'gtceu:lv_lithium_battery'
    });


    //dense energy cell
    event.recipes.gtceu.assembler('dense_energy_cell')
        .itemInputs('ae2:energy_cell', '16x ae2:fluix_crystal', 'ae2:calculation_processor')
        .itemOutputs('ae2:dense_energy_cell')
        .duration(400)
        .EUt(24)


    //import bus
    event.shaped('ae2:import_bus',[
        ' D ',
        'SGS',
        'LCL'
    ],{
        D: 'ae2:annihilation_core',
        S: 'gtceu:steel_plate',
        G: 'ae2:quartz_glass',
        L: 'gtceu:lv_electric_motor',
        C: 'ae2:calculation_processor'
    });


    //export bus
    event.shaped('ae2:export_bus',[
        ' D ',
        'SGS',
        'LCL'
    ],{
        D: 'ae2:formation_core',
        S: 'gtceu:steel_plate',
        G: 'ae2:quartz_glass',
        L: 'gtceu:lv_electric_motor',
        C: 'ae2:calculation_processor'
    });


    //p2p
    event.shaped('ae2:me_p2p_tunnel',[
        'PCP',
        'PEP',
        'FFF'
    ],{
        P: 'gtceu:steel_plate',
        C: '#gtceu:circuits/lv',
        E: 'ae2:engineering_processor',
        F: 'ae2:fluix_crystal'
    });


    //planes
    event.shaped('ae2:formation_plane',['FFF','SCS'],{F: 'ae2:fluix_crystal',S: 'gtceu:steel_plate', C: 'ae2:formation_core'})
    event.shaped('ae2:annihilation_plane',['FFF','SCS'],{F: 'ae2:fluix_crystal',S: 'gtceu:steel_plate', C: 'ae2:annihilation_core'})
    

    //certus using fabricator
    event.recipes.gtceu.crystal_fabricator('fabricate_certus')
        .notConsumable('#forge:gems/certus_quartz')
        .itemOutputs('8x gtceu:certus_quartz_gem')
        .duration(200)
        .EUt(112);


    //fluix using fabricator
    event.recipes.gtceu.crystal_fabricator('fabricate_fluix')
        .itemInputs('minecraft:quartz')
        .itemOutputs('4x ae2:fluix_crystal')
        .duration(200)
        .EUt(812);

});