////////////////////////////////////////////////////////////////////////////////
// tweets, events

func.destructorFlagsTrueAtField = function(){
   flagsTrueAtField();
};

func.momoTweetMap1No1AtField = function(){
  flagsFalseAtField();
  jsonData.state.updateButtons = true;
  startTalkAtField(["モモピー"], [["いつ見てもきれいな広場だなあ。"]], null, null, "destructorFlagsTrueAtField");
};

func.profOni1Scene2Map3F2Event1AtField = function(){
    var profOniTween;
    var playerTween;
    flagsFalseAtField();
    player.animations.play("right");
    profOniTween = game.add.tween(jsonGuests.profOni.controller);
    profOniTween.to({
        x: 176,
        y: 112
    }, 5000, "Linear", true, 1000);
    playerTween = game.add.tween(player);
    playerTween.to({
        x: 144,
        y: 304
    }, 1000, "Linear", true, 2000);
    profOniTween.onComplete.add(function() {
        jsonGuests.profOni.controller.animations.play("left");
        player.animations.play("up");
        jsonData.state.updateButtons = true;
        startTalkAtField(["オニキョージュ"], [["…こんなところに落ちていたのか。"]], null, null, "profOni2Scene2Map3F2Event1AtField");
    }, this);
}
func.profOni2Scene2Map3F2Event1AtField = function(){
    var profOniTween;
    var sotugyoTween;
    flagsFalseAtField();
    sotugyoTween = game.add.tween(jsonMath.sotugyo.controller);
    sotugyoTween.to({alpha: 0}, 100, "Linear", true, 100);
    sotugyoTween.repeat(10, 100);
    profOniTween = game.add.tween(jsonGuests.profOni.controller);
    profOniTween.to({alpha: 0}, 100, "Linear", true, 100);
    profOniTween.repeat(10, 100);
    profOniTween.onComplete.add(
        function() {
            jsonData.state.updateButtons = true;
            startTalkAtField(["簡単なモンスターのボス"], [["ソトゥギョーの書は持っていかれちゃっ", "たね。でも、奥の宝箱にいいものが入っ", "ているから持って行ってね。"], ["戦って疲れてそうだから、とりあえず", "フォンカーン村に帰ったらどう？"]], null, [[0.8, 0.1, 0.1, 0.1]], "destructorFlagsTrueAtField");
        }
    )
}

func.momo1Scene2Map4F1Event1AtField = function(){
  var momoTween;
  flagsFalseAtField();
  player.animations.play("down");
  soundEffects["assets/audio/sound_chalk.mp3"].play();
  momoTween = game.add.tween(player);
  momoTween.to({
      x:  656 , y:  352
  }, 1000, "Linear", true, 200);
  momoTween.onComplete.add(function() {
      player.animations.play("up");
      jsonData.state.updateButtons = true;
      startTalkAtField(["モモピー"], [["ギャーーーーー！！"]], null, null, "momo2Scene2Map4F1Event1AtField");
  }, this);
}
func.momo2Scene2Map4F1Event1AtField = function(){
  var momoTween;
  flagsFalseAtField();
  soundEffects["assets/audio/sound_eraser.mp3"].play();
  momoTween = game.add.tween(player);
  momoTween.to({
      x:  656 , y:  416
  }, 1000, "Linear", true, 200);
  momoTween.onComplete.add(function() {
      soundEffects["assets/audio/sound_hit.mp3"].play();
      func["momo3Scene2Map4F1Event1AtField"]();
  }, this);
}
func.momo3Scene2Map4F1Event1AtField = function(){
  var momoTween;
  flagsFalseAtField();
  momoTween = game.add.tween(player);
  momoTween.to({alpha: 0}, 100, "Linear", true, 100);
  momoTween.onComplete.add(function() {
      changeBackgroundMusicFlag = false;
      jsonData.state.pos.x = 528;
      jsonData.state.pos.y = 0;
      game.time.events.add(Phaser.Timer.SECOND * 3, function(){changeStateAtMisc("load_field_Map4F2");}, this);
  }, this);
}
func.momo1Scene2Map4F2Event1AtField = function(){
  var momoTween;
  flagsFalseAtField();
  momoTween = game.add.tween(player);
  momoTween.to({
      x:  720 , y:  496
  }, 3000, "Linear", true, 500);
  momoTween.onComplete.add(function() {
        jsonData.state.updateButtons = true;
        startTalkAtField([null], [
          ["どんぶらこ～"]
        ], [[[0.05]]], [[1.0]], "momo2Scene2Map4F2Event1AtField");
    }, this);
}
func.momo2Scene2Map4F2Event1AtField = function(){
  var momoTween;
  flagsFalseAtField();
  momoTween = game.add.tween(player);
  momoTween.to({
    x:  336 , y:  608
  }, 3000, "Linear", true, 500);
  momoTween.onComplete.add(function() {
        jsonData.state.updateButtons = true;
        startTalkAtField([null], [
          ["どんぶらこ～"]
        ], [[[0.05]]], [[1.0]], "momo3Scene2Map4F2Event1AtField");
    }, this);
}
func.momo3Scene2Map4F2Event1AtField = function(){
  flagsFalseAtField();
  changeBackgroundMusicFlag = true;
  jsonData.state.pos.x = 848;
  jsonData.state.pos.y = 656;
  game.time.events.add(Phaser.Timer.SECOND * 1, function(){changeStateAtMisc("load_field_Map5");}, this);
}

func.profOni1Scene3Map6F2Event1AtField = function(){
    var profOniTween;
    var playerTween;
    flagsFalseAtField();
    player.animations.play("up");
    profOniTween = game.add.tween(jsonGuests.profOni.controller);
    profOniTween.to({
        x:  16 , y:  176
    }, 7000, "Linear", true, 1000);
    playerTween = game.add.tween(player);
    playerTween.to({
        x:  272 , y:  208
    }, 2000, "Linear", true, 2000);
    profOniTween.onComplete.add(function() {
        jsonGuests.profOni.controller.animations.play("left");
        player.animations.play("up");
        jsonData.state.updateButtons = true;
        startTalkAtField(["オニキョージュ"], [["…なかなかいいトンネルだ。"]], null, null, "profOni2Scene3Map6F2Event1AtField");
    }, this);
}
func.profOni2Scene3Map6F2Event1AtField = function(){
    var profOniTween;
    flagsFalseAtField();
    profOniTween = game.add.tween(jsonGuests.profOni.controller);
    profOniTween.to({alpha: 0}, 100, "Linear", true, 100);
    profOniTween.repeat(10, 100);
    profOniTween.onComplete.add(
        function() {
            jsonData.state.updateButtons = true;
            startTalkAtField(["面倒なモンスターのボス"], [["作業してくれていた村人たちは", "村に帰ったみたいだね。"],["そういえば、トンネル工事中に良いもの", "を発掘したんだぞ。", "奥の宝箱に入っているから記念に", "持ってけ。"]], null, [[0.8, 0.1, 0.1, 0.1]], "destructorFlagsTrueAtField");
        }
    )
}

func.info1Scene3Map8Event1AtField = function(){
    jsonData.state.scene = "scene_4";
    jsonData.state.npcsPosMoves["map_7_worker_1"] = {"x":  560 , "y":  1872};
    jsonYesNo.yesNo.reply = true;
}

////////////////////////////////////////////////////////////////////////////////
// talk -> battle

func.battleOkAtField = function (args) {
  battleOkAtField(args);
};
func.battleNgAtField = function () {
  battleNgAtField();
};

func.battleYesNoMap2Monster1AtField = function () {
  var monsterId = 0;
  var matrixId = 0;
  var npcId = "map_2_monster_1";
  var npcPosMoveX = 1600;
  var npcPosMoveY = 3200;
  var destructor = null;
  var args;
  if(existsAtMisc(jsonData.state.npcsPosMoves["map_2_monster_1"])){
      npcPosMoveX = jsonData.state.npcsPosMoves["map_2_monster_1"].x;
      npcPosMoveY = jsonData.state.npcsPosMoves["map_2_monster_1"].y;
  }
  args = setBattleArgsAtField("load_battle_Map2", monsterId, matrixId, npcId, npcPosMoveX, npcPosMoveY, destructor);
  battleYesNoAtField(args);
}

func.yesNoMap3F1Monster1AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map3F1", 1, 0, "map_3-1_monster_1", 688, 496, null));
}
func.yesNoMap3F1Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map3F1", 1, 1, "map_3-1_monster_2", 624, 240, null));
}

func.yesNoMap3F2Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map3F2", 1, 1, "map_3-2_monster_2", 624, 976, null));
}
func.yesNoMap3F2Monster3AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map3F2", 1, 2, "map_3-2_monster_3", 720, 336, null));
}
func.yesNoMap3F2MonsterBossAtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map3F2", 0, 0, "map_3-2_monster_Boss", 240, 304, null));
}
func.yesNoMap3F2MonsterBossScene1AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map3F2", 0, 0, "map_3-2_monster_Boss", 240, 304, "scene1Map3F2LastEventAtField"));
}
func.scene1Map3F2LastEventAtField = function () {
  jsonData.state.scene = "scene_2";
  jsonData.state.eventFlags.Scene2Map3F2Event1 = true;
  jsonData.state.eventFlags.Scene2Map1Event1 = true;
  jsonData.state.npcsPosMoves["map_2_monster_1"] = {"x":  1296 , "y":  2576};
}

func.yesNoMap6F1Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map6F1", 1, 0, "map_6-1_monster_2", 976, 656, null));
}
func.yesNoMap6F1Monster3AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map6F1", 1, 1, "map_6-1_monster_3", 496, 272, null));
}
func.yesNoMap6F2Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map6F2", 1, 1, "map_6-2_monster_2", 976, 816, null));
}
func.yesNoMap6F2Monster3AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map6F2", 1, 2, "map_6-2_monster_3", 944, 272, null));
}
func.yesNoMap6F2MonsterBossAtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map6F2", 0, 0, "map_6-2_monster_Boss", 272, 112, null));
}
func.yesNoMap6F2MonsterBossScene2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map6F2", 0, 0, "map_6-2_monster_Boss", 272, 112, "scene2Map6F2LastEventAtField"));
}
func.scene2Map6F2LastEventAtField = function () {
  jsonData.state.scene = "scene_3";
  jsonData.state.eventFlags.Scene3Map6F2Event1 = true;
  jsonData.state.eventFlags.Scene3Map7Event1 = true;
  jsonData.state.npcsPosMoves["map_2_monster_1"] = {"x":  1456 , "y":  1296};
}

func.yesNoMap7Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map7", 1, 1, "map_7_monster_2", 592, 1456, null));
}
func.yesNoMap7Monster3AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map7", 1, 2, "map_7_monster_3", 240, 1008, null));
}
func.yesNoMap7Monster4AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map7", 1, 3, "map_7_monster_4", 400, 720, null));
}
func.yesNoMap7MonsterBossAtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map7", 0, 0, "map_7_monster_Boss", 528, 464, null));
}
func.yesNoMap7MonsterBossScene4AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map7", 0, 0, "map_7_monster_Boss", 528, 464, "scene4Map7LastEventAtField"));
}
func.scene4Map7LastEventAtField = function () {
  jsonData.state.eventFlags.Scene5Map7Event1 = true;
  jsonData.state.eventFlags.Scene4Map9F1Event1 = true;
}

func.yesNoMap9F1Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map9F1", 1, 0, "map_9-1_monster_2", 848, 304, null));
}
func.yesNoMap9F2Monster2AtField = function () {
  battleYesNoAtField(setBattleArgsAtField("load_battle_Map9F2", 1, 0, "map_9-2_monster_2", 464, 336, null));
}
func.profOni1Scene5Map9F3Event1AtField = function () {
  var profOniTween;
  var gentleMonsterTween;
  showNextTalkAtField();
  flagsFalseAtField();
  gentleMonsterTween = game.add.tween(npcs[0]);
  gentleMonsterTween.to({alpha: 0}, 250, "Linear", true, 250);
  gentleMonsterTween.repeat(4, 250);
  profOniTween = game.add.tween(jsonGuests.profOni.controller);
  profOniTween.to({alpha: 1}, 250, "Linear", true, 250);
  profOniTween.repeat(4, 250);
  profOniTween.onComplete.add(
      function() {
        func["profOni2Scene5Map9F3Event1AtField"]();
      });
}
func.profOni2Scene5Map9F3Event1AtField = function () {
  flagsFalseAtField();
  game.time.events.add(Phaser.Timer.SECOND * 1.5, function(){
    jsonData.state.updateButtons = true;
    startTalkAtField(["オニキョージュ"], [
      ["ソトゥギョーの書がほしいのだろう？"],
      ["ならば、私と戦うしかあるまい。"],
    ], null, null, "battleOkMap9MonsterBossScene5AtField");
  });
}
func.battleOkMap9MonsterBossScene5AtField = function () {
  game.time.events.add(Phaser.Timer.SECOND * 1.5, function(){
    battleOkAtField(setBattleArgsAtField("load_battle_Map9F3", 0, 0, "map_9-3_monster_1", 624, 176, "scene5Map9F3LastEvent1AtField"));
  });
}
func.scene5Map9F3LastEvent1AtField = function () {
  jsonData.state.eventFlags.Scene5Map9F3LastEvent1 = true;
}
func.scene5Map9F3LastEvent2AtField = function () {
  flagsFalseAtField();
  game.time.events.add(Phaser.Timer.SECOND * 1, function(){
    player.animations.play("down");
    npcs[0].animations.play("up");
    jsonData.state.updateButtons = true;
    startTalkAtField(["モモピー", "オニキョージュ", "モモピー", "オニキョージュ", "オニキョージュ", "オニキョージュ", "オニキョージュ", "オニキョージュ", "オニキョージュ", "モモピー", "オニキョージュ"], [
      ["どういうこと？"],
      ["…ソトゥギョーの書は今のおまえでは", "まだ触ることすらできない。"],
      ["そ、そんな～。", "せっかくここまで努力してきたのに～。"],
      ["ソトゥギョーの書を得るためには", "もっと修業を積まねばならぬのだ。"],
      ["すでにおまえはここに来るまでに", "3つのものを手に入れただろう？"],
      ["「レポートの勾玉」", "「シュッセキの鏡」", "「シケンの剣」"],
      ["これらをもっと長い時間を掛けて", "使いこなせるようになれば、", "ソトゥギョーの書を手に入れられる", "ようになるだろう。"],
      ["ただし、それはそう簡単なことではない。"],
      ["モモピー。", "おまえにその覚悟はあるか？"],
      ["ハイ！もちろんです！"],
      ["ならば、これから出す問題をレポート", "として提出するのだ。", "修業はまだ始まったばかりだ。", "これからも気を抜かずに精進するのだ。"]
    ],
    [ [[0.1]], [[0.04]], [[0.03]], [[0.04]], [[0.04]], [[0.06]], [[0.04]], [[0.04]], [[0.04]], [[0.03]], [[0.04]] ],
    [[0.5],[0.5,0.1],[0.5],[0.5,0.1],[0.5,0.1],[0.5],[0.5,0.1,0.1,0.1],[0.5],[0.5,1],[0.5],[0.5,0.1,0.5,0.5]], "scene5Map9F3LastEvent3AtField");
  });
}
func.scene5Map9F3LastEvent3AtField = function () {
  // backgroundMusics[currentBackGroundMusicUri].stop();
  // changeBackgroundMusicFlag = true;
  changeStateAtMisc("load_end");
}


///////////////////////////////////////////////////////////////////////////////
// menu

func.createSubMenuStatusAtField = function() {
    var posX;
    var posY;
    var text;
    var fontInfo;
    initSubMenuAtField("updateSubMenuStatusAtField");
    fontInfo = {size: 24};
    posX=16; posY=16; text = jsonData.players[0].name + " Lv." + jsonData.players[0].level;
    jsonField.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonField.subMenu.balloon, text, fontInfo));
    fontInfo = {size: 20, fill:"#ffffff"};
    posX=posX+16; posY=posY+28; text = "HP : " + jsonData.players[0].hp + " / " + jsonData.players[0].hpMax;
    jsonField.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonField.subMenu.balloon, text, fontInfo));
    posY=posY+24; text = "MP : " + jsonData.players[0].mp + " / " + jsonData.players[0].mpMax;
    jsonField.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonField.subMenu.balloon, text, fontInfo));
    posY=posY+24; text = "EXP : " + jsonData.players[0].exp;
    jsonField.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonField.subMenu.balloon, text, fontInfo));
    fontInfo = {size: 20, fill:"#ffff88"};
    posX=posX-16; posY=posY+192; text = textMoneyAtMisc();
    jsonField.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonField.subMenu.balloon, text, fontInfo));
};

func.miniCreateSubMenuStatusAtField = function() {
  func.createSubMenuStatusAtField();
  jsonField.subMenu.update.flag = false;
  jsonField.mainMenu.choice.highlight.stop = false;
};

func.updateSubMenuStatusAtField = function() {};

func.createSubMenuItemsAtField = function() {
    var text;
    var i;
    initSubMenuAtField("updateSubMenuItemsAtField");
    if(Object.keys(jsonData.state.items).length > 0){
        arrangeItemsAtMisc();
        createItemChoiceAtMisc(jsonField.subMenu, jsonData.state.items, "useItemsAtField");
        fontInfo = {size: 20, fill:"#ffffff"};
        i = 0;
        for (var key in jsonData.state.items) {
            posX = jsonField.subMenu.balloon.width - 64;
            posY = jsonField.subMenu.choice.margin.y + jsonField.subMenu.choice.padding.y + jsonField.subMenu.choice.highlight.move.y*i;
            text = "x " + jsonData.state.items[key].num;
            jsonField.subMenu.controllers.push(addTextInBalloonAtMisc({pos:{x:posX, y:posY}}, jsonField.subMenu.balloon, text, fontInfo));
            i = i + 1;
        }
    } else{
    jsonField.subMenu.update.flag = false;
    jsonField.mainMenu.choice.highlight.stop = false;
  }
};

func.miniCreateSubMenuItemsAtField = function() {
  func.createSubMenuItemsAtField();
  jsonField.subMenu.update.flag = false;
  jsonField.mainMenu.choice.highlight.stop = false;
};

func.updateSubMenuItemsAtField = function() {
  if(Object.keys(jsonData.state.items).length > 0){
    updateChoiceAtMisc(jsonField.subMenu.choice, game.camera);
  }
};

func.useItemsAtField = function(args) {
  func[args]();
  clearControllersAtMisc(jsonField.subMenu);
  clearChoiceAtMisc(jsonField.subMenu.choice);
  jsonField.subMenu.choice.highlight.stop = false;
  func.createSubMenuItemsAtField();
};

///////////////////////////////////////////////////////////////////////////////
// shopping

func.tradeItemsAtField = function(args){
  tradeItemsAtMisc(args);
};

///////////////////////////////////////////////////////////////////////////////
// save

func.saveDataAndRefreshMenuAtField = function(args){
  saveDataAtMisc(args.name);
  jsonSave.subMenu.choice.options[args.index].label.controller.text = jsonSave.saveDataText + " (" + (args.index+1) + ")      " + jsonData.state.date;
  jsonSave.subMenu.update.flag = true;
  jsonSave.subMenu.choice.highlight.stop = false;
};
