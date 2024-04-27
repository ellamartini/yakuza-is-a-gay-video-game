let button;
let music;
let mankiss;
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
  "BIG KISS",
];

function preload() {
  music = loadSound("assets/kiwamimusic.m4a");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");

  button = createButton("click here");
  button.mousePressed(togglePlay);
  button.position(150, 350);
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
  rectMode(CENTER);
  fill("black");
  rect(width / 2, 373, 920, 530);
}
