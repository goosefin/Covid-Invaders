const player1 = document.getElementById('player-1-icon');
const player2 = document.getElementById('player-2-icon');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const dropArray = [];
// let shoot = false;
let timer = document.querySelector('#timer');

//Sets up timer
let counter = 90
const runTimer = () =>{
    if(counter > 0){
        counter -= 1
        timer.innerText = `Time: ${counter}`
    }
}

//setInterval(runTimer,1000)

//creates the game object
const game = {
    firstPlayer: {
        w:100,
        h:100,
        x:0,
        y:550,
        speed: 5,
        dx: 0,
        dy: 0,
        score: 0
    },
    secondPlayer: {
        w:100,
        h:100,
        x:1000,
        y:550,
        speed: 5,
        dx: 0,
        dy: 0,
        score:0
    }  
}

function drawPlayer() {
    ctx.drawImage(player1, game.firstPlayer.x, game.firstPlayer.y, game.firstPlayer.w, game.firstPlayer.h)
    ctx.drawImage(player2, game.secondPlayer.x, game.secondPlayer.y, game.secondPlayer.w, game.secondPlayer.h)
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    console.log('in clear')
}

function newPos(){
    game.firstPlayer.x += game.firstPlayer.dx;
    game.firstPlayer.y += game.firstPlayer.dy;
    game.secondPlayer.x += game.secondPlayer.dx;
    game.secondPlayer.y += game.secondPlayer.dy;
    detectWalls()
}

function detectWalls(){
    //Left wall
    if(game.firstPlayer.x < 0){
        game.firstPlayer.x = 0
    }
    if(game.secondPlayer.x < 0){
        game.secondPlayer.x = 0
    }
    //Right wall
    if(game.firstPlayer.x + game.firstPlayer.w > canvas.width){
        game.firstPlayer.x = canvas.width - game.firstPlayer.w
        
    }
    if(game.secondPlayer.x + game.secondPlayer.w > canvas.width){
        game.secondPlayer.x = canvas.width - game.secondPlayer.w
    }
}
const animate = () =>{
    for(let bullet of dropArray){
        bullet.update()
        // console.log('in animate')
    }
}

function update() {
    //clear()
    drawPlayer()
    newPos()
    animate()
    requestAnimationFrame(update)
}

function moveRight(player){
    player.dx = player.speed
}

function moveLeft(player){
    player.dx = -player.speed
}

function keyDown(e){
    if(e.code === 'KeyD'){
        moveRight(game.firstPlayer)
    }else if(e.code === 'KeyA'){
        moveLeft(game.firstPlayer)
    }else if(e.code === 'ArrowRight'){
        moveRight(game.secondPlayer)
    }else if(e.code === 'ArrowLeft'){
        moveLeft(game.secondPlayer)
    }
}

function keyUp(e){
    if(e.code === 'KeyD' || e.code === 'KeyA'){
        game.firstPlayer.dx = 0;
        game.firstPlayer.dy = 0;
    }else if(e.code === 'ArrowLeft' || e.code === 'ArrowRight'){
        game.secondPlayer.dx = 0
        game.secondPlayer.dy = 0
    }
}

update()
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

class Bullet {
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 20
    }
    drawBullet(){
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.raduis, 0, Math.PI*2)
        ctx.fillStyle = 'black'
        ctx.fill()
        ctx.closePath()
        //console.log(this.position.y)
    }
    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.drawBullet()
        //console.log('in update')
    }
}

// const dropUpdate = (drop) => {
//     drop.clearDrop()
//     drop.drawDrop()
//     requestAnimationFrame(dropUpdate)
// }



const shotCheck = (e) => {
    if(e.code === 'ShiftLeft'){
        dropArray.push(new Bullet({
            position:{
                x: 300,
                y: 300
            },
            velocity:{
                x:0,
                y: -.02
            }
        }))
        console.log('shot')
        console.log(dropArray)
    }
}

const newBullet = new Bullet({
    position:{
        x: 300,
        y: 300
    },
    velocity:{
        x:0,
        y: -5
    }
})
dropArray.push(newBullet)



const checkWinner = () => {
    if(game.firstPlayer.score > game.secondPlayer.score){
        const winnerPopUp = document.createElement('h2')
        winnerPopUp.innerText='Player 1 Wins!!'
    }else if(game.secondPlayer.score > game.firstPlayer.score){
        const winnerPopUp2 = document.createElement('h2')
        winnerPopUp2.innerText='Player 2 Wins!!'
    }
}


//dropUpdate()
document.addEventListener('keydown',shotCheck)
