basicFrame.start = function() {};
basicFrame.start.prototype = {
    preload: function() {
        setGameScaleAtMisc();
        setFontstyle();
        preloadHighlightAtMisc();
        preloadChoiceBalloonAtMisc(jsonYesNo.yesNo);
        preloadStartAtStart();
        preloadEventsAtStart();
        preloadMathAtStart();
        preloadFieldAtStart();
        preloadBattleAtStart();
        preloadGuetsAtStart();
        jsonStart.startMenu.update.flag = true;
        jsonStart.startMenu.update.func = "updateMenuAtStart";
        jsonStart.startMenu.choice.highlight.stop = false;
        preloadVirtualButtonsAtMisc();
    },
    create: function() {
        addSpriteAtMisc(jsonStart.startBackground);
        createBalloonAtMisc(jsonMath.blackboard.balloon);
        createBalloonAtMisc(jsonMath.holder.balloon);
        jsonMath.chalk.pos = {
            "x": 576,
            "y": 376
        };
        addSpriteAtMisc(jsonMath.chalk);
        jsonMath.eraser.pos = {
            "x": 640,
            "y": 368
        };
        addSpriteAtMisc(jsonMath.eraser);
        addSpriteAtMisc(jsonStart.startTitle);
        createChoiceBalloonAtMisc(jsonStart.startMenu);
        createVirtualButtonsAtMisc();
        controlBackgroundMusicAtMisc("assets/audio/music_start.mp3");
        showMatrixAtMisc(192, 192, jsonMatrices[0].mathexp);
  },
    update: function() {
        updateButtonsAtMisc();
        updateMenuAtStart();
    }

};
///////////////////////////////////////////////////////////////////////////////
function shuffle(arr) {
  var t;
  var n;
  var len = arr.length;
  while (len) {
    n = Math.floor(Math.random() * len--);
    t = arr[len];
    arr[len] = arr[n];
    arr[n] = t;
  }
  return arr;
}
basicFrame.end = function() {};
basicFrame.end.prototype = {
    preload: function() {
      setGameScaleAtMisc();
      var n1;
      var n2;
      var n3;
      var intList = [3, 7, 13, 19, 29, 37, 43, 53, 61, 71, 79, 89, 101, 107, 113, 131, 139, 151, 163, 173, 181, 193, 199, 223, 229, 239, 251, 263, 271, 281];
      intList = shuffle(intList);
      n1 = intList[0];
      n2 = intList[1];
      n3 = intList[2];
      jsonMatrices[0].mathexp[1].contents[0][0] = 2*n1;
      jsonMatrices[0].mathexp[1].contents[0][1] = n2;
      jsonMatrices[0].mathexp[1].contents[0][2] = 2*n3;
      jsonMatrices[0].mathexp[1].contents[1][0] = -n1;
      jsonMatrices[0].mathexp[1].contents[1][1] = -n2;
      jsonMatrices[0].mathexp[1].contents[1][2] = 0;
      jsonMatrices[0].mathexp[1].contents[2][0] = n1;
      jsonMatrices[0].mathexp[1].contents[2][1] = 0;
      jsonMatrices[0].mathexp[1].contents[2][2] = n3;
    },
    create: function() {
        addSpriteAtMisc(jsonStart.startBackground);
        createBalloonAtMisc(jsonMath.blackboard.balloon);
        createBalloonAtMisc(jsonMath.holder.balloon);
        jsonMath.chalk.pos = {
            "x": 576,
            "y": 376
        };
        addSpriteAtMisc(jsonMath.chalk);
        jsonMath.eraser.pos = {
            "x": 640,
            "y": 368
        };
        addSpriteAtMisc(jsonMath.eraser);
        controlBackgroundMusicAtMisc("assets/audio/music_start.mp3");
        addTextAtMisc(jsonMatrices[0].message);
        showMatrixAtMisc(jsonMatrices[0].pos.x, jsonMatrices[0].pos.y, jsonMatrices[0].mathexp);
  },
    update: function() {

    }

};
