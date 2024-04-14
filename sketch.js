let button;
let music;
let emojis = [
  "❤️",
  "💕",
  "💖",
  "❣️",
  "💗",
  "😘",
  "😘",
  "😘",
  "😘",
  "😘",
  "😘",
  "BIG KISS",
];

function preload() {
  music = loadSound("assets/kiwamimusic.m4a");
  mankiss = loadImage("images/essenceofmankissFIXED.gif");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  rectMode(CENTER);
  //music.play();
  button = createButton("click here");
  button.mousePressed(togglePlay);
  button.position(150, 300);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function togglePlay() {
  if (!music.isPlaying()) {
    music.loop();

    //"big kiss" text style
    stroke("black");
    strokeWeight(5);
    fill("white");
    textSize(30);
    textFont("Helvetica");
    textStyle(BOLD);

    //randomized background emojis
    for (let x = 0; x <= width; x += 1) {
      text(random(emojis), random(width), random(height));
    }
  } else {
    music.pause();
    redraw();
    background("black");
  }
}

function draw() {
  //gif frame
  fill("black");
  rect(width / 2, height / 2, 920, 520);

  //gif
  imageMode(CENTER);
  image(mankiss, width / 2, height / 2, 900, 500);
}
