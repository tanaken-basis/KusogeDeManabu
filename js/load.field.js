////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap1 = function() {};
basicFrame.loadFieldMap1.prototype = {
    preload: function() {
      setStateIdMapAtMisc("load_field_Map1", "map_1");
      if(jsonData.state.scene == "scene_2"){
        loadJsonsAtMisc(["assets/jsons/npcs_map_1_scene_2.json"]);
      } else{
        loadJsonsAtMisc(["assets/jsons/npcs_map_1.json"]);
      }
    },
    create: function() {
      if(jsonData.state.scene == "scene_2"){
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_1_scene_2.json");
      } else{
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_1.json");
      }
    },
    update: function() {
        changeStateAtMisc("field_Map1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap2 = function() {};
basicFrame.loadFieldMap2.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map2", "map_2");
        loadJsonsAtMisc(["assets/jsons/npcs_map_2.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_2.json");
    },
    update: function() {
        changeStateAtMisc("field_Map2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap3F1 = function() {};
basicFrame.loadFieldMap3F1.prototype = {
    preload: function() {
      setStateIdMapAtMisc("load_field_Map3F1", "map_3-1");
      loadJsonsAtMisc(["assets/jsons/npcs_map_3-1.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_3-1.json");
    },
    update: function() {
        changeStateAtMisc("field_Map3F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap3F2 = function() {};
basicFrame.loadFieldMap3F2.prototype = {
    preload: function() {
      setStateIdMapAtMisc("load_field_Map3F2", "map_3-2");
      loadJsonsAtMisc(["assets/jsons/npcs_map_3-2.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_3-2.json");
    },
    update: function() {
        changeStateAtMisc("field_Map3F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap4F1 = function() {};
basicFrame.loadFieldMap4F1.prototype = {
    preload: function() {
      setStateIdMapAtMisc("load_field_Map4F1", "map_4-1");
      loadJsonsAtMisc(["assets/jsons/npcs_map_4-1.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_4-1.json");
    },
    update: function() {
        changeStateAtMisc("field_Map4F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap4F2 = function() {};
basicFrame.loadFieldMap4F2.prototype = {
    preload: function() {
      setStateIdMapAtMisc("load_field_Map4F2", "map_4-2");
      loadJsonsAtMisc(["assets/jsons/npcs_map_4-2.json"]);
    },
    create: function() {
      jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_4-2.json");
    },
    update: function() {
      changeStateAtMisc("field_Map4F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap5 = function() {};
basicFrame.loadFieldMap5.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map5", "map_5");
        if(jsonData.state.scene == "scene_2"){
          loadJsonsAtMisc(["assets/jsons/npcs_map_5_scene_2.json"]);
        } else{
          loadJsonsAtMisc(["assets/jsons/npcs_map_5.json"]);
        }
    },
    create: function() {
      if(jsonData.state.scene == "scene_2"){
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_5_scene_2.json");
      } else{
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_5.json");
      }
    },
    update: function() {
        changeStateAtMisc("field_Map5");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap6F1 = function() {};
basicFrame.loadFieldMap6F1.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map6F1", "map_6-1");
        if(jsonData.state.scene == "scene_2"){
          loadJsonsAtMisc(["assets/jsons/npcs_map_6-1_scene_2.json"]);
        } else{
          loadJsonsAtMisc(["assets/jsons/npcs_map_6-1.json"]);
        }
    },
    create: function() {
      if(jsonData.state.scene == "scene_2"){
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_6-1_scene_2.json");
      } else{
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_6-1.json");
      }
    },
    update: function() {
        changeStateAtMisc("field_Map6F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap6F2 = function() {};
basicFrame.loadFieldMap6F2.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map6F2", "map_6-2");
        if(jsonData.state.scene == "scene_2"){
          loadJsonsAtMisc(["assets/jsons/npcs_map_6-2_scene_2.json"]);
        } else{
          loadJsonsAtMisc(["assets/jsons/npcs_map_6-2.json"]);
        }
    },
    create: function() {
      if(jsonData.state.scene == "scene_2"){
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_6-2_scene_2.json");
      } else{
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_6-2.json");
      }
    },
    update: function() {
        changeStateAtMisc("field_Map6F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap7 = function() {};
basicFrame.loadFieldMap7.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map7", "map_7");
        if(jsonData.state.scene == "scene_3"){
          loadJsonsAtMisc(["assets/jsons/npcs_map_7_scene_3.json"]);
        } else{
          loadJsonsAtMisc(["assets/jsons/npcs_map_7.json"]);
        }
    },
    create: function() {
      if(jsonData.state.scene == "scene_3"){
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_7_scene_3.json");
      } else{
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_7.json");
      }
    },
    update: function() {
        changeStateAtMisc("field_Map7");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap8 = function() {};
basicFrame.loadFieldMap8.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map8", "map_8");
        loadJsonsAtMisc(["assets/jsons/npcs_map_8.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_8.json");
    },
    update: function() {
        changeStateAtMisc("field_Map8");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap9F1 = function() {};
basicFrame.loadFieldMap9F1.prototype = {
    preload: function() {
      if( isTrueAtMisc(jsonData.state.eventFlags.Scene4Map9F1Event1) ){
        if( (existsAtMisc(jsonData.state.items.treasure_1)) && (jsonData.state.items.treasure_1.num > 0)){
          if( (existsAtMisc(jsonData.state.items.treasure_2)) && (jsonData.state.items.treasure_2.num > 0)){
            if( (existsAtMisc(jsonData.state.items.treasure_3)) && (jsonData.state.items.treasure_3.num > 0)){
              jsonData.state.eventFlags.Scene4Map9F1Event1 = false;
              jsonData.state.scene = "scene_5";
              jsonData.state.npcsPosMoves["map_9_worker_1"] = {"x":  656 , "y":  720};
            }
          }
        }
      }
      setStateIdMapAtMisc("load_field_Map9F1", "map_9-1");
      loadJsonsAtMisc(["assets/jsons/npcs_map_9-1.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_9-1.json");
    },
    update: function() {
        changeStateAtMisc("field_Map9F1");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap9F2 = function() {};
basicFrame.loadFieldMap9F2.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map9F2", "map_9-2");
        loadJsonsAtMisc(["assets/jsons/npcs_map_9-2.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_9-2.json");
    },
    update: function() {
        changeStateAtMisc("field_Map9F2");
    }
};
////////////////////////////////////////////////////////////////////////////////
basicFrame.loadFieldMap9F3 = function() {};
basicFrame.loadFieldMap9F3.prototype = {
    preload: function() {
        setStateIdMapAtMisc("load_field_Map9F3", "map_9-3");
        loadJsonsAtMisc(["assets/jsons/npcs_map_9-3.json"]);
    },
    create: function() {
        jsonNpcs = game.cache.getJSON("assets/jsons/npcs_map_9-3.json");
    },
    update: function() {
        changeStateAtMisc("field_Map9F3");
    }
};
////////////////////////////////////////////////////////////////////////////////
