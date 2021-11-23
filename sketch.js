var bow , arrow,  background, rojo, verde, rosa, azul;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage =  loadImage("pink_balloon0.png");
  blue_balloonImage =  loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background();
  //mover el fondo
    scene.velocityX = -3;

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover el arco
  bow.y = World.mouseY;
  
   //liberar la flecha al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //cambiar el valor de los globos aleatorios a 4 
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1:redBalloon();
    break;
    case 2:blueBalloon();
    break;
    case 3:greenBalloon();
    break;
    case 4:pinkBalloon(); 
    break;
    default:break;

  }}
  
  drawSprites();
}

function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var rojo = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rojo.addImage(red_balloonImage);
  rojo.velocityX = 3;
  rojo.lifetime = 150;
  rojo.scale = 0.1;

}

function blueBalloon() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(blue_balloonImage);
  azul.velocityX = 3;
  azul.scale = 0.1;
  azul.lifetime = 150;
} 

function greenBalloon() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(green_balloonImage);
  verde.velocityX = 3;
  verde.scale = 0.1;
  verde.lifetime = 150;
}
function pinkBalloon() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(pink_balloonImage);
  rosa.velocityX = 3;
  rosa.scale = 0.1;
  rosa.lifetime = 150;
}
//crear flechas para el arco
 

