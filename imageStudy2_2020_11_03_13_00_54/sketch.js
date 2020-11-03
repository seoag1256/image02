let img;
var a;
function setup() {
  createCanvas(400, 400);
  img= loadImage("01.jpg");
  a = 0;
}

// function draw() {
//   if(mouseIsPressed){
//     image(img, 0, 0);
//   }else{
//     background(255);
//   }
// }

 function draw() {
   if(a == 0+10){
     background(255);
     image(img, 0, 0);
  }
  if(a == 1){
    background(255);
    image(img, width/2, 0);
  }
   if(a == 2){
    background(255);
    image(img, width/2, height/2);
  }
   if(a == 3){
    background(255);
    image(img, width/4, 0);
  }
   if(a == 4){
    background(255);
    image(img, width/2, height/4);
  }
   if(a == 5){
    background(255);
    image(img, width/4, height/2);
  }

}

// function mouseIsPressed(){
  
  
// }