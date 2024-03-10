// priority: 0

ServerEvents.recipes(event => {


    //item cell housing
    event.shaped('megacells:mega_item_cell_housing',[
        'SGS',
        'WCW',
        'PPP'
    ],{
        S: 'gtceu:polyethylene_plate',
        G: 'ae2:quartz_vibrant_glass',
        W: 'gtceu:fine_sky_alloy_wire',
        P: 'gtceu:sky_alloy_plate',
        C: 'gtceu:steel_crate'
    });


    //fluid cell housing
    event.shaped('megacells:mega_fluid_cell_housing',[
        'SGS',
        'WCW',
        'PPP'
    ],{
        S: 'gtceu:polyethylene_plate',
        G: 'ae2:quartz_vibrant_glass',
        W: 'gtceu:fine_sky_alloy_wire',
        P: 'gtceu:sky_alloy_plate',
        C: 'gtceu:lv_hermetic_casing'
    });


    //1m cell
    event.shaped('megacells:cell_component_1m',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:fine_sky_alloy_wire',
        C: '#gtceu:circuits/iv',
        P: 'ae2:cell_component_256k',
        G: 'gtceu:tempered_glass'
    });


    //4m cell
    event.shaped('megacells:cell_component_4m',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:sky_alloy_single_wire',
        C: '#gtceu:circuits/luv',
        P: 'megacells:cell_component_1m',
        G: 'gtceu:tempered_glass'
    });


    //16m cell
    event.shaped('megacells:cell_component_16m',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:sky_alloy_double_wire',
        C: '#gtceu:circuits/zpm',
        P: 'megacells:cell_component_4m',
        G: 'gtceu:laminated_glass'
    });


    //64m cell
    event.shaped('megacells:cell_component_64m',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:sky_alloy_quadruple_wire',
        C: '#gtceu:circuits/uv',
        P: 'megacells:cell_component_16m',
        G: 'gtceu:laminated_glass'
    });


    //256m cell
    event.shaped('megacells:cell_component_256m',[
        'WCW',
        'PGP',
        'WPW'
    ],{
        W: 'gtceu:sky_alloy_octal_wire',
        C: '#gtceu:circuits/uhv',
        P: 'megacells:cell_component_64m',
        G: 'gtceu:fusion_glass'
    });


    //bulk cell
    event.shaped('megacells:bulk_cell_component',[
        'WGW',
        'CFC',
        'WPW'
    ],{
        W: 'gtceu:sky_alloy_double_wire',
        G: 'gtceu:laminated_glass',
        C: '#gtceu:circuits/iv',
        F: 'gtceu:luv_field_generator',
        P: 'megacells:cell_component_4m'
    });


    //bulk item cell
    event.shaped('megacells:bulk_item_cell',[
        'HC'
    ],{
        H: 'megacells:mega_item_cell_housing',
        C: 'megacells:bulk_cell_component'
    });


    //mega crafting unit
    event.shaped('megacells:mega_crafting_unit',[
        'PGP',
        'GUG',
        'PGP'
    ],{
        P: 'gtceu:sky_alloy_plate',
        G: 'gtceu:tempered_glass',
        U: 'ae2:crafting_unit'
    });


})