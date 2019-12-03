var value = 0;
var music
var monkey;
var maracasa ;
var maracasb;




function setup() {
createCanvas(windowWidth,windowHeight);
monkey = loadImage("./assets/scimmia samba.png");
maracasa = loadImage("./assets/maracas 1-min.png");
maracasb = loadImage("./assets/maracas 2-min.png")
music = loadSound("./assets/maracas.wav");

  setShakeThreshold(10);
 frameRate(15);
}

function draw() {
    background("yellow")
  if (value === 0) {

    imageMode(CENTER);
    image(maracasa, width/2, height/2, maracasa.width/2, maracasa.height/2);
    fill("white");
    textStyle(BOLD)
    textSize(20)
    text('Shake it to play',windowWidth/2,250);
    music.play();
    music.loop();
  } else if (value === 1) {
    background("orange")
    imageMode(CENTER);
    image(maracasb ,width/2, height/2, maracasb.width/2, maracasb.height/2);
    fill("white");
    textStyle(BOLD)
    textSize(20)
    text('keep playing',windowWidth/2,250);
  } else if (value === 2) {
    background("red")
    imageMode(CENTER);
    image(monkey ,width/2, height/2, monkey.width/2, monkey.height/2);
    fill("white");
    textStyle(BOLD)
    textSize(20)
    text('Let us SAMBA',windowWidth/2,250);
    music.stop()
  }
}

function deviceShaken() {
  value = 1;
}

function deviceTurned() {
  if (turnAxis === 'X'){
    value = 2;
  }
}
