///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// sub functions for entire domain

///////////////////////////////////////////////////////////////////////////////
// jsons

function loadJsonsAtMisc(jsonUris) {
    if((typeof jsonUris) === "object"){
        for (var i = 0; i < jsonUris.length; i++) {
            game.load.json(jsonUris[i], jsonUris[i]);
        }
    } else if((typeof jsonUris) === "string"){
        game.load.json(jsonUris, jsonUris);
    }
}

///////////////////////////////////////////////////////////////////////////////
// basics

function strNumBoolToArrayAtMisc(obj) {
    if ((typeof obj === "string") || (typeof obj === "number") || (typeof obj === "boolean")) {
        obj = [obj];
    }
    return obj;
}

function existsAtMisc(obj) {
    return (((!(typeof obj === "undefined")) && (obj != null)));
}

function isTrueAtMisc(obj) {
    return ( (existsAtMisc(obj) && (obj==true)) );
}

function evalFuncAtMisc(funcName, args) {
    if (existsAtMisc(args)) {
        func[funcName](args);
    } else {
        func[funcName]();
    }
}

///////////////////////////////////////////////////////////////////////////////
// virtual buttons

function addPointerAtMisc() {
    if (game.input.pointers.length < 3) {
        game.input.addPointer();
        game.input.addPointer();
        game.input.addPointer();
        game.input.addPointer();
        game.input.addPointer();
        game.input.addPointer();
        game.input.addPointer();
        game.input.addPointer();
    }
}

function preloadVirtualButtonsAtMisc() {
    addPointerAtMisc();
    loadSpritesheetAtMisc(jsonVirtualButtons.virtualButtonCrossKey);
    loadSpritesheetAtMisc(jsonVirtualButtons.virtualButton1);
    loadSpritesheetAtMisc(jsonVirtualButtons.virtualButton2);
}

function createVirtualButtonsAtMisc() {
    jsonVirtualButtons.virtualButtonCrossKey.controller = addSpriteAtMisc(jsonVirtualButtons.virtualButtonCrossKey, game.camera);
    jsonVirtualButtons.virtualButtonCrossKey.controller.fixedToCamera = true;
    jsonVirtualButtons.virtualButton1.controller = addSpriteAtMisc(jsonVirtualButtons.virtualButton1, game.camera);
    jsonVirtualButtons.virtualButton1.controller.fixedToCamera = true;
    jsonVirtualButtons.virtualButton2.controller = addSpriteAtMisc(jsonVirtualButtons.virtualButton2, game.camera);
    jsonVirtualButtons.virtualButton2.controller.fixedToCamera = true;
}

function pointerIsDownInRectAtMisc(hashTable, xmin, xmax, ymin, ymax) {
    if (hashTable.isDown) {
        if ((hashTable.x >= xmin) && (hashTable.x <= xmax) && (hashTable.y >= ymin) && (hashTable.y <= ymax)) {
            return true;
        }
    }
    return false;
}

function pointersAreDownInRectAtMisc(xmin, xmax, ymin, ymax) {
    if (pointerIsDownInRectAtMisc(game.input.mousePointer, xmin, xmax, ymin, ymax)) {
        return true;
    }
    if (pointerIsDownInRectAtMisc(game.input.pointer1, xmin, xmax, ymin, ymax)) {
        return true;
    }
    if (pointerIsDownInRectAtMisc(game.input.pointer2, xmin, xmax, ymin, ymax)) {
        return true;
    }
    if (pointerIsDownInRectAtMisc(game.input.pointer3, xmin, xmax, ymin, ymax)) {
        return true;
    }
    if (pointerIsDownInRectAtMisc(game.input.pointer4, xmin, xmax, ymin, ymax)) {
        return true;
    }
    if (pointerIsDownInRectAtMisc(game.input.pointer5, xmin, xmax, ymin, ymax)) {
        return true;
    }
    if (pointerIsDownInRectAtMisc(game.input.pointer6, xmin, xmax, ymin, ymax)) {
        return true;
    }
    return false;
}

function pointersAreDownInRectHashtableAtMisc(hashtable) {
    return pointersAreDownInRectAtMisc(hashtable.xmin, hashtable.xmax, hashtable.ymin, hashtable.ymax);
}

function updateVirtualButtonsAtMisc() {
    if (pointersAreDownInRectHashtableAtMisc(jsonVirtualButtons.virtualButtonUp)) {
        jsonVirtualButtons.virtualButtonUp.isDown = true;
        jsonVirtualButtons.virtualButtonCrossKey.controller.frame = 1;
    } else {
        jsonVirtualButtons.virtualButtonUp.isDown = false;
    }
    if (pointersAreDownInRectHashtableAtMisc(jsonVirtualButtons.virtualButtonDown)) {
        jsonVirtualButtons.virtualButtonDown.isDown = true;
        jsonVirtualButtons.virtualButtonCrossKey.controller.frame = 2;
    } else {
        jsonVirtualButtons.virtualButtonDown.isDown = false;
    }
    if (pointersAreDownInRectHashtableAtMisc(jsonVirtualButtons.virtualButtonLeft)) {
        jsonVirtualButtons.virtualButtonLeft.isDown = true;
        jsonVirtualButtons.virtualButtonCrossKey.controller.frame = 3;
    } else {
        jsonVirtualButtons.virtualButtonLeft.isDown = false;
    }
    if (pointersAreDownInRectHashtableAtMisc(jsonVirtualButtons.virtualButtonRight)) {
        jsonVirtualButtons.virtualButtonRight.isDown = true;
        jsonVirtualButtons.virtualButtonCrossKey.controller.frame = 4;
    } else {
        jsonVirtualButtons.virtualButtonRight.isDown = false;
    }
    if ((!jsonVirtualButtons.virtualButtonUp.isDown) && (!jsonVirtualButtons.virtualButtonDown.isDown) && (!jsonVirtualButtons.virtualButtonLeft.isDown) && (!jsonVirtualButtons.virtualButtonRight.isDown)) {
        jsonVirtualButtons.virtualButtonCrossKey.controller.frame = 0;
    }
    if (pointersAreDownInRectHashtableAtMisc(jsonVirtualButtons.virtualButton1)) {
        jsonVirtualButtons.virtualButton1.isDown = true;
        jsonVirtualButtons.virtualButton1.controller.frame = 1;
    } else {
        jsonVirtualButtons.virtualButton1.isDown = false;
        jsonVirtualButtons.virtualButton1.controller.frame = 0;
    }
    if (pointersAreDownInRectHashtableAtMisc(jsonVirtualButtons.virtualButton2)) {
        jsonVirtualButtons.virtualButton2.isDown = true;
        jsonVirtualButtons.virtualButton2.controller.frame = 1;
    } else {
        jsonVirtualButtons.virtualButton2.isDown = false;
        jsonVirtualButtons.virtualButton2.controller.frame = 0;
    }
    jsonVirtualButtons.virtualButtonUp.isUp = !jsonVirtualButtons.virtualButtonUp.isDown;
    jsonVirtualButtons.virtualButtonDown.isUp = !jsonVirtualButtons.virtualButtonDown.isDown;
    jsonVirtualButtons.virtualButtonLeft.isUp = !jsonVirtualButtons.virtualButtonLeft.isDown;
    jsonVirtualButtons.virtualButtonRight.isUp = !jsonVirtualButtons.virtualButtonRight.isDown;
    jsonVirtualButtons.virtualButton1.isUp = !jsonVirtualButtons.virtualButton1.isDown;
    jsonVirtualButtons.virtualButton2.isUp = !jsonVirtualButtons.virtualButton2.isDown;
}

// function renderVirtualButtonsAtMisc() {
//     game.debug.pointer(game.input.mousePointer); // ID: 0
//     game.debug.pointer(game.input.pointer1); // ID: 1
//     game.debug.pointer(game.input.pointer2); // ID: 2
//     game.debug.pointer(game.input.pointer3); // ID: 3
//     game.debug.pointer(game.input.pointer4); // ID: 4
//     game.debug.pointer(game.input.pointer5); // ID: 5
//     game.debug.pointer(game.input.pointer6); // ID: 6
// }

///////////////////////////////////////////////////////////////////////////////
// keys

function createKeysAtMisc() {
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    num1Key = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
    num2Key = game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
    backspaceKey = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    deleteKey = game.input.keyboard.addKey(Phaser.Keyboard.DELETE);
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    spacebarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function buttonUpIsDownOrAtMisc() {
    return (upKey.isDown || jsonVirtualButtons.virtualButtonUp.isDown);
}

function buttonUpIsUpAndAtMisc() {
    return (upKey.isUp && jsonVirtualButtons.virtualButtonUp.isUp);
}

function buttonDownIsDownOrAtMisc() {
    return (downKey.isDown || jsonVirtualButtons.virtualButtonDown.isDown);
}

function buttonDownIsUpAndAtMisc() {
    return (downKey.isUp && jsonVirtualButtons.virtualButtonDown.isUp);
}

function buttonLeftIsDownOrAtMisc() {
    return (leftKey.isDown || jsonVirtualButtons.virtualButtonLeft.isDown);
}

function buttonLeftIsUpAndAtMisc() {
    return (leftKey.isUp && jsonVirtualButtons.virtualButtonLeft.isUp);
}

function buttonRightIsDownOrAtMisc() {
    return (rightKey.isDown || jsonVirtualButtons.virtualButtonRight.isDown);
}

function buttonRightIsUpAndAtMisc() {
    return (rightKey.isUp && jsonVirtualButtons.virtualButtonRight.isUp);
}

function button1IsDownOrAtMisc() {
    return (oneKey.isDown || num1Key.isDown || backspaceKey.isDown || deleteKey.isDown || escKey.isDown || jsonVirtualButtons.virtualButton1.isDown);
}

function button1IsUpAndAtMisc() {
    return (oneKey.isUp && num1Key.isUp && backspaceKey.isUp && deleteKey.isUp && escKey.isUp && jsonVirtualButtons.virtualButton1.isUp);
}

function button2IsDownOrAtMisc() {
    return (twoKey.isDown || num2Key.isDown || enterKey.isDown || spacebarKey.isDown || jsonVirtualButtons.virtualButton2.isDown);
}

function button2IsUpAndAtMisc() {
    return (twoKey.isUp && num2Key.isUp && enterKey.isUp && spacebarKey.isUp && jsonVirtualButtons.virtualButton2.isUp);
}

function buttonsAreUpAndAtMisc() {
    if (buttonUpIsUpAndAtMisc()) {
        buttonUpIsUp = true;
    }
    if (buttonDownIsUpAndAtMisc()) {
        buttonDownIsUp = true;
    }
    if (buttonLeftIsUpAndAtMisc()) {
        buttonLeftIsUp = true;
    }
    if (buttonRightIsUpAndAtMisc()) {
        buttonRightIsUp = true;
    }
    if (button1IsUpAndAtMisc()) {
        button1IsUp = true;
    }
    if (button2IsUpAndAtMisc()) {
        button2IsUp = true;
    }
}

function buttonUpPushedAtMisc() {
    if (buttonUpIsUp && buttonUpIsDownOrAtMisc()) {
        buttonUpIsUp = false;
        return true;
    }
    return false;
}

function buttonDownPushedAtMisc() {
    if (buttonDownIsUp && buttonDownIsDownOrAtMisc()) {
        buttonDownIsUp = false;
        return true;
    }
    return false;
}

function buttonLeftPushedAtMisc() {
    if (buttonLeftIsUp && buttonLeftIsDownOrAtMisc()) {
        buttonLeftIsUp = false;
        return true;
    }
    return false;
}

function buttonRightPushedAtMisc() {
    if (buttonRightIsUp && buttonRightIsDownOrAtMisc()) {
        buttonRightIsUp = false;
        return true;
    }
    return false;
}

function button1PushedAtMisc() {
    if (button1IsUp && button1IsDownOrAtMisc()) {
        button1IsUp = false;
        return true;
    }
    return false;
}

function button2PushedAtMisc() {
    if (button2IsUp && button2IsDownOrAtMisc()) {
        button2IsUp = false;
        return true;
    }
    return false;
}

function updateButtonsAtMisc(){
  updateVirtualButtonsAtMisc();
  buttonsAreUpAndAtMisc();
}

///////////////////////////////////////////////////////////////////////////////
// images, sprites, buttons, texts

function loadImageAtMisc(hashTable) {
    game.load.image(hashTable.sprite.file, hashTable.sprite.file, hashTable.sprite.width, hashTable.sprite.height);
}

function loadSpritesheetAtMisc(hashTable) {
    game.load.spritesheet(hashTable.sprite.file, hashTable.sprite.file, hashTable.sprite.width, hashTable.sprite.height, hashTable.sprite.length);
}

function addSpriteAtMisc(hashTable, gameCamera) {
    var spriteVar;
    if (existsAtMisc(gameCamera)) {
        spriteVar = game.add.sprite(gameCamera.x + hashTable.pos.x, gameCamera.y + hashTable.pos.y, hashTable.sprite.file);
    } else {
        spriteVar = game.add.sprite(hashTable.pos.x, hashTable.pos.y, hashTable.sprite.file);
    }
    spriteVar.scale.setTo(scaleAtMisc(hashTable.sprite.width, hashTable.width), scaleAtMisc(hashTable.sprite.height, hashTable.height));
    spriteVar.alpha = hashTable.sprite.alpha;
    spriteVar.frame = hashTable.sprite.frame;
    if (existsAtMisc(hashTable.sprite.frames)) {
        for (var key in hashTable.sprite.frames) {
            if (hashTable.sprite.frames.hasOwnProperty(key)) {
                spriteVar.animations.add(key, hashTable.sprite.frames[key], hashTable.sprite.fps, true);
            }
        }
    }
    return spriteVar;
}

function addButtonAtMisc(hashTable, gameCamera) {
    var buttonVar;
    if (existsAtMisc(gameCamera)) {
        // The numbers given in parameters are the indexes of the frames, in this order: over, out, down
        buttonVar = game.add.button(gameCamera.x + hashTable.pos.x, gameCamera.y + hashTable.pos.y, hashTable.sprite.file, function() {
            soundEffectSelectAtMisc();
            evalFuncAtMisc(hashTable.func, hashTable.args);
        }, this, hashTable.sprite.over, hashTable.sprite.out, hashTable.sprite.down);
    } else {
        // The numbers given in parameters are the indexes of the frames, in this order: over, out, down
        buttonVar = game.add.button(hashTable.pos.x, hashTable.pos.y, hashTable.sprite.file, function() {
            soundEffectSelectAtMisc();
            evalFuncAtMisc(hashTable.func, hashTable.args);
        }, this, hashTable.sprite.over, hashTable.sprite.out, hashTable.sprite.down);
    }
    buttonVar.scale.setTo(scaleAtMisc(hashTable.sprite.width, hashTable.width), scaleAtMisc(hashTable.sprite.height, hashTable.height));
    buttonVar.alpha = hashTable.sprite.alpha;
    return buttonVar;
}

function addTextAtMisc(hashTable, gameCamera) {
    var textVar;
    var fontstyle;
    if (existsAtMisc(hashTable.fontInfo)) {
        fontstyle = genFontstyle(hashTable.fontInfo);
    } else {
        fontstyle = JSON.parse(JSON.stringify(fontstyleNormal));
    }
    if (existsAtMisc(gameCamera)) {
        textVar = game.add.text(gameCamera.x + hashTable.pos.x, gameCamera.y + hashTable.pos.y, hashTable.text, fontstyle);
    } else {
        textVar = game.add.text(hashTable.pos.x, hashTable.pos.y, hashTable.text, fontstyle);
    }
    if (existsAtMisc(hashTable.alpha)) {
        textVar.alpha = hashTable.alpha;
    } else {
        textVar.alpha = 1;
    }
    return textVar;
}

///////////////////////////////////////////////////////////////////////////////
// controller, controllers

function clearControllersAtMisc(hashTable) {
    if (existsAtMisc(hashTable.controllers)) {
        for (var i = 0; i < hashTable.controllers.length; i++) {
            hashTable.controllers[i].destroy();
        }
    }
    hashTable.controllers = [];
}

function destroyControllersAtMisc(hashTable) {
    clearControllersAtMisc(hashTable);
}

///////////////////////////////////////////////////////////////////////////////
// balloon

function preloadBalloonAtMisc(hashTable) {
    if (existsAtMisc(hashTable)) {
        loadSpritesheetAtMisc(hashTable);
    }
}

function createBalloonAtMisc(hashTable, gameCamera) {
    if (existsAtMisc(hashTable)) {
        hashTable.controller = addSpriteAtMisc(hashTable, gameCamera);
    }
}

function addTextInBalloonAtMisc(hashTable, balloonHashTable, text, fontInfo) {
    var textVar;
    var posX = hashTable.pos.x + balloonHashTable.controller.x;
    var posY = hashTable.pos.y + balloonHashTable.controller.y;
    if (existsAtMisc(fontInfo)) {
        textVar = game.add.text(posX, posY, text, genFontstyle(fontInfo));
    } else {
        textVar = game.add.text(posX, posY, text, fontstyleNormal);
    }
    if (existsAtMisc(hashTable.alpha)) {
        textVar.alpha = hashTable.alpha;
    } else {
        textVar.alpha = 1;
    }
    return textVar;
}

function destroyBalloonAtMisc(hashTable) {
    if (existsAtMisc(hashTable.controller)) {
        hashTable.controller.destroy();
        hashTable.controller = null;
    }
}

///////////////////////////////////////////////////////////////////////////////
// choice, highlight

function preloadHighlightAtMisc() {
    loadSpritesheetAtMisc(jsonHighlight.highlight);
}

function preloadChoiceAtMisc(hashTable) {
    if (!existsAtMisc(hashTable.highlight.sprite)) {
        hashTable.highlight.sprite = JSON.parse(JSON.stringify(jsonHighlight.highlight.sprite));
    }
    loadSpritesheetAtMisc(hashTable.highlight);
    hashTable.highlight.index = hashTable.highlight.initIndex;
}

function evalFuncOnClickAtMisc(funcName, hashTableParent, i, args) {
    hashTableParent.options[hashTableParent.highlight.index].highlightController.animations.play("invisible");
    hashTableParent.highlight.index = i;
    if (existsAtMisc(args)) {
        func[funcName](args);
    } else {
        func[funcName]();
    }
}

function addChoiceButtonAtMisc(hashTable, hashTableParent, i, gameCamera) {
    var buttonVar;
    if (existsAtMisc(gameCamera)) {
        buttonVar = game.add.button(gameCamera.x + hashTable.pos.x, gameCamera.y + hashTable.pos.y, hashTable.sprite.file, function() {
            soundEffectSelectAtMisc();
            evalFuncOnClickAtMisc(hashTable.func, hashTableParent, i, hashTable.args);
        }, this, hashTable.sprite.over, hashTable.sprite.out, hashTable.sprite.down);
    } else {
        buttonVar = game.add.button(hashTable.pos.x, hashTable.pos.y, hashTable.sprite.file, function() {
            soundEffectSelectAtMisc();
            evalFuncOnClickAtMisc(hashTable.func, hashTableParent, i, hashTable.args);
        }, this, hashTable.sprite.over, hashTable.sprite.out, hashTable.sprite.down);
    }
    buttonVar.scale.setTo(scaleAtMisc(hashTable.sprite.width, hashTable.width), scaleAtMisc(hashTable.sprite.height, hashTable.height));
    buttonVar.alpha = hashTable.sprite.alpha;
    return buttonVar;
}

function createChoiceAtMisc(hashTable, balloonHashTable, gameCamera) {
    if (!existsAtMisc(hashTable.highlight.pos)) {
        hashTable.highlight.pos = {
            x: 0,
            y: 0
        };
        if (existsAtMisc(balloonHashTable)) {
            hashTable.highlight.pos.x = balloonHashTable.pos.x;
            hashTable.highlight.pos.y = balloonHashTable.pos.y;
        }
        hashTable.highlight.pos.x = hashTable.highlight.pos.x + hashTable.margin.x;
        hashTable.highlight.pos.y = hashTable.highlight.pos.y + hashTable.margin.y;
    }
    for (var i = 0; i < hashTable.options.length; i++) {
        if ((!(existsAtMisc(hashTable.options[i].sprite))) || (!(existsAtMisc(hashTable.options[i].width))) || (!(existsAtMisc(hashTable.options[i].height))) || (!(existsAtMisc(hashTable.options[i].pos)))) {
            hashTable.options[i].sprite = JSON.parse(JSON.stringify(hashTable.highlight.sprite));
            hashTable.options[i].width = hashTable.highlight.width;
            hashTable.options[i].height = hashTable.highlight.height;
            hashTable.options[i].pos = {
                x: 0,
                y: 0
            };
            if ((typeof hashTable.highlight.move.x) === "number") {
                hashTable.options[i].pos.x = hashTable.highlight.pos.x + i * hashTable.highlight.move.x;
            } else { // array
                hashTable.options[i].pos.x = hashTable.highlight.pos.x + i * hashTable.highlight.move.x[i % hashTable.highlight.move.x.length];
            }
            if ((typeof hashTable.highlight.move.y) === "number") {
                hashTable.options[i].pos.y = hashTable.highlight.pos.y + i * hashTable.highlight.move.y;
            } else { // array
                hashTable.options[i].pos.y = hashTable.highlight.pos.y + i * hashTable.highlight.move.y[i % hashTable.highlight.move.y.length];
            }
        }
        hashTable.options[i].buttonController = addChoiceButtonAtMisc(hashTable.options[i], hashTable, i, gameCamera);
        hashTable.options[i].highlightController = addSpriteAtMisc(hashTable.options[i], gameCamera);
        hashTable.options[i].highlightController.animations.play("invisible");
        hashTable.options[i].label.pos = JSON.parse(JSON.stringify(hashTable.options[i].pos));
        hashTable.options[i].label.pos.x = hashTable.options[i].label.pos.x + hashTable.padding.x;
        hashTable.options[i].label.pos.y = hashTable.options[i].label.pos.y + hashTable.padding.y;
        hashTable.options[i].label.controller = addTextAtMisc(hashTable.options[i].label, gameCamera);
    }
    hashTable.highlight.index = hashTable.highlight.initIndex;
    hashTable.highlight.stop = false;
    hashTable.highlight.firstUpdateFlag = true;
}

function updateChoiceAtMisc(hashTable, gameCamera) {
    var hLength = hashTable.options.length;
    var preIndex = hashTable.highlight.index;
    if (hashTable.highlight.index > (hLength - 1)) {
        hashTable.highlight.index = (hLength - 1);
        preIndex = hashTable.highlight.index;
    }
    if (!existsAtMisc(hashTable.highlight.increments)) {
        hashTable.highlight.increments = {};
        hashTable.highlight.increments.up = -1;
        hashTable.highlight.increments.down = 1;
        hashTable.highlight.increments.left = 0;
        hashTable.highlight.increments.right = 0;
    }
    if (!hashTable.highlight.stop) {
        hashTable.options[hashTable.highlight.index].highlightController.animations.play("blink");
        if (buttonUpPushedAtMisc()) {
            soundEffectSelectAtMisc();
            hashTable.highlight.index = ((hLength + ((hashTable.highlight.index + hashTable.highlight.increments.up) % hLength)) % hLength);
        } else if (buttonDownPushedAtMisc()) {
            soundEffectSelectAtMisc();
            hashTable.highlight.index = ((hLength + ((hashTable.highlight.index + hashTable.highlight.increments.down) % hLength)) % hLength);
        } else if (buttonLeftPushedAtMisc()) {
            soundEffectSelectAtMisc();
            hashTable.highlight.index = ((hLength + ((hashTable.highlight.index + hashTable.highlight.increments.left) % hLength)) % hLength);
        } else if (buttonRightPushedAtMisc()) {
            soundEffectSelectAtMisc();
            hashTable.highlight.index = ((hLength + ((hashTable.highlight.index + hashTable.highlight.increments.right) % hLength)) % hLength);
        }
        if ((preIndex != hashTable.highlight.index) || (hashTable.highlight.firstUpdateFlag == true)) {
            hashTable.highlight.firstUpdateFlag = false;
            hashTable.options[preIndex].highlightController.animations.play("invisible");
            hashTable.options[hashTable.highlight.index].highlightController.animations.play("blink");
            if (existsAtMisc(hashTable.options[hashTable.highlight.index].miniFunc)) {
                if (existsAtMisc(hashTable.options[hashTable.highlight.index].miniArgs)) {
                    func[hashTable.options[hashTable.highlight.index].miniFunc](hashTable.options[hashTable.highlight.index].miniArgs);
                } else {
                    func[hashTable.options[hashTable.highlight.index].miniFunc]();
                }
            }
        }
        if (hashTable.highlight.index > (hLength - 1)) {
            hashTable.highlight.index = (hLength - 1);
        }
        if (button2PushedAtMisc()) {
            soundEffectSelectAtMisc();
            hashTable.highlight.stop = true;
            if (existsAtMisc(hashTable.options[hashTable.highlight.index].func)) {
                if (existsAtMisc(hashTable.options[hashTable.highlight.index].args)) {
                    func[hashTable.options[hashTable.highlight.index].func](hashTable.options[hashTable.highlight.index].args);
                } else {
                    func[hashTable.options[hashTable.highlight.index].func]();
                }
            }
        }
    } else {
        hashTable.options[hashTable.highlight.index].highlightController.animations.play("stop");
        // hashTable.highlight.controller.animations.play("stop");
    }
}

function clearChoiceAtMisc(hashTable) {
    if (existsAtMisc(hashTable.highlight.controller)) {
        hashTable.highlight.controller.destroy();
        hashTable.highlight.controller = null;
    }
    for (var i = 0; i < hashTable.options.length; i++) {
        if (existsAtMisc(hashTable.options[i].label.controller)) {
            hashTable.options[i].label.controller.destroy();
            hashTable.options[i].label.controller = null;
        }
        if (existsAtMisc(hashTable.options[i].highlightController)) {
            hashTable.options[i].highlightController.destroy();
            hashTable.options[i].highlightController = null;
        }
        if (existsAtMisc(hashTable.options[i].buttonController)) {
            hashTable.options[i].buttonController.destroy();
            hashTable.options[i].buttonController = null;
        }
    }
}

function destroyChoiceAtMisc(hashTable) {
    clearChoiceAtMisc(hashTable);
}

///////////////////////////////////////////////////////////////////////////////
// choice balloon

function preloadChoiceBalloonAtMisc(hashTable) {
    preloadBalloonAtMisc(hashTable.balloon);
    preloadChoiceAtMisc(hashTable.choice);
}

function createChoiceBalloonAtMisc(hashTable, gameCamera) {
    createBalloonAtMisc(hashTable.balloon, gameCamera);
    createChoiceAtMisc(hashTable.choice, hashTable.balloon, gameCamera);
}

function updateChoiceBalloonAtMisc(hashTable, gameCamera) {
    updateChoiceAtMisc(hashTable.choice, gameCamera)
}

function destroyChoiceBalloonAtMisc(hashTable) {
    destroyChoiceAtMisc(hashTable.choice);
    destroyBalloonAtMisc(hashTable.balloon);
}

///////////////////////////////////////////////////////////////////////////////
// fontstyle

function setFontstyle() {
    userAgentInLowerCase = navigator.userAgent.toLowerCase();
    if (userAgentInLowerCase.indexOf("win") != -1) {
        fontfamily = jsonFonts.fontfamily.win;
    } else if (userAgentInLowerCase.indexOf("android") != -1) {
        fontfamily = jsonFonts.fontfamily.android;
    } else if (userAgentInLowerCase.indexOf("mac") != -1) {
        fontfamily = jsonFonts.fontfamily.mac;
    }　
    else if (userAgentInLowerCase.indexOf("iphone") != -1) {
        fontfamily = jsonFonts.fontfamily.iphone;
    }　
    else {
        fontfamily = "Arial";
    }
    fontstyleTiny.font = jsonFonts.fontsize.tiny + " " + fontfamily;
    fontstyleTiny.fill = "#ffffff";
    fontstyleSmall.font = jsonFonts.fontsize.small + " " + fontfamily;
    fontstyleSmall.fill = "#ffffff";
    fontstyleNormal.font = jsonFonts.fontsize.normal + " " + fontfamily;
    fontstyleNormal.fill = "#ffffff";
    fontstyleLarge.font = jsonFonts.fontsize.large + " " + fontfamily;
    fontstyleLarge.fill = "#ffffff";
    fontstyleHuge.font = jsonFonts.fontsize.huge + " " + fontfamily;
    fontstyleHuge.fill = "#ffffff";
}

function genFontstyle(fontInfo) {
    var size = 20;
    var family = fontfamily;
    var fill = "#ffffff";
    if (existsAtMisc(fontInfo.size)) {
        size = fontInfo.size;
    }
    if (existsAtMisc(fontInfo.family)) {
        family = fontInfo.Family;
    }
    if (existsAtMisc(fontInfo.fill)) {
        fill = fontInfo.fill;
    }
    return {
        font: size + "px " + family,
        fill: fill
    };
}

///////////////////////////////////////////////////////////////////////////////
// show text

function showNameAndTextLinesAtMisc(hashTable, posX, posY, moves, name, texts, lineDelays, charDelays, fontInfos, gameCamera) {
  var cumDelay = 0;
  if(existsAtMisc(name)){
    name = name + jsonTalk.talk.sep;
  } else{
    name = "";
  }
  if (existsAtMisc(gameCamera)) {
      cumDelay = showTextLineAtMisc(hashTable, posX + gameCamera.x, posY + gameCamera.y, name, 0, [jsonTalk.talk.fastReadingDelay], jsonTalk.talk.fastReadingDelay, {"fill":"#ccffff"});
  } else{
      cumDelay = showTextLineAtMisc(hashTable, posX, posY, name, 0, [jsonTalk.talk.fastReadingDelay], jsonTalk.talk.fastReadingDelay, {});
  }
  if(name != ""){
    posY = posY + jsonTalk.talk.lineHeight;
  }
  cumDelay = showTextLinesAtMisc(hashTable, posX, posY, moves, texts, lineDelays, charDelays, fontInfos, 1, gameCamera);
  return cumDelay;
}

function showTextLinesAtMisc(hashTable, posX, posY, moves, texts, lineDelays, charDelays, fontInfos, shiftIndex, gameCamera) {
    var charDelaysArg;
    var fontInfoArg;
    var move = {
        x: 0,
        y: 24
    };
    var cumDelay = 0;
    if (!existsAtMisc(lineDelays)) {
        lineDelays = [0.1];
    }
    if (!existsAtMisc(charDelays)) {
        charDelays = [
            [0.01]
        ];
    }
    if (!existsAtMisc(fontInfos)) {
        fontInfos = [{}];
    }
    if (!existsAtMisc(moves)) {
        moves = [{
            x: 0,
            y: 24
        }];
    }
    if (!existsAtMisc(shiftIndex)) {
      shiftIndex = 0;
    }
    if (existsAtMisc(gameCamera)) {
        posX = posX + gameCamera.x;
        posY = posY + gameCamera.y;
    }
    if (hashTable.flag) {
        for (var i = 0; i < texts.length; i++) {
            if (existsAtMisc(lineDelays[i])) {
                cumDelay = cumDelay + lineDelays[i];
            } else {
                cumDelay = cumDelay + lineDelays[0];
            }
            if (existsAtMisc(charDelays[i])) {
                charDelaysArg = charDelays[i];
            } else {
                charDelaysArg = charDelays[0];
            }
            if (existsAtMisc(fontInfos[i])) {
                fontInfoArg = fontInfos[i];
            } else {
                fontInfoArg = {};
            }
            cumDelay = showTextLineAtMisc(hashTable, posX, posY, texts[i], (i+shiftIndex), charDelaysArg, cumDelay, fontInfoArg);
            if (existsAtMisc(moves[i])) {
                move.x = moves[i].x;
                move.y = moves[i].y;
            }
            posX = posX + move.x;
            posY = posY + move.y;
        }
    }
    return cumDelay;
}

function showTextLineAtMisc(hashTable, posX, posY, text, textLineIndex, charDelays, cumDelay, fontInfo) {
    var fontstyleArg;
    if (!existsAtMisc(cumDelay)) {
        cumDelay = 0;
    }
    if (fontInfo == {}) {
        fontstyleArg = [fontstyleNormal];
    } else {
        fontstyleArg = genFontstyle(fontInfo);
    }
    hashTable.controllers[textLineIndex] = game.add.text(posX, posY, "", fontstyleArg);
    if (hashTable.flag) {
        if (charDelays.length == 1) {
            for (var i = 0; i < text.length; i++) {
                cumDelay = cumDelay + charDelays[0];
                hashTable.timers.push(game.time.events.add(Phaser.Timer.SECOND * cumDelay, showCharactersAtMisc, this, hashTable, text, textLineIndex, i));
            }
        } else if (charDelays.length >= text.length) {
            for (var i = 0; i < text.length; i++) {
                cumDelay = cumDelay + charDelays[i];
                hashTable.timers.push(game.time.events.add(Phaser.Timer.SECOND * cumDelay, showCharactersAtMisc, this, hashTable, text, textLineIndex, i));
            }
        } else {
            for (var i = 0; i < text.length; i++) {
                if (i < charDelays.length) {
                    cumDelay = cumDelay + charDelays[i];
                } else {
                    cumDelay = cumDelay + charDelays[charDelays.length - 1];
                }
                hashTable.timers.push(game.time.events.add(Phaser.Timer.SECOND * cumDelay, showCharactersAtMisc, this, hashTable, text, textLineIndex, i));
            }
        }
    }
    return cumDelay;
}

function showCharactersAtMisc(hashTable, text, textLineIndex, i) {
    if (hashTable.flag) {
        hashTable.controllers[textLineIndex].text = text.substr(0, i + 1);
    }
}

function clearTextLinesAtMisc(hashTable) {
    if (existsAtMisc(hashTable.controllers)) {
        destroyControllersAtMisc(hashTable);
    } else {
        hashTable.controllers = [];
    }
}

function clearTextLineTimersAtMisc(hashTable) {
    if(existsAtMisc(hashTable.timers)){
        for (var i = 0; i < hashTable.timers.length; i++) {
            if(existsAtMisc(hashTable.timers[i])){
                game.time.events.remove(hashTable.timers[i]);
            }
        }
    }
    hashTable.timers = [];
}

function createTextLinesAtMisc(hashTable) {
    hashTable.flag = true;
    clearTextLineTimersAtMisc(hashTable);
    clearTextLinesAtMisc(hashTable);
}

function destroyTextLinesAtMisc(hashTable) {
    hashTable.flag = false;
    clearTextLineTimersAtMisc(hashTable);
    clearTextLinesAtMisc(hashTable);
}

///////////////////////////////////////////////////////////////////////////////
// state

function changeStateAtMisc(stateId) {
    game.state.start(stateId);
}

function setStateIdMapAtMisc(stateId, stateMapId){
  jsonData.state.id = stateId;
  jsonData.state.map = stateMapId;
  temporalData.setItem("data", JSON.stringify(jsonData));
}

function setStatePosAtMisc(posX, posY){
    jsonData.state.pos = {
        "x": posX,
        "y": posY
    };
    temporalData.setItem("data", JSON.stringify(jsonData));
}

///////////////////////////////////////////////////////////////////////////////
// display mode

function setGameScaleAtMisc() {
    if (gameScale) {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        // game.stage.backgroundColor = "#777777";
    }
}

///////////////////////////////////////////////////////////////////////////////
// scale

function scaleAtMisc(before, after) {
    if ((after > 0) && (before > 0)) {
        return (after / before);
    } else {
        return (before);
    }
}

///////////////////////////////////////////////////////////////////////////////
// overlap

function checkOverlapAtMisc(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

///////////////////////////////////////////////////////////////////////////////
// audio

function preloadAudioAtMisc(audioUris) {
    if (existsAtMisc(audioUris)) {
        audioUris = strNumBoolToArrayAtMisc(audioUris);
        for (var i = 0; i < audioUris.length; i++) {
            if (!game.cache.checkSoundKey(audioUris[i])) {
                game.load.audio(audioUris[i], audioUris[i]);
            }
        }
    }
}

function createSoundEffectsAtMisc(soundEffectsUris) {
    if (existsAtMisc(soundEffectsUris)) {
        soundEffects = {};
        for (var i = 0; i < soundEffectsUris.length; i++) {
            soundEffects[soundEffectsUris[i]] = (game.add.audio(soundEffectsUris[i]));
            soundEffects[soundEffectsUris[i]].loop = false;
            soundEffects[soundEffectsUris[i]].volume = 1;
        }
    }
}

function createBackgroundMusicsAtMisc(musicsUris) {
  if (existsAtMisc(musicsUris)) {
      backgroundMusics = {};
      for (var i = 0; i < musicsUris.length; i++) {
          backgroundMusics[musicsUris[i]] = (game.add.audio(musicsUris[i]));
          backgroundMusics[musicsUris[i]].loop = true;
          backgroundMusics[musicsUris[i]].volume = 1;
      }
  }
}

function controlBackgroundMusicAtMisc(audioUri){
  if(changeBackgroundMusicFlag){
    changeBackgroundMusicFlag = false;
    if(existsAtMisc(backgroundMusics[currentBackGroundMusicUri])){
      backgroundMusics[currentBackGroundMusicUri].loop = false;
      backgroundMusics[currentBackGroundMusicUri].stop();
    }
    currentBackGroundMusicUri = audioUri;
    backgroundMusics[currentBackGroundMusicUri].loop = true;
    backgroundMusics[currentBackGroundMusicUri].play();
  }
}

function soundEffectSelectAtMisc() {
    if (existsAtMisc(soundEffects["assets/audio/sound_select.mp3"])) {
        soundEffects["assets/audio/sound_select.mp3"].play();
    }
}

///////////////////////////////////////////////////////////////////////////////
// items

function createItemChoiceAtMisc(hashTable, itemsHashTable, func){
  var text;
  var i;
  if(Object.keys(itemsHashTable).length > 0){
      hashTable.choice.highlight.width = hashTable.items.highlight.width;
      hashTable.choice.highlight.height = hashTable.items.highlight.height;
      hashTable.choice.highlight.move.x = hashTable.items.highlight.move.x;
      hashTable.choice.highlight.move.y = hashTable.items.highlight.move.y;
      hashTable.choice.options = [];
      i = 0;
      for (var key in itemsHashTable) {
          hashTable.choice.options.push({});
          hashTable.choice.options[i].label = {};
          text = jsonItems[key].name;
          hashTable.choice.options[i].label.text = text;
          hashTable.choice.options[i].func = func;
          hashTable.choice.options[i].args = key;
          i = i + 1;
      }
      createChoiceAtMisc(hashTable.choice, hashTable.balloon, game.camera);
  }
}

function arrangeItemsAtMisc(){
  var hashTables = [];
  var i = 0;
  // var itemsHashTable = JSON.parse(JSON.stringify(jsonData.state.items))
  if(Object.keys(jsonData.state.items).length > 0){
    for (var key in jsonData.state.items) {
      hashTables[i] = {};
      hashTables[i].key = key;
      hashTables[i].order = jsonItems[key].order;
      hashTables[i].num = jsonData.state.items[key].num;
      i = i + 1;
    }
    hashTables.sort(
      function(a,b){
        if(a.order < b.order){ return -1;}
        if(a.order > b.order){ return 1;}
        return 0;
      }
    );
    jsonData.state.items = {};
    for (var j = 0; j < i; j++) {
      jsonData.state.items[hashTables[j].key] = {};
      jsonData.state.items[hashTables[j].key].num = hashTables[j].num;
    }
  }
}

function cleanupItemsAtMisc(key) {
    jsonData.state.items[key].num = Math.max(0, (jsonData.state.items[key].num - 1));
    if (jsonData.state.items[key].num < 1) {
        delete jsonData.state.items[key];
    }
}

///////////////////////////////////////////////////////////////////////////////
// shopping

function textMoneyAtMisc() {
    return (jsonWorld.pocketText + " : " + jsonData.state.money + " " + jsonWorld.currencyText);
}

function getItemsAtMisc(args) {
    if (args in jsonData.state.items) {
        if (jsonData.state.items[args].num < jsonWorld.ItemsMaxLimit) {
            jsonData.state.items[args].num = jsonData.state.items[args].num + 1;
        }
    } else {
        jsonData.state.items[args] = {
            "num": 1
        };
    }
}

function getMoneyAtMisc(args) {
  if ( (jsonData.state.money + args) < jsonWorld.MoneyMaxLimit) {
      jsonData.state.money = jsonData.state.money + args;
  }
}

function tradeItemsAtMisc(args) {
    var price = jsonItems[args].price;
    if (jsonData.state.money >= price) {
        jsonData.state.money = jsonData.state.money - price;
        getItemsAtMisc(args);
    } else {
        soundEffects["assets/audio/sound_ng.mp3"].play();
    }
    jsonShopping.subsubMenu.controllers[0].text = textMoneyAtMisc();
    jsonShopping.subMenu.update.flag = true;
    jsonShopping.subMenu.choice.highlight.stop = false;
}

///////////////////////////////////////////////////////////////////////////////
// date

function getDateAtMisc(){
  var timeDate = new Date();
  var year = timeDate.getFullYear();
  var month = timeDate.getMonth() + 1;
  var date = timeDate.getDate();
  var hour = timeDate.getHours();
  var min = timeDate.getMinutes();
  var sec = timeDate.getSeconds();
  if(month < 10) { month = "0" + month; }
  if(date < 10) { date = "0" + date; }
  if(hour < 10) { hour = "0" + hour; }
  if(min < 10) { min = "0" + min; }
  if(sec < 10) { sec = "0" + sec; }
  return( year + "/" + month + "/"  + date + " "  + hour + ":"  + min + ":" + sec);
}

///////////////////////////////////////////////////////////////////////////////
// save and load data

function saveDataAtMisc(args){
  jsonData.state.date = getDateAtMisc();
  savedData.setItem(args, JSON.stringify(jsonData));
  temporalData.setItem('data', JSON.stringify(jsonData));
}

function loadDataAtMisc(args){
  jsonData = JSON.parse(savedData.getItem(args));
  jsonData.state.date = getDateAtMisc();
  temporalData.setItem('data', JSON.stringify(jsonData));
}

////////////////////////////////////////////////////////////////////////////////
// yes, no

function clearYesNoAtMisc() {
    destroyChoiceBalloonAtMisc(jsonYesNo.yesNo);
    jsonYesNo.yesNo.update.flag = false;
    jsonYesNo.yesNo.update.func = null;
    jsonYesNo.yesNo.reply = false;
    jsonYesNo.yesNo.choice.highlight.initIndex = 0;
    jsonYesNo.yesNo.choice.options[0].func = null;
    jsonYesNo.yesNo.choice.options[1].func = null;
}

////////////////////////////////////////////////////////////////////////////////
// math

function showMatrixAtMisc(posX, posY, mathexp, recursionFlag) {
    var contents;
    var pos;
    var elasticity = 1;
    var spaceX = 40;
    var spaceXhalf = 20;
    var spaceXquarter = 10;
    var spaceY = 48;
    var spaceYhalf = 24;
    var hashTable = {
        "width": 24,
        "height": 24,
        "pos": {
            "x": posX,
            "y": posY
        },
        "text": "",
        "fontInfo": {
            "size": 20
        },
        "sprite": JSON.parse(JSON.stringify(jsonHighlight.highlight.sprite))
    };
    if ((!recursionFlag) || (!existsAtMisc(recursionFlag))) {
        jsonMath.highlightControllers = {};
        jsonMath.textControllers = {};
        jsonMath.index = 0;
    }
    for (var i = 0; i < mathexp.length; i++) {
        if (mathexp[i].type == "pos") {
            hashTable.pos.x = mathexp[i].x;
            hashTable.pos.y = mathexp[i].y;
        } else if (mathexp[i].type == "num") {
            contents = mathexp[i].contents;
            hashTable.text = contents;
            addTextAtMisc(hashTable, game.camera);
            if(existsAtMisc(mathexp[i].elasticity)){
              elasticity = mathexp[i].elasticity;
            } else{
              elasticity = 1;
            }
            hashTable.pos.x = hashTable.pos.x + Math.floor(spaceX * elasticity);
        } else if (mathexp[i].type == "text") {
            hashTable.text = mathexp[i].contents;
            addTextAtMisc(hashTable, game.camera);
            if(existsAtMisc(mathexp[i].elasticity)){
              elasticity = mathexp[i].elasticity;
            } else{
              elasticity = 0.8;
            }
            hashTable.pos.x = hashTable.pos.x + Math.floor(spaceXhalf * hashTable.text.length * elasticity);
        }  else if (mathexp[i].type == "ope") {
            hashTable.text = mathexp[i].contents;
            addTextAtMisc(hashTable, game.camera);
            if(existsAtMisc(mathexp[i].elasticity)){
              elasticity = mathexp[i].elasticity;
            } else{
              elasticity = 1;
            }
            if ((!recursionFlag) || (!existsAtMisc(recursionFlag))) {
                hashTable.pos.x = hashTable.pos.x + Math.floor((spaceXhalf + spaceXquarter) * elasticity);
            } else {
                hashTable.pos.x = hashTable.pos.x + Math.floor(spaceXhalf * elasticity);
            }
        } else if (mathexp[i].type == "prob") {
            contents = mathexp[i].contents;
            jsonMath.highlightControllers[contents] = addSpriteAtMisc(hashTable, game.camera);
            jsonMath.highlightControllers[contents].animations.play("invisible");
            hashTable.text = "??";
            jsonMath.textControllers[contents] = addTextAtMisc(hashTable, game.camera);
            if(existsAtMisc(mathexp[i].elasticity)){
              elasticity = mathexp[i].elasticity;
            } else{
              elasticity = 1;
            }
            hashTable.pos.x = hashTable.pos.x + Math.floor(spaceX * elasticity);
        } else if (mathexp[i].type == "spc") {
            if (existsAtMisc(mathexp[i].contents.x)) {
                hashTable.pos.x = hashTable.pos.x + mathexp[i].contents.x;
            }
            if (existsAtMisc(mathexp[i].contents.y)) {
                hashTable.pos.y = hashTable.pos.y + mathexp[i].contents.y;
            }
        } else if (mathexp[i].type == "matrix") {
            if(existsAtMisc(mathexp[i].elasticity)){
              elasticity = mathexp[i].elasticity;
            } else{
              elasticity = 1;
            }
            posY = hashTable.pos.y;
            hashTable.pos.y = hashTable.pos.y - (spaceYhalf * (mathexp[i].nrow - 1));
            mathexp[i].bra = game.add.sprite(hashTable.pos.x, hashTable.pos.y, jsonMath.bra.sprite.file);
            mathexp[i].bra.scale.setTo(0.25, mathexp[i].nrow*0.2);
            hashTable.pos.x = hashTable.pos.x + spaceXhalf;
            posX = hashTable.pos.x;
            for (var j = 0; j < mathexp[i].nrow; j++) {
                hashTable.pos.x = posX;
                for (var k = 0; k < mathexp[i].ncol; k++) {
                    contents = mathexp[i].contents[j][k];
                    if ((typeof contents) === "number") {
                        hashTable.text = contents;
                        addTextAtMisc(hashTable, game.camera);
                        hashTable.pos.x = hashTable.pos.x + Math.floor(spaceX * elasticity);
                    } else if ((typeof contents) === "string") {
                        jsonMath.highlightControllers[contents] = addSpriteAtMisc(hashTable, game.camera);
                        jsonMath.highlightControllers[contents].animations.play("invisible");
                        hashTable.text = "??";
                        jsonMath.textControllers[contents] = addTextAtMisc(hashTable, game.camera);
                        hashTable.pos.x = hashTable.pos.x + Math.floor(spaceX * elasticity);
                    } else if ((typeof contents) === "object") {
                        pos = showMatrixAtMisc(hashTable.pos.x, hashTable.pos.y, contents, true);
                        hashTable.pos.x = pos.x + Math.floor(spaceXquarter * elasticity);
                        hashTable.pos.y = pos.y;
                    }
                }
                hashTable.pos.y = hashTable.pos.y + spaceY;
            }
            hashTable.pos.y = posY - (spaceYhalf * (mathexp[i].nrow - 1));
            hashTable.pos.x = hashTable.pos.x - Math.floor(spaceXhalf * elasticity);
            mathexp[i].ket = game.add.sprite(hashTable.pos.x, hashTable.pos.y, jsonMath.ket.sprite.file);
            mathexp[i].ket.scale.setTo(0.25, mathexp[i].nrow*0.2);
            hashTable.pos.x = hashTable.pos.x + (spaceXhalf + spaceXquarter);
            hashTable.pos.y = posY;
        } else if (mathexp[i].type == "table") {
            if(existsAtMisc(mathexp[i].elasticity)){
              elasticity = mathexp[i].elasticity;
            } else{
              elasticity = 1;
            }
            posY = hashTable.pos.y;
            hashTable.pos.y = hashTable.pos.y - (spaceYhalf * (mathexp[i].nrow - 1));
            posX = hashTable.pos.x;
            for (var j = 0; j < mathexp[i].nrow; j++) {
                hashTable.pos.x = posX;
                for (var k = 0; k < mathexp[i].ncol; k++) {
                    contents = mathexp[i].contents[j][k];
                    hashTable.text = contents;
                    addTextAtMisc(hashTable, game.camera);
                    hashTable.pos.x = hashTable.pos.x + Math.floor(spaceXhalf * contents.length * elasticity);
                }
                hashTable.pos.y = hashTable.pos.y + spaceY;
            }
            hashTable.pos.y = posY;
        }
    }
    if ((existsAtMisc(jsonMath.index)) && ((!recursionFlag) || (!existsAtMisc(recursionFlag)))) {
        // jsonMath.highlightControllers[Object.keys(jsonMath.highlightControllers)[jsonMath.index]].animations.play("blink");
        jsonMath.textControllers[Object.keys(jsonMath.textControllers)[jsonMath.index]].addColor("#ffff88", 0);
    }
    return {
        "x": hashTable.pos.x,
        "y": hashTable.pos.y
    };
}
