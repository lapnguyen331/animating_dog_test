const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width =800
const CANVAS_HEIGHT = canvas.height = 700
const playerImage = new Image();
const numberOfEnermy = 10;
const enemiesArray = [];
let gameFrame = 0;

const gamespeed = 5
// background
const backgroundLayer1= new Image();
backgroundLayer1.src = 'assets/layer-1.png' // phông đen
const backgroundLayer2= new Image();
backgroundLayer2.src = 'assets/layer-2.png'//khối đám cây
const backgroundLayer3= new Image(); 
backgroundLayer3.src = 'assets/layer-3.png' //mây
const backgroundLayer4= new Image();
backgroundLayer4.src = 'assets/layer-4.png'//block nhà
let x =0;

class Enemy{
    constructor(){
        // random position
      
        this.image = new Image();
        this.image.src ='assets/enemy1.png'
        this.speed = Math.random() * 4 - 2 ; //random speed
        this.spriteWidth =293;
        this.spriteHeight = 155;
        this.width =this.spriteWidth / 2.5;
        this.height =this.spriteHeight / 2.5;
        this.x = Math.random() *(canvas.width -this.width);
        this.y= Math.random() * (canvas.height - this.height);
        this.frame = 0; //số frame xuất hiện
        this.flapSpeed = Math.floor(Math.random()*3+1); //tốc độ vỗ cánh
    }
    update(){
        this.x += Math.random()*5-2.5;
        this.y += Math.random()*5 -2.5;
        //animate sprite
        if(gameFrame % this.flapSpeed ==0){
            this.frame > 4 ? this.frame = 0: this.frame++;
        }

    }
    draw(){
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}
for(let i =0; i< numberOfEnermy; i++){
    enemiesArray.push(new Enemy());
}
function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // ctx.drawImage(backgroundLayer2,x,0) //vẽ background
 
    // enemy1.update();
    // enemy1.draw();
    // enemy2.draw();
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate)
}
animate();