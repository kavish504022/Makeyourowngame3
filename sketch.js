var score = 0;
const A =["Blue", "Tesla"];
const B = ["Pink","Ford"];
const C = ["Yellow","Ferrari"];
const D = ["Red","BMW"];
const Question = ["What is Kavish's favourite color?", "What is Kavish's favourite car?"];
const Solution = ["A","C"];
var level1,level2,level3,level4,level5; 
var backImg;
var questiback;
var visibility = 255;
var count = 0;
var form;
var gameState = 0;
var backImg2;
var obj;
var result;
var correctImg;
var wrongImg;


function preload()
{
	backImg1 = loadImage("Quizimage.png");
	img = loadImage("apple.png");
	questiback = loadImage("questionimage.png")
	backImg2 = loadImage("backImage2.png")
	correctImg = loadImage("that'sright.png");
	wrongImg = loadImage("try-again.png");
}

function setup() {
	createCanvas(800, 700);

	result = createSprite(350,550)
    result.visible = false;
	 form = new Form();
	 
}

function draw() {
textSize(20);
stroke("black")
strokeWeight(4)
switch(gameState){
case 0 : background(backImg1);
break;
case 1 : background(backImg2);
text(Question[count], 100,100);
}

mystery();
form.display();

drawSprites();
}

function mystery(){
	if(visibility<0)
	visibility = 255;
	visibility = visibility - 5;
	tint(255,visibility);
	image(img,Math.random(100,500),Math.random(100,500));	
}


