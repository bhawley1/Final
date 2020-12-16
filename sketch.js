let b;
let h;
let t = 0; 

function preload(){
  sound = loadSound('ClassicMagicTY.mp3');
}

function setup() {
  let cnv = createCanvas(960, 540);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  colorMode (HSL, 360);
  background(b, 191, 83, 10);
  textAlign(CENTER);
  text('tap to play', width/2, 20);
  noStroke();
  colorMode (HSL, 360); // changes color mode to hue, sat, brightness. 360 is max
  fill(h, 248, 169);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 275
    );
  //ellipse(width/2, height/2, size, size);
  for (let x = 0; x <= (width+18); x = x + 55) { // 55 creates the width between each wiggle worm
    for (let y = 0; y <= (height+18); y = y + 18) { // 18 creates height between each wiggle worm
      
      const yAngle = map(0, 0, height, 13, 160, true);
      const xAngle = map(0, 0, width, 29, 200);
      const angle = yAngle * (y / height) + xAngle * (x / width);
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
    
      ellipse(myX, myY, size, size); // draw wiggle worm, 15 is diameter in pixels
    }
  }

  if (level > .5) {
    b = 356; // background color
    h = 0; // dot color   
  } else if ( level < .5 && level >= .45){
    b = 270; // background color
    h = 330; // dot color 
  } else if ( level < .45 && level >= .4){
    b = 270; // background color
    h = 300; // dot color  
  } else if ( level < .4 && level >= .3){
    b = 270; // background color
    h = 270; // dot color 
  } else if ( level < .3 && level >= .25){
    b = 316; // background color
    h = 240; // dot color 
  } else if ( level < .2 && level >= .15) {
    b = 283; // background color
    h = 210; // dot color 
  } else if ( level < .15 && level >= .1){
    b = 270; // background color
    h = 210; // dot color  
  } else if ( level < .1 && level >= .05){
    b = 270; // background color
    h = 180; // dot color    
  } else {
    b = 253; // background color
    h = 150; // dot color 
  }
  t = t + 0.0089;

}

function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}