////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap2 = function() {};
basicFrame.loadBattleMap2.prototype = {
    preload: function() {
      if(jsonData.state.scene == "scene_2"){
        loadJsonsAtMisc(["assets/jsons/monsters_map_2.json", "assets/jsons/matrices_map_2_scene_2.json"]);
      } else if(jsonData.state.scene == "scene_3"){
        loadJsonsAtMisc(["assets/jsons/monsters_map_2.json", "assets/jsons/matrices_map_2_scene_3.json"]);
      } else if(jsonData.state.scene == "scene_4"){
        loadJsonsAtMisc(["assets/jsons/monsters_map_2.json", "assets/jsons/matrices_map_2_scene_4.json"]);
      } else if(jsonData.state.scene == "scene_5"){
        loadJsonsAtMisc(["assets/jsons/monsters_map_2.json", "assets/jsons/matrices_map_2_scene_5.json"]);
      } else {
        loadJsonsAtMisc(["assets/jsons/monsters_map_2.json", "assets/jsons/matrices_map_2.json"]);
      }
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_2.json");
      if(jsonData.state.scene == "scene_2"){
        jsonMonsters[0].hp = Math.min(jsonMonsters[0].hpMax, 150)
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_2_scene_2.json");
      } else if(jsonData.state.scene == "scene_3"){
        jsonMonsters[0].hp = Math.min(jsonMonsters[0].hpMax, 50)
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_2_scene_3.json");
      } else if(jsonData.state.scene == "scene_4"){
        jsonMonsters[0].hp = Math.min(jsonMonsters[0].hpMax, 50)
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_2_scene_4.json");
      } else if(jsonData.state.scene == "scene_5"){
        jsonMonsters[0].hp = Math.min(jsonMonsters[0].hpMax, 150)
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_2_scene_5.json");
      } else{
        jsonMonsters[0].hp = Math.min(jsonMonsters[0].hpMax, 80)
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_2.json");
      }
    },
    update: function() {
        changeStateAtMisc("battle_Map2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap3F1 = function() {};
basicFrame.loadBattleMap3F1.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_3-1.json", "assets/jsons/matrices_map_3-1.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_3-1.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_3-1.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map3F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap3F2 = function() {};
basicFrame.loadBattleMap3F2.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_3-2.json", "assets/jsons/matrices_map_3-2.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_3-2.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_3-2.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map3F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap6F1 = function() {};
basicFrame.loadBattleMap6F1.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_6-1.json", "assets/jsons/matrices_map_6-1.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_6-1.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_6-1.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map6F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap6F2 = function() {};
basicFrame.loadBattleMap6F2.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_6-2.json", "assets/jsons/matrices_map_6-2.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_6-2.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_6-2.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map6F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap7 = function() {};
basicFrame.loadBattleMap7.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_7.json", "assets/jsons/matrices_map_7.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_7.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_7.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map7");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap9F1 = function() {};
basicFrame.loadBattleMap9F1.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_9-1.json", "assets/jsons/matrices_map_9-1.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_9-1.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_9-1.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map9F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap9F2 = function() {};
basicFrame.loadBattleMap9F2.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_9-2.json", "assets/jsons/matrices_map_9-2.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_9-2.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_9-2.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map9F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadBattleMap9F3 = function() {};
basicFrame.loadBattleMap9F3.prototype = {
    preload: function() {
        loadJsonsAtMisc(["assets/jsons/monsters_map_9-3.json", "assets/jsons/matrices_map_9-3.json"]);
    },
    create: function() {
      jsonMonsters = game.cache.getJSON("assets/jsons/monsters_map_9-3.json");
      jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_9-3.json");
    },
    update: function() {
        changeStateAtMisc("battle_Map9F3");
    }
};
////////////////////////////////////////////////////////////////////////////////
