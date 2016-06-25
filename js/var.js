// func
var func = new Array();

// basic frame
var basicFrame = {};

// user agent
var userAgentInLowerCase;

// font style
var fontfamily = "Arial";
var fontstyleTiny = {font: "12px Arial", fill: "#ffffff"};
var fontstyleSmall = {font: "16px Arial", fill: "#ffffff"};
var fontstyleNormal = {font: "20px Arial", fill: "#ffffff"};
var fontstyleLarge = {font: "24px Arial", fill: "#ffffff"};
var fontstyleHuge = {font: "28px Arial", fill: "#ffffff"};

// game scale
var gameScale = false;

// world
var jsonWorld;

// start
var jsonStart;

// highlight
var jsonHighlight;

// yes, no
var jsonYesNo;

// posessions
// commodities
var jsonItems;

// scene
var sceneId;

// maps
var tileMap;
var jsonMap;
var backgroundLayer;
var decorationLayer;
var collisionLayer;
var objectLayerId;
var foregroundLayer;

// audio
var soundEffects = {};
var backgroundMusics = {};
var currentBackGroundMusicUri = null;
var changeBackgroundMusicFlag = false;

// player
var player;

// virtual buttons
var jsonVirtualButtons;

// keys
var upKey;
var downKey;
var leftKey;
var rightKey;
var oneKey;
var twoKey;
var num1Key;
var num2Key;
var buttonUpIsUp;
var buttonDownIsUp;
var buttonLeftIsUp;
var buttonRightIsUp;
var button1IsUp;
var button2IsUp;

// NPCs
var jsonNpcs;
var npc;
var npcs = {};
var talkNpcIndex;
var distanceX;
var distanceY;
var distanceBetweenPlayerAndNpc;

// guests
var jsonGuests;

// // text
// var textLines = {controllers:[], flag:false};

// talk
var jsonTalk;

// events
var jsonEvents;
var eventTriggerSprites = [];
var eventTriggerTypes = [];
var eventTriggerNames = [];
var eventTriggerFuncs = [];
var eventTriggerJsonArgs = [];
var eventTriggerFlags = [];
var eventsUpdateFlag;

// field
var jsonField;

// math
var jsonMath;
var jsonMatrices;
var maxNum = 10000;
var minNum = -10000;

// battle
var jsonBattle;
var jsonMonsters;
var jsonEnemies = [];

// storage
var temporalData = sessionStorage;
var savedData = localStorage;
var jsonData;
