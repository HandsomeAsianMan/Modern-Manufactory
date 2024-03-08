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
        'WFw'
    ],{
        W: 'gtceu:fine_gold_wire',
        A: 'ae2:annihilation_core',
        R: 'gtceu:lv_robot_arm',
        M: 'gtceu:lv_machine_casing',
        F: 'ae2:formation_core'
    });
});