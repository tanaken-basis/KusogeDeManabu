////////////////////////////////////////////////////////////////////////////////
// items

func.commodity_1 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_1"].num > 0) {
        jsonData.players[playerIndex].hp = Math.min(jsonData.players[playerIndex].hpMax, jsonData.players[playerIndex].hp + 20);
    }
    cleanupItemsAtMisc("commodity_1");
};
func.commodity_2 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_2"].num > 0) {
        jsonData.players[playerIndex].hp = Math.min(jsonData.players[playerIndex].hpMax, jsonData.players[playerIndex].hp + 90);
    }
    cleanupItemsAtMisc("commodity_2");
};
func.commodity_3 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_3"].num > 0) {
        jsonData.players[playerIndex].hp = Math.min(jsonData.players[playerIndex].hpMax, jsonData.players[playerIndex].hp + 60);
    }
    cleanupItemsAtMisc("commodity_3");
};
func.commodity_4 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_4"].num > 0) {
        jsonData.players[playerIndex].hp = Math.min(jsonData.players[playerIndex].hpMax, jsonData.players[playerIndex].hp + 80);
    }
    cleanupItemsAtMisc("commodity_4");
};
func.commodity_5 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_5"].num > 0) {
        jsonData.players[playerIndex].hp = Math.min(jsonData.players[playerIndex].hpMax, jsonData.players[playerIndex].hp + 80);
    }
    cleanupItemsAtMisc("commodity_5");
};
func.commodity_6 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_6"].num > 0) {
        jsonData.players[playerIndex].hp = Math.min(jsonData.players[playerIndex].hpMax, jsonData.players[playerIndex].hp + 40);
    }
    cleanupItemsAtMisc("commodity_6");
};
func.commodity_7 = function(playerIndex) {
    playerIndex = 0;
    if (jsonData.state.items["commodity_7"].num > 0) {
        jsonData.players[playerIndex].hp = jsonData.players[playerIndex].hpMax;
    }
    cleanupItemsAtMisc("commodity_7");
};

func.treasure_1 = function(playerIndex) {
    playerIndex = 0;
};
func.treasure_2 = function(playerIndex) {
    playerIndex = 0;
};
func.treasure_3 = function(playerIndex) {
    playerIndex = 0;
};


////////////////////////////////////////////////////////////////////////////////
// shopping

func.shopping_1 = function() {
    var itemsHashTable = {};
    itemsHashTable["commodity_1"] = {};
    createShopAtField(itemsHashTable);
};

func.shopping_5 = function() {
    var itemsHashTable = {};
    itemsHashTable["commodity_1"] = {};
    itemsHashTable["commodity_3"] = {};
    createShopAtField(itemsHashTable);
};

func.shopping_8 = function() {
    var itemsHashTable = {};
    itemsHashTable["commodity_1"] = {};
    itemsHashTable["commodity_2"] = {};
    itemsHashTable["commodity_4"] = {};
    itemsHashTable["commodity_5"] = {};
    createShopAtField(itemsHashTable);
};

///////////////////////////////////////////////////////////////////////////////
// healing

func.healing_1 = function(){
  var eventSprite;
  var eventTween;
  playerIndex = 0;
  jsonData.players[playerIndex].hp = jsonData.players[playerIndex].hpMax;
  soundEffects["assets/audio/sound_up.mp3"].play();
  eventSprite = addSpriteAtMisc(jsonEvents.white, game.camera);
  eventTween = game.add.tween(eventSprite);
  eventTween.to({alpha: 0}, 300, "Linear", true, 300);
};

////////////////////////////////////////////////////////////////////////////////
// save

func.saveData_1 = function(){
  // jsonData.state.id = "load_field_Map1";
  setStatePosAtMisc(848, 848);
  createSubMenuSaveDataAtField();
}
func.saveData_3F2 = function(){
  // jsonData.state.id = "load_field_Map3F2";
  setStatePosAtMisc(944, 848);
  createSubMenuSaveDataAtField();
}
func.saveData_1S2 = function(){
  // jsonData.state.id = "load_field_Map1";
  setStatePosAtMisc(528 , 880);
  createSubMenuSaveDataAtField();
}
func.saveData_5 = function(){
  // jsonData.state.id = "load_field_Map5";
  setStatePosAtMisc(688, 752);
  createSubMenuSaveDataAtField();
}
func.saveData_6F1 = function(){
  // jsonData.state.id = "load_field_Map6F1";
  setStatePosAtMisc(560, 464);
  createSubMenuSaveDataAtField();
}
func.saveData_6F2 = function(){
  // jsonData.state.id = "load_field_Map6F2";
  setStatePosAtMisc(944, 496);
  createSubMenuSaveDataAtField();
}
func.saveData_7 = function(){
  // jsonData.state.id = "load_field_Map7";
  setStatePosAtMisc(496, 912);
  createSubMenuSaveDataAtField();
}
func.saveData_8 = function(){
  // jsonData.state.id = "load_field_Map8";
  setStatePosAtMisc(816, 784);
  createSubMenuSaveDataAtField();
}
func.saveData_9F1 = function(){
  // jsonData.state.id = "load_field_Map9F1";
  setStatePosAtMisc(656, 432);
  createSubMenuSaveDataAtField();
}
func.saveData_9F2 = function(){
  // jsonData.state.id = "load_field_Map9F2";
  setStatePosAtMisc(528, 720);
  createSubMenuSaveDataAtField();
}

////////////////////////////////////////////////////////////////////////////////
// events

func.map_1_event_1 = function(){
  setStatePosAtMisc(128, 64);
}

func.map_1_event_2 = function(){
  setStatePosAtMisc(128, 64);
}
