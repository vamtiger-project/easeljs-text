/*
EaselJs - Text
*/
var canvas;
var stage;
var shape;

function text() {
	var sentence = new createjs.Text();

	sentence.text = "All hail the dawn of the Immortal Vamtiger!";
	sentence.font = "bold 30px Georgia";
	sentence.color = "white";
	sentence.textAlign = "left";
	sentence.lineWidth = canvas.width;
	sentence.lineHeight = 50;


	stage.addChild(sentence);
	stage.update();
}

function draw() {
	text();
}

function setStage() {
	canvas = $("#canvas1")[0];
	canvas.width = 380;
	canvas.height = 480;

	stage = new createjs.Stage(canvas);
};

$(function () {
	setStage();
	draw();
});
