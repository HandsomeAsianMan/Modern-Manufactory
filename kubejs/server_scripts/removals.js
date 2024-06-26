// priority: 1000

ServerEvents.recipes(event => {

    //Recipe ID
    const recipes_id = [
        //gtceu
        'gtceu:smelting/wrought_iron_nugget',

        //ae2
        'ae2:network/blocks/interfaces_interface',
        'ae2:network/blocks/pattern_providers_interface',
        'ae2:materials/annihilationcore',
        'ae2:materials/formationcore',
        'ae2:network/blocks/inscribers',
        'ae2:decorative/quartz_vibrant_glass',
        'ae2:misc/fluixpearl',
        'ae2:network/wireless_part',
        'ae2:network/blocks/io_condenser',
        'ae2:network/crafting/molecular_assembler',
        'ae2:network/parts/panels_semi_dark_monitor',
        'ae2:network/parts/level_emitter',
        'ae2:network/crafting/cpu_crafting_unit',
        'ae2:network/blocks/controller',
        'ae2:network/blocks/energy_energy_acceptor',
        'ae2:network/blocks/energy_vibration_chamber',
        'ae2:network/blocks/crystal_processing_growth_accelerator',
        'ae2:network/cables/glass_fluix',
        'ae2:network/blocks/storage_drive',
        'ae2:network/blocks/storage_chest',
        'ae2:network/crafting/patterns_blank',
        'ae2:network/blocks/quantum_ring',
        'ae2:network/blocks/quantum_link',
        'ae2:network/blocks/io_port',
        'ae2:misc/tank_sky_stone',
        'ae2:network/blocks/spatial_io_port',
        'ae2:network/parts/storage_bus',
        'ae2:materials/advancedcard',
        'ae2:materials/basiccard',
        'ae2:network/wireless_booster',
        'ae2:tools/network_memory_card',
        'ae2:network/blocks/cell_workbench',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2:network/blocks/spatial_anchor',
        'ae2:network/blocks/crank',
        'ae2:network/blocks/energy_energy_cell',
        'ae2:network/blocks/energy_dense_energy_cell',
        'ae2:network/parts/energy_level_emitter',
        'ae2:network/crystal_resonance_generator',
        '/ae2:network\/parts\/......_bus/',
        'ae2:network/parts/tunnels_me',
        '/ae2:network\/parts\/.*_plane.*/',
        '/ae2:network\/cells\/(?!.*storage$).*/',

        //Extended ae2
        'expatternprovider:wireless_connector',
        'expatternprovider:wireless_tool',
        'expatternprovider:ex_molecular_assembler',
        'expatternprovider:ex_inscriber',

        //gtceu
        'gtceu:compressor/compressed_fireclay',
        'gtceu:smelting/fireclay_brick',
        'gtceu:autoclave/silicon_dioxide_to_quartzite_gem',
        'gtceu:mixer/mud',
        '/gtceu:....ting\/smelt_raw_redstone_ore_to_ingot/',

        //random shit
        'tempad:tempad'

    ];
    

    //Mod
    const recipes_mod = [
        'ironfurnaces',
    ];


    //Recipe_type
    const recipes_type = [
        'ae2:inscriber',
        'gtceu:primitive_blast_furnace'
    ];


    //Output
    const recipes_output = [
        'gtceu:resin_circuit_board'
    ];


    //Input
    const recipes_input = [
        'ae2:certus_quartz_dust'
    ];

    
    //Removals
    for (let recipe of recipes_id) event.remove({id: recipe});
    for (let recipe of recipes_mod) event.remove({mod: recipe});
    for (let recipe of recipes_type) event.remove({type: recipe});
    for (let recipe of recipes_output) event.remove({output: recipe});
    for (let recipe of recipes_input) event.remove({input: recipe});

    //multicondition removals
    event.remove({
        mod:'megacells',
        not:[{input:'megacells:mega_item_cell_housing'},
            {input:'megacells:mega_fluid_cell_housing'},
            {input:'megacells:mega_crafting_unit'}]
    });
});
