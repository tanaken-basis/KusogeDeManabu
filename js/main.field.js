////////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap1 = function() {};
basicFrame.fieldMap1.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_1", "json_map_1", "assets/jsons/map_1.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_1", "json_map_1", 0, "assets/audio/music_town.mp3");
    },
    update: function() {
        if( isTrueAtMisc(jsonData.state.eventFlags.Scene1Map1Event1) ){
          jsonData.state.eventFlags.Scene1Map1Event1 = false;
          player.animations.play("up");
          startNpcTalkAtField(0);
        } else if( isTrueAtMisc(jsonData.state.eventFlags.Scene2Map1Event1) ){
          var ovaTween;
          flagsFalseAtField();
          jsonData.state.eventFlags.Scene2Map1Event1 = false;
          jsonData.state.eventFlags.Scene2Map4F1Event1 = true;
          jsonData.state.npcsPosMoves["map_2_worker_1"] = {"x": 1648, "y": 2384};
          player.animations.play("up");
          ovaTween = game.add.tween(npcs[0]);
          ovaTween.to({y: 816}, 100, "Linear", true, 100);
          ovaTween.repeat(5, 100);
          ovaTween.onComplete.add(
            function() {
                jsonData.state.updateButtons = true;
                startTalkAtField(["オヴァ"], [["モモピー！！", "わしがドンブラコ川に洗濯に行って", "いる間に、村のみんなが消えてしま", "ったんじゃ！！"],
                          ["洗濯が終わって帰ろうとしたときに", "村のみんなが北の方に行くのを", "遠目で見たんじゃが…"],
                          ["モモピー。", "どうか村のみんなを助けに行っておくれ。"]
                        ], null, null, "destructorFlagsTrueAtField");
            }
          );
        } else {
          subUpdateAtField();
        }
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap2 = function() {};
basicFrame.fieldMap2.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_2", "json_map_2", "assets/jsons/map_2.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_2", "json_map_2", 0, "assets/audio/music_field.mp3");
    },
    update: function() {
      subUpdateAtField();
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap3F1 = function() {};
basicFrame.fieldMap3F1.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_3-1", "json_map_3-1", "assets/jsons/map_3-1.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_3-1", "json_map_3-1", 0, "assets/audio/music_dungeon.mp3");
    },
    update: function() {
      subUpdateAtField();
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap3F2 = function() {};
basicFrame.fieldMap3F2.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_3-2", "json_map_3-2", "assets/jsons/map_3-2.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_3-2", "json_map_3-2", 0, "assets/audio/music_dungeon.mp3");
        if( (jsonData.state.scene == "scene_1") || (jsonData.state.eventFlags.Scene2Map3F2Event1) ){
          jsonMath.sotugyo.pos = {
              "x":  128 , "y":  96
          };
          jsonMath.sotugyo.controller = addSpriteAtMisc(jsonMath.sotugyo, game.camera);
        }
    },
    update: function() {
      if( isTrueAtMisc(jsonData.state.eventFlags.Scene2Map3F2Event1) ){
        flagsFalseAtField();
        player.animations.play("up");
        jsonData.state.eventFlags.Scene2Map3F2Event1 = false;
        jsonGuests.profOni.pos = {
            "x": 192,
            "y": 432
        };
        jsonGuests.profOni.controller = addSpriteAtMisc(jsonGuests.profOni, game.camera);
        jsonGuests.profOni.controller.anchor.set(0.5, 0.5);
        jsonGuests.profOni.controller.animations.play("up");
        game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
          jsonData.state.updateButtons = true;
          startTalkAtField(["簡単なモンスターのボス", "簡単なモンスターのボス"], [["負けちゃったよ～。"], ["あっ、オニキョージュ様！"]], [[[0.05]]], [[1.0]], "profOni1Scene2Map3F2Event1AtField");
        });
      } else{
        subUpdateAtField();
      }
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap4F1 = function() {};
basicFrame.fieldMap4F1.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_4-1", "json_map_4-1", "assets/jsons/map_4-1.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_4-1", "json_map_4-1", 0, "assets/audio/music_start.mp3");
    },
    update: function() {
      if( isTrueAtMisc(jsonData.state.eventFlags.Scene2Map4F1Event1) ){
        var momoTween;
        flagsFalseAtField();
        jsonData.state.eventFlags.Scene2Map4F1Event1 = false;
        jsonData.state.eventFlags.Scene2Map4F2Event1 = true;
        player.animations.play("left");
        game.camera.target = null;
        game.camera.x = 224;
        game.camera.y = 0;
        momoTween = game.add.tween(player);
        momoTween.to({x:  656 , y:  272 }, 4000, "Linear", true, 500);
        momoTween.onComplete.add(
          function() {
              player.animations.play("down");
              jsonData.state.updateButtons = true;
              startTalkAtField(["モモピー"], [
                ["ここがドンブラコ川か。", "なんだか自分にとっては不吉な名前の", "川だなぁ。"],
                ["あれ？", "風が強く…"]
              ], [[[0.05]]], [[1.0]], "momo1Scene2Map4F1Event1AtField");
          }
        );
      } else {
        subUpdateAtField();
      }

    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap4F2 = function() {};
basicFrame.fieldMap4F2.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_4-2", "json_map_4-2", "assets/jsons/map_4-2.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_4-2", "json_map_4-2", 0, "assets/audio/music_start.mp3");
    },
    update: function() {
        if( isTrueAtMisc(jsonData.state.eventFlags.Scene2Map4F2Event1) ){
          var momoTween;
          flagsFalseAtField();
          jsonData.state.eventFlags.Scene2Map4F2Event1 = false;
          jsonData.state.eventFlags.Scene2Map5Event1 = true;
          player.animations.play("down");
          game.camera.target = null;
          game.camera.x = 112;
          game.camera.y = 0;
          momoTween = game.add.tween(player);
          momoTween.to({x:  336 , y:  272}, 3000, "Linear", true, 500);
          momoTween.onComplete.add(
            function() {
                jsonData.state.updateButtons = true;
                startTalkAtField([null], [
                  ["どんぶらこ～"]
                ], [[[0.05]]], [[1.0]], "momo1Scene2Map4F2Event1AtField");
            }
          );
      } else{
          subUpdateAtField();
      }
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap5 = function() {};
basicFrame.fieldMap5.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_5", "json_map_5", "assets/jsons/map_5.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_5", "json_map_5", 0, "assets/audio/music_town.mp3");
    },
    update: function() {
      if( isTrueAtMisc(jsonData.state.eventFlags.Scene2Map5Event1) ){
        var momoTween;
        flagsFalseAtField();
        jsonData.state.eventFlags.Scene2Map5Event1 = false;
        player.animations.play("left");
        momoTween = game.add.tween(player);
        momoTween.to({x:  816 , y:  656}, 2000, "Linear", true, 1000);
        momoTween.onComplete.add(
          function() {
                jsonData.state.updateButtons = true;
                startTalkAtField(["初々しいお医者さん"], [
                  ["お目覚めになられましたか。"], ["川に流されてしまったようですが、", "奇跡的に救助されたのですよ。", "浮きやすい頭型が幸いしたのかも", "しれませんね。"],
                  ["ここは「ロクゴー村」です。", "残念ながら今は人手不足で、大した", "オモテナシもできません。"],
                  ["どこかへ行くご予定があるのでしたら", "とりあえず誰かに話を聞いたり", "した方がいいかもしれませんね。"]
                ], [[[0.05]]], [[0.1]], "destructorFlagsTrueAtField");
            }
        );
      } else{
        subUpdateAtField();
      }
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap6F1 = function() {};
basicFrame.fieldMap6F1.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_6-1", "json_map_6-1", "assets/jsons/map_6-1.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_6-1", "json_map_6-1", 0, "assets/audio/music_dungeon.mp3");
    },
    update: function() {
      subUpdateAtField();
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap6F2 = function() {};
basicFrame.fieldMap6F2.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_6-2", "json_map_6-2", "assets/jsons/map_6-2.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_6-2", "json_map_6-2", 0, "assets/audio/music_dungeon.mp3");
    },
    update: function() {
      if( isTrueAtMisc(jsonData.state.eventFlags.Scene3Map6F2Event1) ){
        flagsFalseAtField();
        player.animations.play("up");
        jsonData.state.eventFlags.Scene3Map6F2Event1 = false;
        eventsUpdateFlag = false;
        jsonGuests.profOni.pos = {
            "x":  496 , "y":  160
        };
        jsonGuests.profOni.controller = addSpriteAtMisc(jsonGuests.profOni, game.camera);
        jsonGuests.profOni.controller.anchor.set(0.5, 0.5);
        jsonGuests.profOni.controller.animations.play("left");
        game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
          jsonData.state.updateButtons = true;
          startTalkAtField(["面倒なモンスターのボス", "面倒なモンスターのボス", "面倒なモンスターのボス"], [["負けちゃったか。"], ["あっ、オニキョージュ様！"], ["トンネル開通しました。", "どうぞお通りください。"]], [[[0.05]]], [[1.0]], "profOni1Scene3Map6F2Event1AtField");
        });
      } else{
        subUpdateAtField();
      }
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap7 = function() {};
basicFrame.fieldMap7.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_7", "json_map_7", "assets/jsons/map_7.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_7", "json_map_7", 0, "assets/audio/music_dungeon.mp3");
    },
    update: function() {
      if( isTrueAtMisc(jsonData.state.eventFlags.Scene5Map7Event1) ){
        flagsFalseAtField();
        jsonData.state.eventFlags.Scene5Map7Event1 = false;
        game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
          jsonData.state.updateButtons = true;
          startTalkAtField(["儚いモンスターのボス"], [["天下一行列大会の優勝者はおまえだ！", "奥の宝箱に優勝賞品が入っているぞ！", "持っていくがよい！！"]], null, [[0.8, 0.1, 0.1]], "destructorFlagsTrueAtField");
        });
      } else{
        subUpdateAtField();
      }
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap8 = function() {};
basicFrame.fieldMap8.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_8", "json_map_8", "assets/jsons/map_8.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_8", "json_map_8", 0, "assets/audio/music_town.mp3");
    },
    update: function() {
      subUpdateAtField();
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap9F1 = function() {};
basicFrame.fieldMap9F1.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_9-1", "json_map_9-1", "assets/jsons/map_9-1.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_9-1", "json_map_9-1", 0, "assets/audio/music_dungeon.mp3");
    },
    update: function() {
      subUpdateAtField();
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap9F2 = function() {};
basicFrame.fieldMap9F2.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_9-2", "json_map_9-2", "assets/jsons/map_9-2.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_9-2", "json_map_9-2", 0, "assets/audio/music_dungeon.mp3");
    },
    update: function() {
      subUpdateAtField();
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.fieldMap9F3 = function() {};
basicFrame.fieldMap9F3.prototype = {
    preload: function() {
        subPreloadAtField("tile_map_9-3", "json_map_9-3", "assets/jsons/map_9-3.json", "assets/images/tiles.png");
    },
    create: function() {
        subCreateAtField("tile_map_9-3", "json_map_9-3", 0, "assets/audio/music_dungeon.mp3");
        jsonGuests.profOni.pos = {
            "x":  576 , "y":  208
        };
        jsonGuests.profOni.controller = addSpriteAtMisc(jsonGuests.profOni, game.camera);
        jsonGuests.profOni.controller.alpha = 0;
        jsonGuests.profOni.controller.anchor.set(0.5, 0.5);
        jsonGuests.profOni.controller.animations.play("down");
        jsonMath.sotugyo.pos = {
            "x":  448 , "y":  160
        };
        jsonMath.sotugyo.controller1 = addSpriteAtMisc(jsonMath.sotugyo, game.camera);
        jsonMath.sotugyo.pos = {
            "x":  608 , "y":  128
        };
        jsonMath.sotugyo.controller2 = addSpriteAtMisc(jsonMath.sotugyo, game.camera);
        jsonMath.sotugyo.pos = {
            "x":  544 , "y":  64
        };
        jsonMath.sotugyo.controller3 = addSpriteAtMisc(jsonMath.sotugyo, game.camera);
        jsonMath.sotugyo.pos = {
            "x":  384 , "y":  64
        };
        jsonMath.sotugyo.controller4 = addSpriteAtMisc(jsonMath.sotugyo, game.camera);
    },
    update: function() {
      if(jsonData.state.eventFlags.Scene5Map9F3LastEvent1){
        var momoTween;
        flagsFalseAtField();
        jsonData.state.eventFlags.Scene5Map9F3LastEvent1 = false;
        player.animations.play("up");
        momoTween = game.add.tween(player);
        momoTween.to({x:  560 , y:  112}, 2500, "Linear", true, 1000);
        momoTween.onComplete.add(
          function() {
                jsonData.state.updateButtons = true;
                startTalkAtField(["モモピー"], [
                    ["やった～！", "ついにソトゥギョーの書を", "ゲットできるぞ！"],
                    ["？"],
                    ["あれ？"],
                    ["あれれ？"],
                    ["ソトゥギョーの書に触れないぞ～？"]
                ], [[[0.02]]], [[0.05]], "scene5Map9F3LastEvent2AtField");
        });
      } else{
        subUpdateAtField();
      }
    }
};
///////////////////////////////////////////////////////////////////////////////
