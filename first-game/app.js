const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //? ctx is short for context

const CANVAS_WIDTH = (canvas.width = 600); //? all caps emphasizes global variable
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575; //? 6876 / 12 = 573 or width of sheet / num of columns
const spriteHeight = 523; //? 5230 / 10 = 523 or height of sheet / num of rows
let frameX = 0; //? Travel through Sprite Sheet HORIZONTALLY
let frameY = 0; //? Travel through Sprite Sheet VERTICALLY
let gameFrame = 0;
const staggerFrames = 5; //? The higher the num, the slower the animation

function animate() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	// ctx.fillRect(100, 50, 100, 100);
	// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) //? s = source d = destination
	ctx.drawImage(
		playerImage,
		frameX * spriteWidth,
		frameY * spriteHeight,
		spriteWidth,
		spriteHeight,
		0,
		0,
		spriteWidth,
		spriteHeight
	);
	if (gameFrame % staggerFrames == 0) { //? Modulo will slow down framerate
		if (frameX < 6) frameX++;
		else frameX = 0;
	}

	gameFrame++
	requestAnimationFrame(animate); //? requesting animate creates the animation loop
}
animate();
