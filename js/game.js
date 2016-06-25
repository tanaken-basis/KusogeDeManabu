var conf = {
    width: 800,
    height: 600,
    renderer: Phaser.AUTO,
    parent: "game",
    transparent: false,
    antialias: false,
    state: this
};

var game = new Phaser.Game(conf);

// Start
game.state.add("load_start", basicFrame.loadStart);
game.state.add("start", basicFrame.start);
// Scene1
game.state.add("load_field_Map1", basicFrame.loadFieldMap1);
game.state.add("field_Map1", basicFrame.fieldMap1);
game.state.add("load_field_Map2", basicFrame.loadFieldMap2);
game.state.add("field_Map2", basicFrame.fieldMap2);
game.state.add("load_battle_Map2", basicFrame.loadBattleMap2);
game.state.add("battle_Map2", basicFrame.battleMap2);
game.state.add("load_field_Map3F1", basicFrame.loadFieldMap3F1);
game.state.add("field_Map3F1", basicFrame.fieldMap3F1);
game.state.add("load_battle_Map3F1", basicFrame.loadBattleMap3F1);
game.state.add("battle_Map3F1", basicFrame.battleMap3F1);
game.state.add("load_field_Map3F2", basicFrame.loadFieldMap3F2);
game.state.add("field_Map3F2", basicFrame.fieldMap3F2);
game.state.add("load_battle_Map3F2", basicFrame.loadBattleMap3F2);
game.state.add("battle_Map3F2", basicFrame.battleMap3F2);
// Scene2
game.state.add("load_field_Map4F1", basicFrame.loadFieldMap4F1);
game.state.add("field_Map4F1", basicFrame.fieldMap4F1);
game.state.add("load_field_Map4F2", basicFrame.loadFieldMap4F2);
game.state.add("field_Map4F2", basicFrame.fieldMap4F2);
game.state.add("load_field_Map5", basicFrame.loadFieldMap5);
game.state.add("field_Map5", basicFrame.fieldMap5);
game.state.add("load_field_Map6F1", basicFrame.loadFieldMap6F1);
game.state.add("field_Map6F1", basicFrame.fieldMap6F1);
game.state.add("load_battle_Map6F1", basicFrame.loadBattleMap6F1);
game.state.add("battle_Map6F1", basicFrame.battleMap6F1);
game.state.add("load_field_Map6F2", basicFrame.loadFieldMap6F2);
game.state.add("field_Map6F2", basicFrame.fieldMap6F2);
game.state.add("load_battle_Map6F2", basicFrame.loadBattleMap6F2);
game.state.add("battle_Map6F2", basicFrame.battleMap6F2);
// Scene3, 4
game.state.add("load_field_Map7", basicFrame.loadFieldMap7);
game.state.add("field_Map7", basicFrame.fieldMap7);
game.state.add("load_battle_Map7", basicFrame.loadBattleMap7);
game.state.add("battle_Map7", basicFrame.battleMap7);
game.state.add("load_field_Map8", basicFrame.loadFieldMap8);
game.state.add("field_Map8", basicFrame.fieldMap8);
// Scene5
game.state.add("load_field_Map9F1", basicFrame.loadFieldMap9F1);
game.state.add("field_Map9F1", basicFrame.fieldMap9F1);
game.state.add("load_battle_Map9F1", basicFrame.loadBattleMap9F1);
game.state.add("battle_Map9F1", basicFrame.battleMap9F1);
game.state.add("load_field_Map9F2", basicFrame.loadFieldMap9F2);
game.state.add("field_Map9F2", basicFrame.fieldMap9F2);
game.state.add("load_battle_Map9F2", basicFrame.loadBattleMap9F2);
game.state.add("battle_Map9F2", basicFrame.battleMap9F2);
game.state.add("load_field_Map9F3", basicFrame.loadFieldMap9F3);
game.state.add("field_Map9F3", basicFrame.fieldMap9F3);
game.state.add("load_battle_Map9F3", basicFrame.loadBattleMap9F3);
game.state.add("battle_Map9F3", basicFrame.battleMap9F3);
// End
game.state.add("load_end", basicFrame.loadEnd);
game.state.add("end", basicFrame.end);

changeStateAtMisc("load_start");
