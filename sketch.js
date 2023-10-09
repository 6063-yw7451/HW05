// let mapImg;
let treeCensusTable;
let colors;

function preload() {
  // mapImg = loadImage("assets/New_York_Map.png");

  // Get the tree census in the database
  let url =
    "https://dm-gy-6063-2023f-d.github.io/assets/homework/05/Tree-Census-2015/Tree-Census-2015.json";
  treeCensusTable = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  // mapImg.resize(width, height);
  
  // Color values representing different levels of health
  colors = ["#007f5f", "#eeef20", "#ff0000"];

  noLoop();
}

function draw() {
  // image(mapImg, 0, 0, width, height);
  // draw the background
  background("#faf3dd");
  noStroke();

  // title
  fill("#1a1a1a");
  textAlign(CENTER, CENTER);
  textSize(48);
  text("Data Visualization of Tree Census", width / 2, 70);
  textSize(24);
  fill("#999999");
  text("in New York City in 2015", width / 2, 120);
  
  // Change the transparency of colors
  let color0 = color(colors[0]);
  color0.setAlpha(120);
  let color1 = color(colors[1]);
  color1.setAlpha(120);
  let color2 = color(colors[2]);
  color2.setAlpha(120);

  // Get the latitude/longitude and health of the tree out of the loaded JSON,
  // and map the obtained data onto the canvas
  for (let i = 0; i < 65214; i++) {
    // position
    let from_long = treeCensusTable[i].longitude;
    let from_lat = treeCensusTable[i].latitude;
    // health
    let health = treeCensusTable[i].health;
    
    // Fill in different color values for different levels of health
    if (health == "Good") {
      fill(color0);
    }

    if (health == "Fair") {
      fill(color1);
    }

    if (health == "Poor") {
      fill(color2);
    }
    
    // map the longitude and latitude of trees onto the canvas
    let treeX = map(
      from_long,
      -74.26949507385981,
      -73.68907362977081,
      0,
      width
    );
    let treeY = map(from_lat, 40.98012880266292, 40.49076811505618, 0, height);

    circle(treeX, treeY, 3);
  }

  // legend
  // rects
  fill(colors[0]);
  rect(width - 150, height - 120, 30, 20, 5);
  fill(colors[1]);
  rect(width - 150, height - 80, 30, 20, 5);
  fill(colors[2]);
  rect(width - 150, height - 40, 30, 20, 5);
  
  // text
  fill("#999999");
  textAlign(LEFT, CENTER);
  textSize(14);
  text("Good", width - 120, height - 120);
  text("Fair", width - 120, height - 80);
  text("Poor", width - 120, height - 40);
}
