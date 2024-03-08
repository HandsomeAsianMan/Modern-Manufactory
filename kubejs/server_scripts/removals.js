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
        'ae2:network/blocks/interfaces_interface',
        'ae2:network/blocks/pattern_providers_interface'
    ];


    //Mod
    const recipes_mod = [
        'ironfurnaces'
    ];


    //Output
    const recipes_output = [

    ];


    //Input
    const recipes_input = [

    ];

    
    //Removals
    for (let recipe of recipes_id) event.remove({id: recipe});
    for (let recipe of recipes_mod) event.remove({mod: recipe});
    for (let recipe of recipes_output) event.remove({output: recipe});
    for (let recipe of recipes_input) event.remove({input: recipe});
});
