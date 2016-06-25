///////////////////////////////////////////////////////////////////////////////
// preload

function subPreloadAtField(tileMapId, jsonMapId, mapUri, tilesUri) {
    setGameScaleAtMisc();
    preloadTileMapAndJsonAtField(tileMapId, jsonMapId, mapUri, tilesUri);
    preloadPlayersAtField();
    preloadNpcsAtField();
    jsonTalk.talk.update.flag = false;
    jsonYesNo.yesNo.update.flag = false;
    jsonShopping.subMenu.update.flag = false;
    jsonSave.subMenu.update.flag = false;
    jsonField.mainMenu.update.flag = false;
    jsonField.subMenu.update.flag = false;
    jsonData.state.updateButtons = true;
    jsonData.state.updateMenu = true;
    jsonData.state.updateNpcs = true;
    jsonData.state.stop = false;
}

function preloadTileMapAndJsonAtField(tileMapId, jsonMapId, mapUri, tilesUri) {
    game.load.tilemap(tileMapId, mapUri, null, Phaser.Tilemap.TILED_JSON);
    game.load.json(jsonMapId, mapUri);
    game.load.image("tiles", tilesUri);
}

function preloadPlayersAtField() {
    for (var i = 0; i < jsonData.players.length; i++) {
        loadSpritesheetAtMisc(jsonData.players[i]);
    }
}

function findTalkIndexByTalkPatternIdAtField(obj, key) {
    for (var j = 0; j < obj.talks.length; j++) {
        for (var k = 0; k < obj.talks[j].talkPatternIds.length; k++) {
            if (obj.talks[j].talkPatternIds[k] == key) {
                return j;
            }
        }
    }
    return 0;
}

function preloadNpcsAtField() {
    for (var i = 0; i < jsonNpcs.length; i++) {
        loadSpritesheetAtMisc(jsonNpcs[i]);
        jsonNpcs[i].talkPatternIndex = findTalkIndexByTalkPatternIdAtField(jsonNpcs[i], jsonData.state.scene);
    }

}

function flagsTrueAtField(){
    eventsUpdateFlag = true;
    jsonData.state.updateButtons = true;
    jsonData.state.updateMenu = true;
    jsonData.state.updateNpcs = true;
    jsonData.state.stop = false;
}
function flagsFalseAtField(){
    eventsUpdateFlag = false;
    jsonData.state.updateButtons = false;
    jsonData.state.updateMenu = false;
    jsonData.state.updateNpcs = false;
    jsonData.state.stop = true;
}

///////////////////////////////////////////////////////////////////////////////
// create

function subCreateAtField(tileMapId, jsonMapId, playerIndex, audioUri) {
    firstUpdateFlag = true;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    createMapsAtField(tileMapId, jsonMapId);
    createPlayerAtField(playerIndex);
    createNpcsAtField();
    createForegroundAtField(tileMapId, jsonMapId);
    createVirtualButtonsAtMisc();
    controlBackgroundMusicAtMisc(audioUri);
}

function findLayerIdByNameAtField(obj, key) {
    for (var i = 0; i < obj.layers.length; i++) {
        if (obj.layers[i].name == key) {
            return i;
        }
    }
    return null;
}

function createMapsAtField(tileMapId, jsonMapId) {
    // tileMap
    tileMap = game.add.tilemap(tileMapId);
    tileMap.addTilesetImage("tiles", "tiles");
    collisionLayer = tileMap.createLayer("collision_layer");
    backgroundLayer = tileMap.createLayer("background_layer");
    decorationLayer = tileMap.createLayer("decoration_layer");
    tileMap.setCollisionBetween(0, 7, true, "collision_layer");
    backgroundLayer.resizeWorld();
    // jsonMap
    eventTriggerSprites = [];
    eventTriggerTypes = [];
    eventTriggerNames = [];
    eventTriggerFuncs = [];
    eventTriggerJsonArgs = [];
    eventTriggerFlags = [];
    jsonMap = game.cache.getJSON(jsonMapId);
    eventLayerId = findLayerIdByNameAtField(jsonMap, "event_layer");
    for (var i = 0; i < jsonMap.layers[eventLayerId].objects.length; i++) {
        eventTriggerFlags.push(true);
        eventTriggerTypes.push(jsonMap.layers[eventLayerId].objects[i].type);
        eventTriggerNames.push(jsonMap.layers[eventLayerId].objects[i].name);
        if(eventTriggerTypes[i]=="treasureBox"){
          eventTriggerSprites.push(game.add.sprite(jsonMap.layers[eventLayerId].objects[i].x, jsonMap.layers[eventLayerId].objects[i].y, jsonEvents.treasureBox.sprite.file));
          if(isTrueAtMisc(jsonData.state.openedBoxes[eventTriggerNames[i]])){
            eventTriggerSprites[i].frame = 1;
          } else{
            eventTriggerSprites[i].frame = 0;
          }
        } else{
          eventTriggerSprites.push(game.add.sprite(jsonMap.layers[eventLayerId].objects[i].x, jsonMap.layers[eventLayerId].objects[i].y, jsonEvents.hyaline.sprite.file));
        }
        eventTriggerSprites[i].scale.setTo(scaleAtMisc(32, jsonMap.layers[eventLayerId].objects[i].width), scaleAtMisc(32, jsonMap.layers[eventLayerId].objects[i].height));
        if(existsAtMisc(jsonMap.layers[eventLayerId].objects[i].properties.func)){
          eventTriggerFuncs.push(jsonMap.layers[eventLayerId].objects[i].properties.func);
        } else{
          eventTriggerFuncs.push(null);
        }
        if(existsAtMisc(jsonMap.layers[eventLayerId].objects[i].properties.jsonArg)){
          eventTriggerJsonArgs.push(JSON.parse(jsonMap.layers[eventLayerId].objects[i].properties.jsonArg));
        } else{
          eventTriggerJsonArgs.push(null);
        }
    }
    eventsUpdateFlag = true;
}

function createForegroundAtField(tileMapId, jsonMapId) {
    // tileMap
    tileMap = game.add.tilemap(tileMapId);
    tileMap.addTilesetImage("tiles", "tiles");
    foregroundLayer = tileMap.createLayer("foreground_layer");
    // foregroundLayer.resizeWorld();
}

function createPlayerAtField(playerIndex) {
    player = game.add.sprite(jsonData.state.pos.x, jsonData.state.pos.y, jsonData.players[playerIndex].sprite.file);
    player.anchor.set(0.5);
    game.physics.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add("down", jsonData.players[playerIndex].sprite.frames.down, jsonData.players[playerIndex].sprite.fps, true);
    player.animations.add("left", jsonData.players[playerIndex].sprite.frames.left, jsonData.players[playerIndex].sprite.fps, true);
    player.animations.add("right", jsonData.players[playerIndex].sprite.frames.right, jsonData.players[playerIndex].sprite.fps, true);
    player.animations.add("up", jsonData.players[playerIndex].sprite.frames.up, jsonData.players[playerIndex].sprite.fps, true);
    game.camera.follow(player);
}

function createNpcsAtField() {
    npcs = [];
    talkNpcIndex = null;
    for (var i = 0; i < jsonNpcs.length; i++) {
        if(existsAtMisc(jsonData.state.npcsPosMoves[jsonNpcs[i].id])){
            jsonNpcs[i].pos.x = jsonData.state.npcsPosMoves[jsonNpcs[i].id].x;
            jsonNpcs[i].pos.y = jsonData.state.npcsPosMoves[jsonNpcs[i].id].y;
        }
        npc = addSpriteAtMisc(jsonNpcs[i]);
        npc.anchor.set(0.5);
        game.physics.enable(npc);
        npc.body.immovable = true;
        npc.body.collideWorldBounds = true;
        npcs.push(npc);
    }
}

///////////////////////////////////////////////////////////////////////////////
// update

function subUpdateAtField() {
    game.physics.arcade.collide(player, collisionLayer);
    if(jsonData.state.updateButtons){
      updateButtonsAtMisc();
    }
    updatePlayerAtField();
    if(jsonData.state.updateNpcs){
      updateNpcsAtField()
    }
    updateTalkAtField();
    if(jsonData.state.updateMenu){
      updateMenuAtField();
    }
    updateEventsAtField();
}

function updatePlayerAtField() {
    if (jsonData.state.stop) {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        player.animations.stop();
    } else {
        if (buttonDownIsDownOrAtMisc()) {
            player.body.velocity.x = 0;
            player.body.velocity.y = jsonData.state.velocity;
            player.animations.play("down");
        } else if (buttonLeftIsDownOrAtMisc()) {
            player.body.velocity.y = 0;
            player.body.velocity.x = -jsonData.state.velocity;
            player.animations.play("left");
        } else if (buttonRightIsDownOrAtMisc()) {
            player.body.velocity.y = 0;
            player.body.velocity.x = jsonData.state.velocity;
            player.animations.play("right");
        } else if (buttonUpIsDownOrAtMisc()) {
            player.body.velocity.x = 0;
            player.body.velocity.y = -jsonData.state.velocity;
            player.animations.play("up");
        } else {
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            player.animations.stop();
        }
    }
}

function startTalkAtField(names, contents, charDelays, lineDelays, destructor){
  jsonTalk.talk.names = names;
  jsonTalk.talk.contents = contents;
  if(existsAtMisc(charDelays)){
    jsonTalk.talk.charDelays = charDelays;
  } else{
    jsonTalk.talk.charDelays = null;
  }
  if(existsAtMisc(lineDelays)){
    jsonTalk.talk.lineDelays = lineDelays;
  } else{
    jsonTalk.talk.lineDelays = null;
  }
  if(existsAtMisc(destructor)){
    jsonTalk.talk.destructor = destructor;
  } else{
    jsonTalk.talk.destructor = null;
  }
  jsonTalk.talk.update.flag = true;
  jsonData.state.stop = true;
  createBalloonAtMisc(jsonTalk.talk.balloon, game.camera);
  jsonTalk.talk.caret.controller = addSpriteAtMisc(jsonTalk.talk.caret, game.camera);
  jsonTalk.talk.caret.controller.animations.play("invisible");
  jsonTalk.talk.page = 0;
  if ((typeof jsonTalk.talk.contents[jsonTalk.talk.page]) === "object") {
      showTalkContentsAtField();
  } else if ((typeof jsonTalk.talk.contents[jsonTalk.talk.page]) === "string") {
      func[jsonTalk.talk.contents[jsonTalk.talk.page]]();
  }
}

function startNpcTalkAtField(i) {
    var names;
    var contents = JSON.parse(JSON.stringify(jsonNpcs[i].talks[jsonNpcs[i].talkPatternIndex].contents));
    var charDelays = JSON.parse(JSON.stringify(jsonNpcs[i].talks[jsonNpcs[i].talkPatternIndex].charDelays));
    var lineDelays = JSON.parse(JSON.stringify(jsonNpcs[i].talks[jsonNpcs[i].talkPatternIndex].lineDelays));
    if(existsAtMisc(jsonNpcs[i].talks[jsonNpcs[i].talkPatternIndex].names)){
      names = JSON.parse(JSON.stringify(jsonNpcs[i].talks[jsonNpcs[i].talkPatternIndex].names));
    } else{
      names = [JSON.parse(JSON.stringify(jsonNpcs[i].name))];
    }
    talkNpcIndex = i;
    startTalkAtField(names, contents, charDelays, lineDelays);
}

function updateNpcsAtField() {
  var playerIndex=0;
    for (var i = 0; i < npcs.length; i++) {
        game.physics.arcade.collide(player, npcs[i]);
        if ((jsonField.mainMenu.update.flag == false) && (jsonTalk.talk.update.flag == false)) {
            distanceX = (player.world.x - npcs[i].world.x);
            distanceY = (player.world.y - npcs[i].world.y);
            distanceBetweenPlayerAndNpc = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            if (distanceBetweenPlayerAndNpc < jsonNpcs[i].effectiveRange) {
                if (button2PushedAtMisc()) {
                    npcs[i].animations.stop();
                    if (Math.abs(distanceX) < Math.abs(distanceY)) {
                        if (distanceY > 0) {
                            npcs[i].frame = jsonNpcs[i].sprite.frames.down[0];
                            player.frame = jsonData.players[playerIndex].sprite.frames.up[0];
                        } else {
                            npcs[i].frame = jsonNpcs[i].sprite.frames.up[0];
                            player.frame = jsonData.players[playerIndex].sprite.frames.down[0];
                        }
                    } else {
                        if (distanceX < 0) {
                            npcs[i].frame = jsonNpcs[i].sprite.frames.left[0];
                            player.frame = jsonData.players[playerIndex].sprite.frames.right[0];
                        } else {
                            npcs[i].frame = jsonNpcs[i].sprite.frames.right[0];
                            player.frame = jsonData.players[playerIndex].sprite.frames.left[0];
                        }
                    }
                    startNpcTalkAtField(i);
                }
            }
        }
        if ( talkNpcIndex != i ) {
            npcs[i].animations.play("down"); // ???? //
        }
    }
}

function showTalkContentsAtField(lineDelays, charDelays, fontInfos) {
    var posX = jsonTalk.talk.balloon.pos.x + jsonTalk.talk.margin.x;
    var posY = jsonTalk.talk.balloon.pos.y + jsonTalk.talk.margin.y;
    var moves = [{
        x: 0,
        y: jsonTalk.talk.lineHeight
    }];
    var fontInfos;
    var name;
    if (!existsAtMisc(lineDelays)) {
        if ( existsAtMisc(jsonTalk.talk.lineDelays) && existsAtMisc(jsonTalk.talk.lineDelays[jsonTalk.talk.page]) ) {
            lineDelays = jsonTalk.talk.lineDelays[jsonTalk.talk.page];
        } else {
            lineDelays = null;
        }
    }
    if (!existsAtMisc(charDelays)) {
        if ( existsAtMisc(jsonTalk.talk.charDelays)  && existsAtMisc(jsonTalk.talk.charDelays[jsonTalk.talk.page]) ) {
            charDelays = jsonTalk.talk.charDelays[jsonTalk.talk.page];
        } else {
            charDelays = null;
        }
    }
    if (!existsAtMisc(fontInfos)) {
      if (existsAtMisc(jsonTalk.talk.fontInfos) && existsAtMisc(jsonTalk.talk.fontInfos[jsonTalk.talk.page])) {
          fontInfos = jsonTalk.talk.fontInfos[jsonTalk.talk.page];
      } else {
          fontInfos = null;
      }
    }
    if(existsAtMisc(jsonTalk.talk.names[jsonTalk.talk.page])){
      name = jsonTalk.talk.names[jsonTalk.talk.page];
    } else{
      name = jsonTalk.talk.names[0];
    }
    jsonTalk.talk.textLines = {};
    createTextLinesAtMisc(jsonTalk.talk.textLines);
    showNameAndTextLinesAtMisc(jsonTalk.talk.textLines, posX, posY, moves, name, jsonTalk.talk.contents[jsonTalk.talk.page], lineDelays, charDelays, fontInfos, game.camera);
}

function updateTalkAtField() {
    var lines;
    var finalLineController;
    if ((jsonField.mainMenu.update.flag == false) && (jsonTalk.talk.update.flag == true)) {
        if(jsonYesNo.yesNo.update.flag){
            if (existsAtMisc(jsonYesNo.yesNo.update.func)) {
                func[jsonYesNo.yesNo.update.func]();
            }
            updateChoiceBalloonAtMisc(jsonYesNo.yesNo);
        } else if (jsonShopping.subMenu.update.flag) {
            updateChoiceAtMisc(jsonShopping.subMenu.choice, game.camera);
            if (button1PushedAtMisc()) {
                destroyShopAtField();
                if(!showNextTalkAtField()){
                  talkNpcIndex = null;
                }
            }
        } else if(jsonSave.subMenu.update.flag){
            updateChoiceAtMisc(jsonSave.subMenu.choice, game.camera);
            if (button1PushedAtMisc()) {
                destroySubMenuSaveDataAtField();
                if(!showNextTalkAtField()){
                  talkNpcIndex = null;
                }
            }
        } else {
            if((typeof jsonTalk.talk.contents[jsonTalk.talk.page]) === "string"){
              lines = null;
              finalLineController = null;
            } else {
              lines = jsonTalk.talk.contents[jsonTalk.talk.page].length-1;
              finalLineController = jsonTalk.talk.textLines.controllers[lines+1];
            }
            if ((existsAtMisc(finalLineController)) && (jsonTalk.talk.contents[jsonTalk.talk.page][lines].length <= finalLineController.text.length)) {
                jsonTalk.talk.caret.controller.animations.play("blink");
            }
            if (jsonYesNo.yesNo.reply || button2PushedAtMisc()) {
                jsonYesNo.yesNo.reply = false;
                jsonTalk.talk.caret.controller.animations.play("invisible");
                if ((existsAtMisc(finalLineController)) && (jsonTalk.talk.contents[jsonTalk.talk.page][lines].length > finalLineController.text.length)) {
                    destroyTextLinesAtMisc(jsonTalk.talk.textLines);
                    showTalkContentsAtField([jsonTalk.talk.fastReadingDelay], [[jsonTalk.talk.fastReadingDelay]]);
                } else {
                    if(!showNextTalkAtField()){
                      talkNpcIndex = null;
                    }
                }
            }
        }
    }
}

function showNextTalkAtField() {
    jsonTalk.talk.page = jsonTalk.talk.page + 1;
    if (jsonTalk.talk.page < jsonTalk.talk.contents.length) {
        if ((typeof jsonTalk.talk.contents[jsonTalk.talk.page]) === "object") {
            destroyTextLinesAtMisc(jsonTalk.talk.textLines);
            showTalkContentsAtField();
        } else if ((typeof jsonTalk.talk.contents[jsonTalk.talk.page]) === "string") {
            func[jsonTalk.talk.contents[jsonTalk.talk.page]]();
        }
        return true;
    } else {
        destroyTextLinesAtMisc(jsonTalk.talk.textLines);
        jsonTalk.talk.caret.controller.destroy();
        jsonTalk.talk.balloon.controller.destroy();
        jsonTalk.talk.update.flag = false;
        jsonData.state.stop = false;
        if(existsAtMisc(jsonTalk.talk.destructor)){
          func[jsonTalk.talk.destructor]();
        }
        return false;
    }
}

function clearYesNoAtField() {
    clearYesNoAtMisc();
}

function createShopAtField(itemsHashTable) {
  var posX;
  var posY;
  var text;
  var fontInfo;
  createBalloonAtMisc(jsonShopping.subMenu.balloon, game.camera);
  createBalloonAtMisc(jsonShopping.subsubMenu.balloon, game.camera);
  fontInfo = {size: 20, fill:"#dddddd "};
  posX=160; posY=12; text = jsonShopping.subMenu.info.name;
  clearControllersAtMisc(jsonShopping.subMenu);
  jsonShopping.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonShopping.subMenu.balloon, text, fontInfo));
  posX=352; posY=12; text = jsonShopping.subMenu.info.price;
  jsonShopping.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonShopping.subMenu.balloon, text, fontInfo));
  createItemChoiceAtMisc(jsonShopping.subMenu, itemsHashTable, "tradeItemsAtField");
  fontInfo = {size: 20, fill:"#ffffff"};
  i = 0;
  for (var key in itemsHashTable) {
      posX = jsonShopping.subMenu.balloon.width - 64;
      posY = jsonShopping.subMenu.choice.margin.y + jsonShopping.subMenu.choice.padding.y + jsonShopping.subMenu.choice.highlight.move.y*i;
      text = jsonItems[key].price;
      jsonShopping.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonShopping.subMenu.balloon, text, fontInfo));
      i = i + 1;
  }
  fontInfo = {size: 20, fill:"#ffff88"};
  posX=16; posY=20; text = textMoneyAtMisc();
  clearControllersAtMisc(jsonShopping.subsubMenu);
  jsonShopping.subsubMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonShopping.subsubMenu.balloon, text, fontInfo));
  jsonShopping.subMenu.update.flag = true;
  jsonShopping.subMenu.update.func = false;
  jsonShopping.subMenu.choice.highlight.stop = false;
}

function destroyShopAtField() {
  destroyControllersAtMisc(jsonShopping.subsubMenu);
  destroyControllersAtMisc(jsonShopping.subMenu);
  destroyChoiceAtMisc(jsonShopping.subMenu.choice);
  destroyBalloonAtMisc(jsonShopping.subsubMenu.balloon);
  destroyBalloonAtMisc(jsonShopping.subMenu.balloon);
  jsonShopping.subMenu.update.flag = false;
  jsonShopping.subMenu.update.func = null;
}

function updateMenuAtField() {
    if (!jsonTalk.talk.update.flag) {
        if (jsonField.subMenu.update.flag) {
            if (existsAtMisc(jsonField.subMenu.update.func)) {
                func[jsonField.subMenu.update.func]();
            }
            if (button1PushedAtMisc()) {
                soundEffectSelectAtMisc();
                jsonField.subMenu.update.flag = false;
                if(existsAtMisc(jsonField.subMenu.choice.options[jsonField.subMenu.choice.highlight.index])){
                  if(existsAtMisc(jsonField.subMenu.choice.options[jsonField.subMenu.choice.highlight.index].highlightController)){
                    jsonField.subMenu.choice.options[jsonField.subMenu.choice.highlight.index].highlightController.animations.play("invisible");
                  }
                }
                jsonField.mainMenu.choice.highlight.stop = false;
            }
        } else if (jsonField.mainMenu.update.flag) {
            updateChoiceAtMisc(jsonField.mainMenu.choice, game.camera);
            if (button1PushedAtMisc()) {
                jsonField.mainMenu.update.flag = false;
                destroyMenuAtField();
                jsonData.state.stop = false;
            }
        } else {
            if (button1PushedAtMisc()) {
                jsonData.state.stop = true;
                showMenuAtField();
            }
        }
    }
}

function showMenuAtField() {
    soundEffectSelectAtMisc();
    jsonField.mainMenu.update.flag = true;
    jsonField.mainMenu.choice.highlight.stop = false;
    clearControllersAtMisc(jsonField.subMenu);
    createChoiceBalloonAtMisc(jsonField.mainMenu, game.camera);
    createBalloonAtMisc(jsonField.subMenu.balloon, game.camera);
}

function destroyMenuAtField() {
    soundEffectSelectAtMisc();
    destroyControllersAtMisc(jsonField.subMenu);
    destroyChoiceAtMisc(jsonField.subMenu.choice);
    destroyBalloonAtMisc(jsonField.subMenu.balloon);
    destroyChoiceBalloonAtMisc(jsonField.mainMenu);
    jsonField.subMenu.update.flag = false;
    jsonField.subMenu.update.func = null;
    jsonField.mainMenu.update.flag = false;
    jsonField.mainMenu.update.func = null;
}

function initSubMenuAtField(updateFunc){
  jsonField.mainMenu.choice.highlight.stop = true;
  updateChoiceAtMisc(jsonField.mainMenu.choice, game.camera);
  jsonField.subMenu.update.flag = true;
  jsonField.subMenu.update.func = updateFunc;
  clearChoiceAtMisc(jsonField.subMenu.choice);
  clearControllersAtMisc(jsonField.subMenu);
}

function createSubMenuSaveDataAtField(){
  var text;
  jsonSave.subMenu.choice.options = [];
  for (var i = 0; i < 8; i++) {
    jsonSave.subMenu.choice.options[i] = {"label":{"alpha":1}};
    if(existsAtMisc(savedData["data_" + (i+1)])){
      text = jsonSave.saveDataText + " (" + (i+1) + ")      " + (JSON.parse(savedData.getItem("data_" + (i+1)))).state.date;
    } else{
      text = jsonSave.saveDataText + " (" + (i+1) + ")      ";
    }
    jsonSave.subMenu.choice.options[i].label.text = text;
    jsonSave.subMenu.choice.options[i].func = "saveDataAndRefreshMenuAtField";
    jsonSave.subMenu.choice.options[i].args = {"index":i, "name": "data_" + (i+1)};
  }
  createChoiceBalloonAtMisc(jsonSave.subMenu, game.camera);
  jsonSave.subMenu.update.flag = true;
  jsonSave.subMenu.update.func = null;
}

function destroySubMenuSaveDataAtField(){
  destroyChoiceBalloonAtMisc(jsonSave.subMenu);
  jsonSave.subMenu.update.flag = false;
  jsonSave.subMenu.update.func = null;
}

function setBattleArgsAtField(stateId, monsterId, matrixId, npcId, npcPosMoveX, npcPosMoveY, destructor){
  if(!existsAtMisc(npcId)){
    npcId = null;
  }
  if(!existsAtMisc(npcPosMoveX)){
    npcPosMoveX = null;
  }
  if(!existsAtMisc(npcPosMoveY)){
    npcPosMoveY = null;
  }
  if(!existsAtMisc(destructor)){
    destructor = null;
  }
  return {"stateId": stateId, "monsterId": monsterId, "matrixId": matrixId, "npcId": npcId, "npcPosMoveX": npcPosMoveX, "npcPosMoveY": npcPosMoveY, "destructor": destructor};
}

function battleYesNoAtField(args){
  jsonYesNo.yesNo.choice.options[0].func = "battleOkAtField";
  jsonYesNo.yesNo.choice.options[0].args = args;
  jsonYesNo.yesNo.choice.options[1].func = "battleNgAtField";
  jsonYesNo.yesNo.choice.options[1].args = null;
  jsonYesNo.yesNo.choice.highlight.initIndex = 1;
  createChoiceBalloonAtMisc(jsonYesNo.yesNo, game.camera);
  jsonYesNo.yesNo.update.flag = true;
};

function setBattleStateAtField(args){
  jsonBattle.battleState.stateId = args.stateId;
  jsonBattle.battleState.monsterId = args.monsterId;
  jsonBattle.battleState.matrixId = args.matrixId;
  if(existsAtMisc(args.npcId)){
    jsonBattle.battleState.npcId = args.npcId;
  } else{
    jsonBattle.battleState.npcId = null;
  }
  if(existsAtMisc(args.npcPosMoveX)){
    jsonBattle.battleState.npcPosMoveX = args.npcPosMoveX;
  } else{
    jsonBattle.battleState.npcPosMoveX = null;
  }
  if(existsAtMisc(args.npcPosMoveY)){
    jsonBattle.battleState.npcPosMoveY = args.npcPosMoveY;
  } else{
    jsonBattle.battleState.npcPosMoveY = null;
  }
  if(existsAtMisc(args.destructor)){
    jsonBattle.battleState.destructor = args.destructor;
  } else{
    jsonBattle.battleState.destructor = null;
  }
}

function battleOkAtField(args){
  changeBackgroundMusicFlag = true;
  jsonData.state.stop = true;
  setStatePosAtMisc(player.world.x, player.world.y);
  setBattleStateAtField(args);
  clearYesNoAtField();
  jsonYesNo.yesNo.reply = true;
  changeStateAtMisc(args.stateId);
}

function battleNgAtField(){
  clearYesNoAtField();
  jsonYesNo.yesNo.reply = true;
  updateTalkAtField();
}

function openTreasureBoxAtField(i){
  var text;
    if( !(jsonData.state.openedBoxes[eventTriggerNames[i]]) && (existsAtMisc(eventTriggerJsonArgs[i].item)) ){
      if(button2PushedAtMisc()){
        eventsUpdateFlag = false;
        eventTriggerSprites[i].frame = 1;
        jsonData.state.openedBoxes[eventTriggerNames[i]] = true;
        text = jsonWorld.getText1 + jsonItems[eventTriggerJsonArgs[i].item].name + jsonWorld.getText2;
        startTalkAtField([jsonData.players[0].name], [[text]], null, null, "destructorFlagsTrueAtField");
        getItemsAtMisc(eventTriggerJsonArgs[i].item);
      }
    } else if( !(jsonData.state.openedBoxes[eventTriggerNames[i]]) && (existsAtMisc(eventTriggerJsonArgs[i].money)) ){
      if(button2PushedAtMisc()){
        eventsUpdateFlag = false;
        eventTriggerSprites[i].frame = 1;
        jsonData.state.openedBoxes[eventTriggerNames[i]] = true;
        text = eventTriggerJsonArgs[i].money + jsonWorld.getMoneyText;
        startTalkAtField([jsonData.players[0].name], [[text]], null, null, "destructorFlagsTrueAtField");
        getMoneyAtMisc(eventTriggerJsonArgs[i].money);
      }
    } else{
      eventsUpdateFlag = true;
    }
}

function updateEventsAtField() {
  if(eventsUpdateFlag){
    for (var i = 0; i < eventTriggerSprites.length; i++) {
        if (checkOverlapAtMisc(player, eventTriggerSprites[i])) {
            if(existsAtMisc(eventTriggerFuncs[i]) && eventTriggerFlags[i]){
              eventTriggerFlags[i] = false;
              if(existsAtMisc(eventTriggerJsonArgs[i])){
                func[eventTriggerFuncs[i]](eventTriggerJsonArgs[i]);
                break;
              } else{
                func[eventTriggerFuncs[i]]();
                break;
              }
            }
            if (eventTriggerTypes[i]=="treasureBox") {
                openTreasureBoxAtField(i);
                break;
            } else if ((eventTriggerTypes[i] == "game.state.start") || (eventTriggerTypes[i] == "game.state.start.music.continue")) {
                changeBackgroundMusicFlag = false;
                jsonData.state.stop = true;
                jsonData.state.pos.x = eventTriggerJsonArgs[i].pos.x;
                jsonData.state.pos.y = eventTriggerJsonArgs[i].pos.y;
                changeStateAtMisc(eventTriggerNames[i]);
                break;
            } else if (eventTriggerTypes[i] == "game.state.start.music.change") {
                changeBackgroundMusicFlag = true;
                jsonData.state.stop = true;
                jsonData.state.pos.x = eventTriggerJsonArgs[i].pos.x;
                jsonData.state.pos.y = eventTriggerJsonArgs[i].pos.y;
                changeStateAtMisc(eventTriggerNames[i]);
                break;
            }
        } else{
          eventTriggerFlags[i] = true;
        }
    }
  }
}
