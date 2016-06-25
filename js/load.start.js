basicFrame.loadStart = function() {};
basicFrame.loadStart.prototype = {
    preload: function() {
        setGameScaleAtMisc();
        game.add.text(32, 32, 'Loading......', { fill: '#ffffff' });
        preloadJsonsAtLoadStart();
        preloadSoundEffectsAtLoadStart();
        preloadBackgroundMusicsAtLoadStart();
        loadJsonsAtMisc(["assets/jsons/matrices_map_3-1.json"]);
        // loadJsonsAtMisc(["assets/jsons/matrices_map_rep.json"]);
    },
    create: function() {
        createKeysAtMisc();
        createJsonsAtLoadStart();
        createSoundEffectsAtLoadStart();
        createBackgroundMusicsAtLoadStart();
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_3-1.json");
        // jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_rep.json");
    },
    update: function() {
        changeBackgroundMusicFlag = true;
        changeStateAtMisc("start");
    }
};
///////////////////////////////////////////////////////////////////////////////
basicFrame.loadEnd = function() {};
basicFrame.loadEnd.prototype = {
    preload: function() {
        setGameScaleAtMisc();
        loadJsonsAtMisc(["assets/jsons/matrices_map_rep.json"]);
    },
    create: function() {
        jsonMatrices = game.cache.getJSON("assets/jsons/matrices_map_rep.json");
    },
    update: function() {
        changeBackgroundMusicFlag = true;
        changeStateAtMisc("end");
    }
};
