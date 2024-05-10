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


    //component schematics
    for (let number of [4,16,64,256]) event.shapeless(`kubejs:${number}m_cell_schematic`,[`megacells:cell_component_${number}m`, '#forge:dyes/blue', 'minecraft:paper']);


    //1m cell
    event.recipes.gtceu.assembly_line('assembly_line_cell_component_1m')
        .itemOutputs('megacells:cell_component_1m')
        .itemInputs('gtceu:lv_field_generator', '#gtceu:circuits/ev', '16x gtceu:fine_sky_alloy_wire', 'gtceu:tempered_glass', 'gtceu:stainless_steel_plate', '4x gtceu:fine_gold_wire', '4x gtceu:polybenzimidazole_foil', 'gtceu:flawless_certus_quartz_gem', 'ae2:engineering_processor')
        .inputFluids('gtceu:soldering_alloy 144')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('ae2:cell_component_256k').EUt(7680).duration(1000))
        .duration(200)
        .EUt(7680);


    //4m cell
    event.recipes.gtceu.assembly_line('assembly_line_cell_component_4m_direct')
        .itemOutputs('megacells:cell_component_4m')
        .itemInputs('gtceu:mv_field_generator', '#gtceu:circuits/iv', '32x gtceu:fine_sky_alloy_wire', '2x gtceu:tempered_glass', 'gtceu:double_titanium_plate', '4x gtceu:fine_platinum_wire', '4x gtceu:polybenzimidazole_foil','gtceu:flawless_certus_quartz_gem', 'ae2:engineering_processor')
        .inputFluids('gtceu:soldering_alloy 144')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('kubejs:4m_cell_schematic').EUt(7680).duration(2000))
        .duration(350)
        .EUt(24000);

    event.recipes.gtceu.assembly_line('assembly_line_cell_component_4m')
        .itemOutputs('megacells:cell_component_4m')
        .itemInputs('megacells:cell_component_1m', 'gtceu:mv_field_generator', '#gtceu:circuits/iv', '16x gtceu:fine_sky_alloy_wire', '4x gtceu:fine_platinum_wire', 'gtceu:tempered_glass', 'gtceu:double_titanium_plate')
        .inputFluids('gtceu:soldering_alloy 72')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('megacells:cell_component_1m').EUt(7680).duration(2000))
        .duration(200)
        .EUt(24000)


    //16m cell
    event.recipes.gtceu.assembly_line('assembly_line_cell_component_16m_direct')
        .itemOutputs('megacells:cell_component_16m')
        .itemInputs('gtceu:hv_field_generator', '#gtceu:circuits/luv', '64x gtceu:fine_sky_alloy_wire', 'gtceu:laminated_glass', 'gtceu:double_tungsten_steel_plate', '4x gtceu:fine_iridium_wire', '4x gtceu:polybenzimidazole_foil','gtceu:flawless_certus_quartz_gem', 'ae2:engineering_processor')
        .inputFluids('gtceu:soldering_alloy 288')
        .stationResearch(b => b.researchStack('kubejs:16m_cell_schematic').CWUt(4,9600))
        .duration(400)
        .EUt(24000);

    event.recipes.gtceu.assembly_line('assembly_line_cell_component_16m')
        .itemOutputs('megacells:cell_component_16m')
        .itemInputs('megacells:cell_component_4m', 'gtceu:hv_field_generator', '#gtceu:circuits/luv', '32x gtceu:fine_sky_alloy_wire', '4x gtceu:fine_iridium_wire', 'gtceu:laminated_glass', 'gtceu:double_tungsten_steel_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .stationResearch(b => b.researchStack('megacells:cell_component_4m').CWUt(4,9600))
        .duration(200)
        .EUt(24000)

    //64m cell
    event.recipes.gtceu.assembly_line('assembly_line_cell_component_64m_direct')
        .itemOutputs('megacells:cell_component_64m')
        .itemInputs('gtceu:ev_field_generator', '#gtceu:circuits/zpm', '32x gtceu:sky_alloy_single_wire', 'gtceu:fusion_glass', 'gtceu:double_rhodium_plated_palladium_plate', '8x gtceu:fine_osmiridium_wire', '4x gtceu:polybenzimidazole_foil', 'gtceu:exquisite_certus_quartz_gem', 'ae2:engineering_processor')
        .inputFluids('gtceu:soldering_alloy 288')
        .stationResearch(b => b.researchStack('kubejs:64m_cell_schematic').CWUt(16,57600))
        .duration(450)
        .EUt(96000);

    event.recipes.gtceu.assembly_line('assembly_line_cell_component_64m')
        .itemOutputs('megacells:cell_component_64m')
        .itemInputs('megacells:cell_component_16m', 'gtceu:ev_field_generator', '#gtceu:circuits/zpm', '24x gtceu:sky_alloy_single_wire', '8x gtceu:fine_osmiridium_wire', 'gtceu:fusion_glass', 'gtceu:double_rhodium_plated_palladium_plate', 'gtceu:exquisite_certus_quartz_gem')
        .inputFluids('gtceu:soldering_alloy 144')
        .stationResearch(b => b.researchStack('megacells:cell_component_16m').CWUt(16,57600))
        .duration(200)
        .EUt(96000);


    //256m cell
    event.recipes.gtceu.assembly_line('assembly_line_cell_component_256m_direct')
        .itemOutputs('megacells:cell_component_256m')
        .itemInputs('gtceu:iv_field_generator', '#gtceu:circuits/uv', '64x gtceu:sky_alloy_single_wire', '4x gtceu:fusion_glass', '8x gtceu:fine_europium_wire', 'gtceu:double_naquadah_alloy_plate', '8x gtceu:polybenzimidazole_foil','gtceu:exquisite_certus_quartz_gem', 'ae2:engineering_processor')
        .inputFluids('gtceu:soldering_alloy 576', 'gtceu:naquadria 144')
        .stationResearch(b => b.researchStack('kubejs:256m_cell_schematic').CWUt(32,115200))
        .duration(500)
        .EUt(382500);

    event.recipes.gtceu.assembly_line('assembly_line_cell_component_256m')
        .itemOutputs('megacells:cell_component_256m')
        .itemInputs('megacells:cell_component_64m', 'gtceu:iv_field_generator', '#gtceu:circuits/uv', '32x gtceu:sky_alloy_single_wire', '4x gtceu:fine_europium_wire', '3x gtceu:fusion_glass', 'gtceu:double_naquadah_alloy_plate', '4x gtceu:polybenzimidazole_foil')
        .inputFluids('gtceu:soldering_alloy 288', 'gtceu:naquadria 144')
        .stationResearch(b => b.researchStack('megacells:cell_component_64m').CWUt(32,115200))
        .duration(200)
        .EUt(382500);



    //bulk cell
    event.recipes.gtceu.assembly_line('assembly_line_cell_component_bulk')
        .itemOutputs('megacells:bulk_cell_component')
        .itemInputs('gtceu:luv_field_generator', '#gtceu:circuits/uv', '64x gtceu:sky_alloy_single_wire', '4x gtceu:fusion_glass', 'gtceu:dense_naquadah_alloy_plate', '4x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire', '8x gtceu:polybenzimidazole_foil', 'gtceu:exquisite_certus_quartz_gem', 'ae2:engineering_processor')
        .inputFluids('gtceu:soldering_alloy 576', 'gtceu:neutronium 16')
        .stationResearch(b => b.researchStack('kubejs:bulk_cell_schematic').CWUt(96,460800))
        .duration(600)
        .EUt(382500);


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
});