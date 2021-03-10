var game;
var stateSelect;
var genreSelect;
var instrumentSelect;
var feeSelect;
var artistSelect;
var clGenreSelect;
var clArtistSelect;
var clInstrumentSelect;
var clStateSelect;
var database;
var creator;
var count = 0;
var allCreators;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);
  database = firebase.database();

  game = new Game();
  creator = new Creator();
  creator.getCount();
}


function draw() {
  background("#f2afbb");

  game.display();

  drawSprites();
 
}



