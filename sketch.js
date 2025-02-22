
let width = 800
let height = 500

function preload(){
  font = loadFont('Presque.ttf');  
  img1 = loadImage('/Images/graphic.png');
  img2 = loadImage('/Images/graphic2.png')
  img3 = loadImage('/Images/graphic3.png')
}
function setup() {
  createCanvas(width, height);
  const windowW = 220
  const windowH = 230
  window1 = new menuButtons(40,140, windowW, windowH,img1)
  window2 = new menuButtons(width/2-110, 140, windowW, windowH, img2 )
  window3 = new menuButtons(535, 140, windowW, windowH, img3)

}
function drawGrid(){
  //draws the grid with instances from squares
  for(i = -10; i < width; i+=35){
    for(x=-10; x<height; x+=35){
      let rects = new Square(i, x);
      rects.lightUp();  
      rects.show();
    }
  }
}

function drawTitle(){
  //titlerect -front
  fill(47,144,218)
  rect(width/2 - 120, 30, 250, 90, 20);
  
  //titlerect-back
  fill(255)
  rect(width/2 - 125, 25, 250, 90, 20);
  
   //title
  textFont(font)
  textSize(25)
  fill(111, 182, 237)
  text('CHEMISTRY', width/2-88, 65)
  text('SIMULATIONS', 305, 100)
  fill(7, 52, 67)
  textSize(24)
  text('CHEMISTRY', width/2-85, 65)
  text('SIMULATIONS', 308, 100)

}
function draw() {

  background(111,182,237);
  drawGrid()
  drawTitle()

  //display the buttons
  window1.hover()
  window2.hover()
  window3.hover()
  
  link()
 
}

function link(){
  //link simulations to the windows when pressed
  if (window1.isPressed()){
    window.location.href = "neutralization.html";
  } else if (window2.isPressed()){
    window.location.href = "indicator.html";
  } else if(window3.isPressed()){
    window.location.href = "pack.html"
  }
 
}


class Square{
  constructor(x,y){
    this.x = x   //position
    this.y = y   //on screen
    this.w = 30  //width of square

  }
  show(){
    stroke(100)
    rect(this.x, this.y, this.w, this.w)
  }
  lightUp(){
    if (mouseX > this.x && mouseX < this.x + this.w && 
        mouseY > this.y && mouseY < this.y + this.w) {
      fill(255, 229, 153);  // Change fill when mouse is over the squares
    } else {
      fill(111,182,237);  // Default fill
    }
  }
}

class menuButtons extends buttons{
  constructor(x,y,w,h,img){
     // call the parent class constructor (buttons) 
    // passing x, y, null for label, width, and height
    super(x, y, null, w, h )
    this.w = w
    this.h = h
    this.img = img
  }
  show(){
    fill(47, 144, 218);
    rect(this.x, this.y, this.w, this.h, 10)
    image(this.img, this.x + 10, this.y + 10, this.w - 20, this.h - 20)
  }
  hover(){
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w  &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      fill(255, 229, 153); // Change color on hover
      rect(this.x - 10, this.y - 10, this.w  + 20, this.h + 20, 10); 
      // slighty larger rectangle
      //scaled image
      image(
        this.img,
        this.x - 5,
        this.y - 5,
        this.w + 10,
       this.h + 10
      );
    } else {
      fill(47,144,218); // Default color
      rect(this.x, this.y, this.w, this.h, 10);
      // Draw normal image
      image(
        this.img,
        this.x + 10,
        this.y + 10,
        this.w - 20,
        this.h - 20
      );
    } 
  }
}
