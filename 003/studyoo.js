const canvas = document.getElementById('canvas');
const GAME_WIDTH = 800;
const UNIT = 40
const SNAKE_COLOR = 'white';
canvas.width = canvas.height = GAME_WIDTH;
const cxt = canvas.getContext('2d');
const BACKGROUND_COLOR = 'black';
ctx.fillStyle = BACKGROUND_COLOR;
ctx.fillRect(0, 0, GAME_WIDTH, GAME_WIDTH);
const GAME_DELAY = 100
const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40

  
class Vector2d{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
let currentDirection = new Vector2d(-1, 0)
class Snack{
    constructor(){  
        this.body = [
            new Vector2d(UNIT *6, UNIT *3),
            new Vector2d(UNIT *7, UNIT *3),
            new Vector2d(UNIT *8, UNIT *3),
        ]
        this.speed = new Vector2d(-1, 0)
    }
    draw(){ 
        ctx.fillStyle= 'blue'
        ctx.fillRect(this,body[0].x, this.body[0].y , UNIT, UNIT)
        ctx.fillStyle= SNAKE_COLOR
        for(let i = 1; i < this.body.length; i++){
            ctx.fillRect(this,body[i].x, this.body[i].y , UNIT, UNIT)

        }
    }
    clear(){ 
        ctx.fillStyle= BACKGROUND_COLOR
        ctx.fillRect(this,body[0].x, this.body[0].y , UNIT, UNIT)
        ctx.fillStyle= SNAKE_COLOR
        for(let i = 1; i < this.body.length; i++){
            ctx.fillRect(this,body[i].x, this.body[i].y , UNIT, UNIT)

        }
    }
    move (){
        this.clear()
        for(let i =this.body.length -1; i>= 1; i--)
        {
            this.body[i].x = this.body[i-1].x
            this.body[i].y = this.body[i-1].y
        }
        this.body[0].x += this.speed.x* UNIT
        this.body[0].y += this.speed.y* UNIT
        this.draw()

    }
}
class food{
    constructor(x,y){
        this.x = x
        this.y = y


    }
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, UNIT, UNIT)
    }
    clear(){
        ctx.fillStyle = BACKGROUND_COLOR
        ctx.fillRect(this.body[0].x, this.body[0].y,UNIT,UNIT)
        ctx.fillStyle = BACKGROUND_COLOR
        for ( let i = 0; i < this.body.length; i++ ){
        ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT)
    }
    }
    handleBound (){
        let head = this.body[0]
if (head.x){
    }
    getRandomNumber(){
       
        let randomNumber =  Math.floor(Math.random() * GAME_WIDTH )
        randomNumber -= randomNumber % UNIT
    }
    spawn (){
this.clear()
this.x = this.getRandomNumber()
this.y = this.getRandomNumber()
this.draw()
    }
    checkEat(food){
        let head = this.body[0]
      return food.x === head.x && food.y === head.y
    }
    move(){
        this.clear()
        for(let i= this.body.length - 1; i >= 0; i--) {
            this.body[i].x = this.body[i-1].x
            this.body[i].y = this.body[i-1].y
        }
        this.body[0].x += this.speed.x * UNIT
        this.body[0].y += this.speed.y * UNIT
        this.draw()

    }
    grow(){
        this.clear()
      
        let snakeLength = this.body.length
        let mountX = this.body[snakeLength -1].x - this.body[snakeLength -2].x
        let mountY = this.body[snakeLength -1].y - this.body[snakeLength -2].y

        let newPart = new Vector2d(
            this.body[snakeLength -1].x + mountX,
            this.body[snakeLength -1].y + mountY,


            )
            this.body.push(newPart)
            this.draw()
    }
}

let player = new Snack()
player.draw()
let food = spawn()
food.spawn

setInterval(()=>{
player.move()
if (player.checkEat(food)) {
    player.grow()
    food.spawn()
}
}, 200);
document.onkeydown = function (e) {
switch (e.keyCode) {
    case LEFT:
        if ( currentDirection.x=== 1) break
        player.speed = new Vector2d(-1, 0)
       currentDirection = new Vector2d(-1, 0)
        break;
        case RIGHT:
        if ( currentDirection.x=== -1) break

            player.speed = new Vector2d(1, 0)
           currentDirection = new Vector2d(1, 0)
        break;

            case UP:
        if ( currentDirection.y=== 1) break

                player.speed = new Vector2d(0, -1)
                currentDirection = new Vector2d(0, -1)
        break;

                case DOWN:
        if ( currentDirection.y=== -1) break

                    player.speed = new Vector2d( 0, 1)
                   currentDirection = new Vector2d( 0, 1)
        break;

}
}
  