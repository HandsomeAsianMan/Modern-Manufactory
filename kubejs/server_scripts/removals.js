// priority: 1000
ServerEvents.recipes(event => {

    //Recipe ID
    const recipes_id = [
        //gtceu
        'gtceu:smelting/wrought_iron_nugget',

        //ae2
        'ae2:network/cells/item_storage_components_cell_1k_part',
        'ae2:network/cells/item_storage_components_cell_4k_part',
        'ae2:network/cells/item_storage_components_cell_16k_part',
        'ae2:network/cells/item_storage_components_cell_64k_part',
        'ae2:network/cells/item_storage_components_cell_256k_part',
        'ae2:network/cells/item_storage_cell_1k',
        'ae2:network/cells/item_storage_cell_4k',
        'ae2:network/cells/item_storage_cell_16k',
        'ae2:network/cells/item_storage_cell_64k',
        'ae2:network/cells/item_storage_cell_256k',
        'ae2:network/cells/fluid_storage_cell_1k',
        'ae2:network/cells/fluid_storage_cell_4k',
        'ae2:network/cells/fluid_storage_cell_16k',
        'ae2:network/cells/fluid_storage_cell_64k',
        'ae2:network/cells/fluid_storage_cell_256k',
        'ae2:network/cells/item_cell_housing',
        'ae2:network/cells/fluid_cell_housing',
        'ae2:network/blocks/interfaces_interface',
        'ae2:network/blocks/pattern_providers_interface',
        'ae2:materials/annihilationcore',
        'ae2:materials/formationcore',
        'ae2:network/blocks/inscribers'

    ];


    //Mod
    const recipes_mod = [
        'ironfurnaces'
    ];


    //Recipe_type
    const recipes_type = [
        'ae2:inscriber'
    ];


    //Output
    const recipes_output = [

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
});
