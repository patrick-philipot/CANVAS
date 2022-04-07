const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 500;

const keys = [];

const player = {
  x: 0,
  y: 0,
  width: 40,
  height: 72,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false,
}

const playerSprite = new Image();
playerSprite.src = "chewie.png";

const background= new Image();
background.src = "background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


function animate() {
  ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(background,0,0, canvas.width, canvas.height);
  drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height)
  movePlayer();
  requestAnimationFrame(animate);
};
animate();

window.addEventListener("keydown", function(e){
  keys[e.key] = true;
  console.log(e);
} );

window.addEventListener("keyup", function(e){
  delete keys[e.key];
} );

function movePlayer(){
  if (keys['ArrowDown']) {
    player.y += player.speed;
  }
  if (keys['ArrowUp']) {
    player.y -= player.speed;
  }
}