   var balloon;
   var backgroundImg;
   var balloonImg;
   var database;

   function preload(){
   backgroundImg=loadImage("img1.png")
   balloonImg=loadAnimation("img2.png","img3.png","img4.png");
   }

   function setup() {
   createCanvas(1000,600);

   database=firebase.database();

   balloon = createSprite(100, 485, 20, 20);
   balloon.addAnimation("balloon",balloonImg);
   balloon.scale=0.5;
   }

   function draw() {
   background(backgroundImg); 

   if(keyDown(LEFT_ARROW)){
   balloon.x = balloon.x -10;
   }

   else if(keyDown(RIGHT_ARROW)){
   balloon.x =balloon.x +10;
   }

   else if(keyDown(UP_ARROW)){
   balloon.y=balloon.y-10;
   }

   else if(keyDown(DOWN_ARROW)){
   balloon.y=balloon.y+10;
   } 

   drawSprites();
   }

