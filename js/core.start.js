///////////////////////////////////////////////////////////////////////////////
// preload @ load_start

function preloadJsonsAtLoadStart(){
  loadJsonsAtMisc(["assets/jsons/virtual_buttons.json", "assets/jsons/fonts.json", "assets/jsons/highlight.json",
                      "assets/jsons/start.json", "assets/jsons/data.json", "assets/jsons/yes_no.json",
                          "assets/jsons/world.json", "assets/jsons/events.json",
                            "assets/jsons/math.json", "assets/jsons/items.json",
                              "assets/jsons/field.json", "assets/jsons/talk.json", "assets/jsons/shopping.json", "assets/jsons/save.json",
                                "assets/jsons/battle.json", "assets/jsons/guests.json"]);
}

function preloadSoundEffectsAtLoadStart(){
  preloadAudioAtMisc(["assets/audio/sound_select.mp3",
                          "assets/audio/sound_ok.mp3", "assets/audio/sound_ng.mp3",
                              "assets/audio/sound_chalk.mp3", "assets/audio/sound_eraser.mp3", "assets/audio/sound_hit.mp3",
                                  "assets/audio/sound_up.mp3"]);
}

function preloadBackgroundMusicsAtLoadStart(){
  preloadAudioAtMisc(["assets/audio/music_start.mp3", "assets/audio/music_town.mp3", "assets/audio/music_field.mp3",
                          "assets/audio/music_dungeon.mp3", "assets/audio/music_battle.mp3"]);
}

///////////////////////////////////////////////////////////////////////////////
// create @ load_start

function createJsonsAtLoadStart(){
  jsonVirtualButtons = game.cache.getJSON("assets/jsons/virtual_buttons.json");
  jsonFonts = game.cache.getJSON("assets/jsons/fonts.json");
  jsonHighlight = game.cache.getJSON("assets/jsons/highlight.json");
  jsonStart = game.cache.getJSON("assets/jsons/start.json");
  jsonData = game.cache.getJSON("assets/jsons/data.json");
  jsonYesNo = game.cache.getJSON("assets/jsons/yes_no.json");
  jsonWorld = game.cache.getJSON("assets/jsons/world.json");
  jsonEvents = game.cache.getJSON("assets/jsons/events.json");
  jsonMath = game.cache.getJSON("assets/jsons/math.json");
  jsonItems = game.cache.getJSON("assets/jsons/items.json");
  jsonField = game.cache.getJSON("assets/jsons/field.json");
  jsonTalk = game.cache.getJSON("assets/jsons/talk.json");
  jsonShopping = game.cache.getJSON("assets/jsons/shopping.json");
  jsonSave = game.cache.getJSON("assets/jsons/save.json");
  jsonBattle = game.cache.getJSON("assets/jsons/battle.json");
  jsonGuests = game.cache.getJSON("assets/jsons/guests.json");
}

function createSoundEffectsAtLoadStart(){
  createSoundEffectsAtMisc(["assets/audio/sound_select.mp3",
                                "assets/audio/sound_ok.mp3", "assets/audio/sound_ng.mp3",
                                    "assets/audio/sound_chalk.mp3", "assets/audio/sound_eraser.mp3", "assets/audio/sound_hit.mp3",
                                        "assets/audio/sound_up.mp3"]);
}

function createBackgroundMusicsAtLoadStart(){
  createBackgroundMusicsAtMisc(["assets/audio/music_start.mp3", "assets/audio/music_town.mp3", "assets/audio/music_field.mp3",
                          "assets/audio/music_dungeon.mp3", "assets/audio/music_battle.mp3"]);
}

///////////////////////////////////////////////////////////////////////////////
// update @ load_start

///////////////////////////////////////////////////////////////////////////////
// preload @ start

function preloadStartAtStart(){
    loadSpritesheetAtMisc(jsonStart.startBackground);
    loadSpritesheetAtMisc(jsonStart.startTitle);
    preloadChoiceBalloonAtMisc(jsonStart.startMenu);
    preloadChoiceBalloonAtMisc(jsonStart.subMenu);
}

function preloadEventsAtStart(){
    loadSpritesheetAtMisc(jsonEvents.hyaline);
    loadSpritesheetAtMisc(jsonEvents.treasureBox);
    loadImageAtMisc(jsonEvents.white);
}

function preloadMathAtStart(){
    preloadBalloonAtMisc(jsonMath.blackboard.balloon);
    preloadBalloonAtMisc(jsonMath.holder.balloon);
    loadSpritesheetAtMisc(jsonMath.sotugyo);
    loadSpritesheetAtMisc(jsonMath.chalk);
    loadSpritesheetAtMisc(jsonMath.eraser);
    loadSpritesheetAtMisc(jsonMath.bra);
    loadSpritesheetAtMisc(jsonMath.ket);
    loadSpritesheetAtMisc(jsonMath.ok);
    loadSpritesheetAtMisc(jsonMath.ng);
}

function preloadFieldAtStart() {
  preloadChoiceBalloonAtMisc(jsonField.mainMenu);
  preloadBalloonAtMisc(jsonField.subMenu.balloon);
  preloadChoiceAtMisc(jsonField.subMenu.choice);
  preloadBalloonAtMisc(jsonField.subsubMenu.balloon);
  loadSpritesheetAtMisc(jsonTalk.talk.balloon);
  loadSpritesheetAtMisc(jsonTalk.talk.caret);
  preloadBalloonAtMisc(jsonShopping.subMenu.balloon);
  preloadChoiceAtMisc(jsonShopping.subMenu.choice);
  preloadChoiceBalloonAtMisc(jsonSave.subMenu);
}

function preloadBattleAtStart() {
  preloadChoiceBalloonAtMisc(jsonBattle.bottomLeft);
  preloadBalloonAtMisc(jsonBattle.bottomRight.balloon);
  preloadBalloonAtMisc(jsonBattle.subMenu.balloon);
  preloadChoiceAtMisc(jsonBattle.subMenu.choice);
}

function preloadGuetsAtStart() {
  loadSpritesheetAtMisc(jsonGuests.gentleMonster);
  loadSpritesheetAtMisc(jsonGuests.profOni);
}

///////////////////////////////////////////////////////////////////////////////
// create @ start

///////////////////////////////////////////////////////////////////////////////
// update @ start

function updateMenuAtStart(){
    if(jsonYesNo.yesNo.update.flag){
        jsonStart.startMenu.choice.highlight.stop = true;
        updateChoiceBalloonAtMisc(jsonStart.startMenu);
        if (existsAtMisc(jsonYesNo.yesNo.update.func)) {
            func[jsonYesNo.yesNo.update.func]();
        }
        updateChoiceBalloonAtMisc(jsonYesNo.yesNo);
    } else if(jsonStart.subMenu.update.flag){
      jsonStart.startMenu.choice.highlight.stop = true;
      updateChoiceBalloonAtMisc(jsonStart.startMenu);
      if (existsAtMisc(jsonStart.subMenu.update.func)) {
          func[jsonStart.subMenu.update.func]();
      }
      updateChoiceBalloonAtMisc(jsonStart.subMenu);
      if (button1PushedAtMisc()) {
          soundEffectSelectAtMisc();
          destroySubMenuAtStart();
      }
    } else if(jsonStart.startMenu.update.flag){
        updateChoiceBalloonAtMisc(jsonStart.startMenu);
    }
}

function clearYesNoAtStart() {
    clearYesNoAtMisc();
    jsonStart.startMenu.choice.highlight.stop = false;
    jsonStart.startMenu.update.flag = true;
}

function destroySubMenuAtStart() {
    destroyChoiceBalloonAtMisc(jsonStart.subMenu);
    jsonStart.subMenu.update.flag = false;
    jsonStart.subMenu.update.func = null;
    jsonStart.startMenu.choice.highlight.stop = false;
    jsonStart.startMenu.update.flag = true;
}

function initDataAtStart() {
    jsonData = game.cache.getJSON("assets/jsons/data.json");
    jsonData.state.id = "load_start";
    jsonData.state.scene = "start";
    jsonData.state.map = "start";
    // savedData.setItem('data', JSON.stringify(jsonData));
    temporalData.setItem('data', JSON.stringify(jsonData));
}
