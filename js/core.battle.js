///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// preload @ Battle

function subPreloadAtBattle() {
  jsonBattle.bottomLeft.choice.highlight.stop = false;
  jsonBattle.bottomLeft.update.flag = true;
  jsonMath.update.flag = false;
  jsonBattle.subMenu.update.flag = false;
  jsonBattle.subMenu.update.func = null;
  jsonBattle.battleState.firstEndFlag = true;
  for (var i = 0; i < jsonMonsters.length; i++) {
    loadSpritesheetAtMisc(jsonMonsters[i]);
  }
}

///////////////////////////////////////////////////////////////////////////////
// create @ Battle

function subCreateAtBattle(audioUri) {
  // game.physics.startSystem(Phaser.Physics.ARCADE);
  createChoiceBalloonAtMisc(jsonBattle.bottomLeft, game.camera);
  createBalloonAtMisc(jsonBattle.bottomRight.balloon, game.camera);
  createBalloonAtMisc(jsonMath.blackboard.balloon, game.camera);
  createBalloonAtMisc(jsonMath.holder.balloon, game.camera);
  createMathAtBattle();
  createPlayersAtBattle();
  createEnemiesAtBattle();
  createBottomRightStatusAtBattle();
  createVirtualButtonsAtMisc();
  controlBackgroundMusicAtMisc(audioUri);
}

function createMathAtBattle() {
    addTextAtMisc(jsonMatrices[jsonBattle.battleState.matrixId].message, game.camera);
    showMatrixAtMisc(jsonMatrices[jsonBattle.battleState.matrixId].pos.x, jsonMatrices[jsonBattle.battleState.matrixId].pos.y, jsonMatrices[jsonBattle.battleState.matrixId].mathexp);
}

function createPlayersAtBattle() {
  var playerIndex = 0;
  player = addSpriteAtMisc(jsonData.players[playerIndex]);
  player.anchor.set(0.5);
  player.frame = jsonData.players[playerIndex].sprite.frames.right[0];
}

function createEnemiesAtBattle() {
    jsonEnemies = [];
    jsonEnemies.push(JSON.parse(JSON.stringify(jsonMonsters[jsonBattle.battleState.monsterId])));
    jsonEnemies[0].pos = {
        "x": jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].x + 16,
        "y": jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].y - 16
    };
    jsonEnemies[0].controller = addSpriteAtMisc(jsonEnemies[0]);
    jsonEnemies[0].controller.anchor.set(0.5);
}

function createBottomRightStatusAtBattle() {
    var text;
    var fontInfo;
    clearControllersAtMisc(jsonBattle.bottomRight);
    fontInfo = {
        size: 20,
        fill: "#ffffff"
    };
    posX = 16;
    posY = 16;
    text = jsonData.players[0].name;
    jsonBattle.bottomRight.controllers.push(addTextInBalloonAtMisc({
        pos: {
            x: posX,
            y: posY
        }
    }, jsonBattle.bottomRight.balloon, text, fontInfo));
    fontInfo = {
        size: 16,
        fill: "#ffffff"
    };
    posX = posX + 16;
    posY = posY + 24;
    text = "HP : " + jsonData.players[0].hp + " / " + jsonData.players[0].hpMax;
    jsonBattle.bottomRight.controllers.push(addTextInBalloonAtMisc({
        pos: {
            x: posX,
            y: posY
        }
    }, jsonBattle.bottomRight.balloon, text, fontInfo));
    posX = posX;
    posY = posY + 20;
    text = "MP : " + jsonData.players[0].mp + " / " + jsonData.players[0].mpMax;
    jsonBattle.bottomRight.controllers.push(addTextInBalloonAtMisc({
        pos: {
            x: posX,
            y: posY
        }
    }, jsonBattle.bottomRight.balloon, text, fontInfo));
}

///////////////////////////////////////////////////////////////////////////////
// update @ Battle

function subUpdateAtBattle() {
  updateButtonsAtMisc();
  updateMenuAtBattle();
  updateMathAtBattle();
}

function updateMenuAtBattle() {
    if(jsonBattle.subMenu.update.flag){
      if(existsAtMisc(jsonBattle.subMenu.update.func)){
        func[jsonBattle.subMenu.update.func]();
      }
      if (button1PushedAtMisc()) {
        soundEffectSelectAtMisc();
        destroyControllersAtMisc(jsonBattle.subMenu);
        destroyChoiceAtMisc(jsonBattle.subMenu.choice);
        destroyBalloonAtMisc(jsonBattle.subMenu.balloon);
        jsonBattle.subMenu.update.flag = false;
        jsonBattle.subMenu.update.func = null;
        jsonBattle.bottomLeft.choice.highlight.stop = false;
        jsonBattle.bottomLeft.update.flag = true;
      }
    } else if (jsonMath.update.flag) {
      if (button1PushedAtMisc()) {
          soundEffectSelectAtMisc();
          jsonMath.update.flag = false;
          jsonBattle.bottomLeft.choice.highlight.stop = false;
          jsonBattle.bottomLeft.update.flag = true;
      }
    } else if (jsonBattle.bottomLeft.update.flag) {
        updateChoiceAtMisc(jsonBattle.bottomLeft.choice, game.camera);
    }
}

function updateMathAtBattle() {
    var text;
    var tween;
    text = jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].text;
    if (jsonMath.update.flag) {
        jsonBattle.bottomLeft.update.flag = false;
        jsonBattle.bottomLeft.choice.highlight.stop = true;
        updateChoiceAtMisc(jsonBattle.bottomLeft.choice, game.camera);
        jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("blink");
        if (buttonUpPushedAtMisc()) {
            soundEffects["assets/audio/sound_select.mp3"].play();
            if (text == "??") {
                jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].text = 0;
            } else {
                if ((Number(text) + 1) < maxNum) {
                    jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].text = Number(text) + 1;
                }
            }
        } else if (buttonDownPushedAtMisc()) {
            soundEffects["assets/audio/sound_select.mp3"].play();
            if (text == "??") {
                jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].text = 0;
            } else {
                if ((Number(text) - 1) > minNum) {
                    jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].text = Number(text) - 1;
                }
            }
        } else if (button1PushedAtMisc()) {
            jsonMath.update.flag = false;
            // jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("invisible");
            jsonBattle.bottomLeft.update.flag = true;
            jsonBattle.bottomLeft.choice.highlight.stop = false;
            updateChoiceAtMisc(jsonBattle.bottomLeft.choice, game.camera);
        } else if (button2PushedAtMisc()) {
            jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("invisible");
            if (text == jsonMatrices[jsonBattle.battleState.matrixId].prob[Object.keys(jsonMath.highlightControllers)[jsonMath.index]]) {
                soundEffects["assets/audio/sound_ok.mp3"].play();
                attackOkAtBattle();
                jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].addColor("#ffffff", 0);
                if ((jsonMath.index + 1) < (Object.keys(jsonMath.highlightControllers)).length) {
                    jsonMath.index = jsonMath.index + 1;
                    jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].addColor("#ffff88", 0);
                    tween = game.add.tween(jsonEnemies[0].controller);
                    tween.to({
                        x: jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].x + 16,
                        y: jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].y - 16
                    }, 250, "Linear", true, 1500);
                }
            } else {
                soundEffects["assets/audio/sound_ng.mp3"].play();
                attackNgAtBattle();
            }
            // jsonMath.update.flag = false;
            // jsonBattle.bottomLeft.update.flag = true;
            // jsonBattle.bottomLeft.choice.highlight.stop = false;
            // updateChoiceAtMisc(jsonBattle.bottomLeft.choice, game.camera);
        }
    } else{
      jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("invisible");
    }
}

function attackCalcAtBattle(hashTableAtk, hashTableDef) {
    return Math.max(0, Math.floor( (1 + (1+0.5*Math.random())*hashTableAtk.atk)/(1 + hashTableDef.def/50) ) );
}

function attackOkAtBattle() {
    var okSprite;
    var okTween;
    jsonMath.ok.pos.x = jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].x;
    jsonMath.ok.pos.y = jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].y;
    okSprite = addSpriteAtMisc(jsonMath.ok, game.camera);
    okTween = game.add.tween(okSprite);
    okTween.to({alpha: 0}, 300, "Linear", true, 300);
    jsonMath.chalk.pos = {
        "x": player.x,
        "y": player.y
    };
    okTween.onComplete.add(function() {attackChalkAtBattle();}, this);
}

function attackChalkAtBattle(){
  var attackSprite;
  var attackTween;
  var damage;
  soundEffects["assets/audio/sound_chalk.mp3"].play();
  attackSprite = addSpriteAtMisc(jsonMath.chalk, game.camera);
  attackSprite.anchor.set(0, 0.5);
  attackTween = game.add.tween(attackSprite);
  attackTween.to({
      x: jsonEnemies[0].controller.x,
      y: jsonEnemies[0].controller.y
  }, 250, "Linear", true, 200);
  attackTween = game.add.tween(attackSprite);
  attackTween.to({alpha: 0}, 100, "Linear", true, 450);
  damage = attackCalcAtBattle(jsonData.players[0], jsonEnemies[0]);
  jsonEnemies[0].hp = jsonEnemies[0].hp - damage;
  if (jsonEnemies[0].hp < 1) {
      jsonBattle.bottomLeft.update.flag = false;
      jsonMath.update.flag = false;
      jsonBattle.subMenu.update.flag = false;
  }
  attackTween.onComplete.add(function() {
      soundEffects["assets/audio/sound_hit.mp3"].play();
      triumphAtBattle();
      // jsonMath.update.flag = false;
      // jsonBattle.bottomLeft.update.flag = true;
      // jsonBattle.bottomLeft.choice.highlight.stop = false;
  }, this);
}

function attackNgAtBattle() {
  var ngSprite;
  var ngTween;
  jsonMath.ng.pos.x = jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].x;
  jsonMath.ng.pos.y = jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].y;
  ngSprite = addSpriteAtMisc(jsonMath.ng, game.camera);
  ngTween = game.add.tween(ngSprite);
  ngTween.to({alpha: 0}, 300, "Linear", true, 300);
  jsonMath.chalk.pos = {
      "x": player.x,
      "y": player.y
  };
  ngTween.onComplete.add(function() {attackEraserAtBattle();}, this);
};

function attackEraserAtBattle(){
  var attackSprite;
  var attackTween;
  soundEffects["assets/audio/sound_eraser.mp3"].play();
  jsonMath.eraser.pos = {
      "x": jsonEnemies[0].controller.x,
      "y": jsonEnemies[0].controller.y
  };
  attackSprite = addSpriteAtMisc(jsonMath.eraser, game.camera);
  attackSprite.anchor.set(0, 0.5);
  attackTween = game.add.tween(attackSprite);
  attackTween.to({
      x: player.x,
      y: player.y
  }, 250, "Linear", true, 200);
  attackTween = game.add.tween(attackSprite);
  attackTween.to({
      alpha: 0
  }, 100, "Linear", true, 450);
  jsonData.players[0].hp = Math.max(0, jsonData.players[0].hp - attackCalcAtBattle(jsonEnemies[0], jsonData.players[0]) );
  if (jsonData.players[0].hp < 1) {
      jsonBattle.bottomLeft.update.flag = false;
      jsonMath.update.flag = false;
      jsonBattle.subMenu.update.flag = false;
  }
  attackTween.onComplete.add(function() {
      soundEffects["assets/audio/sound_hit.mp3"].play();
      createBottomRightStatusAtBattle();
      if (jsonData.players[0].hp < 1) {
          gameoverAtBattle();
      }
      // jsonMath.update.flag = false;
      // jsonBattle.bottomLeft.update.flag = true;
      // jsonBattle.bottomLeft.choice.highlight.stop = false;
  }, this);
}

function initSubMenuAtBattle(updateFunc){
  jsonMath.update.flag = false;
  jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("invisible");
  jsonBattle.bottomLeft.update.flag = false;
  jsonBattle.bottomLeft.choice.highlight.stop = true;
  updateChoiceBalloonAtMisc(jsonBattle.bottomLeft, game.camera);
  jsonBattle.subMenu.update.flag = true;
  jsonBattle.subMenu.update.func = updateFunc;
  clearChoiceAtMisc(jsonBattle.subMenu.choice);
  clearControllersAtMisc(jsonBattle.subMenu);
}

function createSubMenuItemsChoiceAtBattle() {
    var text;
    var fontInfo;
    var hBalloon;
    initSubMenuAtBattle("updateSubMenuItemsAtBattle");
    if(Object.keys(jsonData.state.items).length > 0){
        arrangeItemsAtMisc();
        createItemChoiceAtMisc(jsonBattle.subMenu, jsonData.state.items, "useItemsAtBattle");
        fontInfo = {size: 20, fill:"#ffffff"};
        i = 0;
        for (var key in jsonData.state.items) {
            posX = jsonBattle.subMenu.balloon.width - 64;
            posY = jsonBattle.subMenu.choice.margin.y + jsonBattle.subMenu.choice.padding.y + jsonBattle.subMenu.choice.highlight.move.y*i;
            text = "x " + jsonData.state.items[key].num;
            jsonBattle.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonBattle.subMenu.balloon, text, fontInfo));
            i = i + 1;
        }
    } else{
        // jsonBattle.subMenu.update.flag = false;
        // jsonBattle.bottomLeft.choice.highlight.stop = false;
    }
}

function triumphAtBattle(){
  var enemyTween;
  var hashTable = {
      "pos": {
          "x": 48,
          "y": 284
      },
      "text": "",
      "fontInfo": {"size":20, "fill":"#ffff00"},
      "alpha": 1
  };
  if (jsonEnemies[0].hp < 1 && jsonBattle.battleState.firstEndFlag) {
      jsonBattle.battleState.firstEndFlag = false;
      jsonData.players[0].exp = jsonData.players[0].exp + jsonEnemies[0].exp;
      getMoneyAtMisc(jsonEnemies[0].money);
      enemyTween = game.add.tween(jsonEnemies[0].controller);
      enemyTween.to({alpha: 0}, 200, "Linear", true, 0);
      hashTable.text = String(jsonEnemies[0].exp) + jsonWorld.getExpText1;
      addTextAtMisc(hashTable, game.camera);
      hashTable.pos.y = hashTable.pos.y + 28
      hashTable.text = jsonWorld.getExpText2;
      addTextAtMisc(hashTable, game.camera);
      hashTable.pos.y = hashTable.pos.y + 32
      hashTable.text = String(jsonEnemies[0].money) + jsonWorld.getMoneyText;
      addTextAtMisc(hashTable, game.camera);
      pushPosMoveAtBattle();
      if(existsAtMisc(jsonBattle.battleState.destructor)){
        func[jsonBattle.battleState.destructor]();
      }
      game.time.events.add(Phaser.Timer.SECOND * 2, function(){escapeAtBattle();}, this);
  }
}

function pushPosMoveAtBattle(){
    if(existsAtMisc(jsonBattle.battleState.npcId)){
      jsonData.state.npcsPosMoves[jsonBattle.battleState.npcId] = {"x": jsonBattle.battleState.npcPosMoveX, "y": jsonBattle.battleState.npcPosMoveY};
    }
}

function escapeAtBattle(args) {
    jsonMath.update.flag = false;
    jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("invisible");
    jsonBattle.bottomLeft.update.flag = true;
    jsonBattle.bottomLeft.choice.highlight.stop = false;
    changeBackgroundMusicFlag = true;
    if(existsAtMisc(args)){
          changeStateAtMisc(args);
    } else{
          changeStateAtMisc(jsonData.state.id);
    }
}

function gameoverAtBattle() {
    var hashTable = {
        "pos": {
            "x": 128,
            "y": 288
        },
        "text": "",
        "fontInfo": {"size":32, "fill":"#ffdddd"},
        "alpha": 1
    };
    hashTable.text = jsonWorld.gameOverText;
    game.time.events.add(Phaser.Timer.SECOND * 1, function(){addTextAtMisc(hashTable, game.camera);}, this);
    changeBackgroundMusicFlag = true;
    backgroundMusics[currentBackGroundMusicUri].stop();
    game.time.events.add(Phaser.Timer.SECOND * 4, function(){changeStateAtMisc("load_start");}, this);
}
