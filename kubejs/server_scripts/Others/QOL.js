ServerEvents.recipes(event => {
    //clay decompression
    event.shapeless('4x minecraft:clay_ball','minecraft:clay');
    //brick decompression
    event.shapeless('4x minecraft:brick','minecraft:bricks');
    //quick craft sticks
    event.shaped('16x minecraft:stick',['A','A'],{A: '#minecraft:logs'});
    //wheat seed
    event.shapeless('minecraft:wheat_seeds','minecraft:wheat');
    //glow stone decompression
    event.shapeless('4x minecraft:glowstone_dust','minecraft:glowstone');
});
ServerEvents.tags('item',event=>{
    //rubber slabs add to slab tag
    event.add('minecraft:wooden_slabs', 'gtceu:rubber_slab');
    event.add('minecraft:wooden_slabs', 'gtceu:treated_wood_slab');
});