const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 4 ;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
  ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame/staggerFrames) % 11;
  frameX = spriteWidth * position;
  ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  if (gameFrame % staggerFrames == 0 ) {
    if (frameX < 6)  frameX++;
    else frameX = 0;
  }
  gameFrame++
  requestAnimationFrame(animate);
};
animate();
