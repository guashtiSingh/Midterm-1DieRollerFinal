/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "rollButton", src: "assets/images/rollButton.png" },
    { id: "one", src: "assets/images/one.png" },
    { id: "two", src: "assets/images/two.png" },
    { id: "three", src: "assets/images/three.png" },
    { id: "four", src: "assets/images/four.png" },
    { id: "five", src: "assets/images/five.png" },
    { id: "six", src: "assets/images/six.png" },
    { id: "clicked", src: "assets/audio/clicked.wav" }
];
// Game Variables
var die1Label; // create a reference
var die2Label;
//Roll Button
var rollButton;
//Dice faces
var one;
var two;
var three;
var four;
var five;
var six;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    stage.update();
    stats.end(); // end measuring
}
// Callback function that allows me to respond to button click events
function pinkButtonClicked(event) {
    createjs.Sound.play("clicked");
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    for (var rolls = 0; rolls <= 6; rolls++) {
        //Die 1
        if (die1 == 1) {
            one = new createjs.Bitmap(assets.getResult("one")); //one image
            one.x = 100;
            one.y = 170;
            stage.addChild(one);
            stage.removeChild(die1Label); // remove previous label
            die1Label = new createjs.Text("1", "16px Consolas", "#000000"); //Label
            die1Label.x = 120;
            die1Label.y = 230;
            stage.addChild(die1Label);
        }
        else if (die1 == 2) {
            two = new createjs.Bitmap(assets.getResult("two")); // two image
            two.x = 100;
            two.y = 170;
            stage.addChild(two);
            stage.removeChild(die1Label); // remove label
            die1Label = new createjs.Text("2", "16px Consolas", "#000000"); //Label
            die1Label.x = 120;
            die1Label.y = 230;
            stage.addChild(die1Label);
        }
        else if (die1 == 3) {
            three = new createjs.Bitmap(assets.getResult("three"));
            three.x = 100;
            three.y = 170;
            stage.addChild(three);
            stage.removeChild(die1Label);
            die1Label = new createjs.Text("3", "16px Consolas", "#000000");
            die1Label.x = 120;
            die1Label.y = 230;
            stage.addChild(die1Label);
        }
        else if (die1 == 4) {
            four = new createjs.Bitmap(assets.getResult("four"));
            four.x = 100;
            four.y = 170;
            stage.addChild(four);
            stage.removeChild(die1Label);
            die1Label = new createjs.Text("4", "16px Consolas", "#000000");
            die1Label.x = 120;
            die1Label.y = 230;
            stage.addChild(die1Label);
        }
        else if (die1 == 5) {
            five = new createjs.Bitmap(assets.getResult("five"));
            five.x = 100;
            five.y = 170;
            stage.addChild(five);
            stage.removeChild(die1Label);
            die1Label = new createjs.Text("5", "16px Consolas", "#000000");
            die1Label.x = 120;
            die1Label.y = 230;
            stage.addChild(die1Label);
        }
        else {
            six = new createjs.Bitmap(assets.getResult("six"));
            six.x = 100;
            six.y = 170;
            stage.addChild(six);
            stage.removeChild(die1Label);
            die1Label = new createjs.Text("6", "16px Consolas", "#000000");
            die1Label.x = 120;
            die1Label.y = 230;
            stage.addChild(die1Label);
        }
    }
    for (var roll2 = 0; roll2 <= 6; roll2++) {
        if (die2 == 1) {
            one = new createjs.Bitmap(assets.getResult("one"));
            one.x = 200;
            one.y = 170;
            stage.addChild(one);
            stage.removeChild(die2Label);
            die2Label = new createjs.Text("1", "16px Consolas", "#000000");
            die2Label.x = 220;
            die2Label.y = 230;
            stage.addChild(die2Label);
        }
        else if (die2 == 2) {
            two = new createjs.Bitmap(assets.getResult("two"));
            two.x = 200;
            two.y = 170;
            stage.addChild(two);
            stage.removeChild(die2Label);
            die2Label = new createjs.Text("2", "16px Consolas", "#000000");
            die2Label.x = 220;
            die2Label.y = 230;
            stage.addChild(die2Label);
        }
        else if (die2 == 3) {
            three = new createjs.Bitmap(assets.getResult("three"));
            three.x = 200;
            three.y = 170;
            stage.addChild(three);
            stage.removeChild(die2Label);
            die2Label = new createjs.Text("3", "16px Consolas", "#000000");
            die2Label.x = 220;
            die2Label.y = 230;
            stage.addChild(die2Label);
        }
        else if (die2 == 4) {
            four = new createjs.Bitmap(assets.getResult("four"));
            four.x = 200;
            four.y = 170;
            stage.addChild(four);
            stage.removeChild(die2Label);
            die2Label = new createjs.Text("4", "16px Consolas", "#000000");
            die2Label.x = 220;
            die2Label.y = 230;
            stage.addChild(die2Label);
        }
        else if (die2 == 5) {
            five = new createjs.Bitmap(assets.getResult("five"));
            five.x = 200;
            five.y = 170;
            stage.addChild(five);
            stage.removeChild(die2Label);
            die2Label = new createjs.Text("5", "16px Consolas", "#000000");
            die2Label.x = 220;
            die2Label.y = 230;
            stage.addChild(die2Label);
        }
        else {
            six = new createjs.Bitmap(assets.getResult("six"));
            six.x = 200;
            six.y = 170;
            stage.addChild(six);
            stage.removeChild(die2Label);
            die2Label = new createjs.Text("6", "16px Consolas", "#000000");
            die2Label.x = 220;
            die2Label.y = 230;
            stage.addChild(die2Label);
        }
    }
}
// Mouseover event
function pinkButtonOver() {
    rollButton.alpha = 0.8;
}
// Mouseout event
function pinkButtonOut() {
    rollButton.alpha = 1.0;
}
// Our Main Game Function
function main() {
    console.log("Game is Running");
    rollButton = new createjs.Bitmap(assets.getResult("rollButton"));
    rollButton.regX = rollButton.getBounds().width * 0.5;
    rollButton.regY = rollButton.getBounds().height * 0.5;
    rollButton.x = 160;
    rollButton.y = 270;
    stage.addChild(rollButton);
    rollButton.on("click", pinkButtonClicked);
    rollButton.on("mouseover", pinkButtonOver);
    rollButton.on("mouseout", pinkButtonOut);
}
//# sourceMappingURL=game.js.map