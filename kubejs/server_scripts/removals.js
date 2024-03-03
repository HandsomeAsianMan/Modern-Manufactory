// priority: 1000
ServerEvents.recipes(event => {

    //Recipe ID
    const recipes_id = [
        'gtceu:smelting/wrought_iron_nugget'
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
