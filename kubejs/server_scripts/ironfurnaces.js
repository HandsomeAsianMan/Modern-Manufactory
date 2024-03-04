// priority: 0
ServerEvents.recipes(event => {

    function Encase(Output, Middle, Casing) {
        event.shaped(Output,['AAA','ABA','AAA'],{A: Casing,B: Middle});
    };

    Encase('ironfurnaces:copper_furnace','minecraft:furnace','minecraft:copper_ingot');
    Encase('ironfurnaces:iron_furnace','ironfurnaces:copper_furnace','minecraft:iron_ingot');
    Encase('ironfurnaces:silver_furnace','ironfurnaces:iron_furnace','gtceu:silver_ingot');
    Encase('ironfurnaces:gold_furnace','ironfurnaces:silver_furnace','minecraft:gold_ingot');
    Encase('ironfurnaces:diamond_furnace','ironfurnaces:gold_furnace','minecraft:diamond');
    Encase('ironfurnaces:emerald_furnace','ironfurnaces:diamond_furnace','minecraft:emerald');
    Encase('ironfurnaces:crystal_furnace','ironfurnaces:diamond_furnace','minecraft:amethyst_shard');
    Encase('ironfurnaces:obsidian_furnace',['ironfurnaces:emerald_furnace','ironfurnaces:crystal_furnace'],'minecraft:obsidian');
    Encase('ironfurnaces:netherite_furnace','ironfurnaces:obsidian_furnace','minecraft:netherite_scrap');
    
});