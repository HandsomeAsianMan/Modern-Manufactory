ServerEvents.recipes(event => {

    //clay decompression
    event.shapeless('4x minecraft:clay_ball','minecraft:clay')

    //brick decompression
    event.shapeless('4x minecraft:brick','minecraft:bricks')


    //quick craft sticks
    event.shaped('16x minecraft:stick',['A','A'],{A: '#minecraft:logs'})
});