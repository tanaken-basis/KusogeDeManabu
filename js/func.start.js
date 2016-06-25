///////////////////////////////////////////////////////////////////////////////
// menu

func.newgameAtStart = function () {
    changeBackgroundMusicFlag = true;
    initDataAtStart();
    destroyChoiceBalloonAtMisc(jsonStart.startMenu);
    jsonData.state.scene = "scene_1";
    jsonData.state.pos = {"x": 176, "y":176};
    jsonData.state.eventFlags.Scene1Map1Event1 = true;
    changeStateAtMisc("load_field_Map1");
};

func.continueAtStart = function () {
    jsonStart.subMenu.choice.options = [];
    for (var i = 0; i < 8; i++) {
      if(existsAtMisc(savedData["data_" + (i+1)])){
        jsonStart.subMenu.choice.options[i] = {"label":{"alpha":1}};
        jsonStart.subMenu.choice.options[i].label.text = jsonSave.saveDataText + " (" + (i+1) + ")      " + (JSON.parse(savedData.getItem("data_" + (i+1)))).state.date;
        jsonStart.subMenu.choice.options[i].func = "loadAtStart";
        jsonStart.subMenu.choice.options[i].args = "data_" + (i+1);
      } else{
        jsonStart.subMenu.choice.options[i] = {"label":{"alpha":1}};
        jsonStart.subMenu.choice.options[i].label.text = jsonSave.saveDataText + " (" + (i+1) + ")      ";
        jsonStart.subMenu.choice.options[i].func = "newgameAtStart";
        jsonStart.subMenu.choice.options[i].args = null;
      }
    }
    createChoiceBalloonAtMisc(jsonStart.subMenu);
    jsonStart.subMenu.update.flag = true;
};

func.clearAtStart = function () {
    jsonYesNo.yesNo.choice.options[0].func = "clearOkAtStart";
    jsonYesNo.yesNo.choice.options[1].func = "clearNgAtStart";
    jsonYesNo.yesNo.choice.highlight.initIndex = 1;
    createChoiceBalloonAtMisc(jsonYesNo.yesNo);
    jsonYesNo.yesNo.update.flag = true;
};

func.clearOkAtStart = function () {
  temporalData.clear();
  jsonStart.startMenu.update.flag = true;
  jsonStart.startMenu.choice.highlight.stop = false;
  savedData.clear();
  clearYesNoAtStart();
};

func.clearNgAtStart = function () {
  clearYesNoAtStart();
};

///////////////////////////////////////////////////////////////////////////////
// load

func.loadAtStart = function(args) {
  if (existsAtMisc(savedData[args])) {
      changeBackgroundMusicFlag = true;
      loadDataAtMisc(args);
      destroyChoiceBalloonAtMisc(jsonStart.startMenu);
      changeStateAtMisc(jsonData.state.id);
  } else {
      func.startMenuChoiceOptionsNewgameAtStart();
  }
};
