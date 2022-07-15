const player1 = document.getElementById('player-1-icon');
const player2 = document.getElementById('player-2-icon');
const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2')
const canvas3 = document.getElementById('canvas3')
const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d')
const player1Drop = document.querySelector('#blue-drop')
const player2Drop = document.querySelector('#red-drop')
const dropArray = []

const firstPlayer = {
    w:100,
    h:100,
    x:0,
    y:550,
    speed: 5,
    dx: 0,
    dy: 0,
}

function drawPlayer() {
    ctx.drawImage(player1, firstPlayer.x, firstPlayer.y, firstPlayer.w, firstPlayer.h)
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPos(){
    firstPlayer.x += firstPlayer.dx;
    firstPlayer.y += firstPlayer.dy;
    detectWalls()
}

function detectWalls(){
    //Left wall
    if(firstPlayer.x < 0){
        firstPlayer.x = 0
    }
    //Right wall
    if(firstPlayer.x + firstPlayer.w > canvas.width){
        firstPlayer.x = canvas.width - firstPlayer.w
    }
}

function update() {
    clear()
    drawPlayer()
    newPos()
    requestAnimationFrame(update)
}

function moveRight(){
    firstPlayer.dx = firstPlayer.speed
}

function moveLeft(){
    firstPlayer.dx = -firstPlayer.speed
}

function keyDown(e){
    if(e.code === 'KeyD'){
        moveRight()
    }else if(e.code === 'KeyA'){
        moveLeft()
    }
}

function keyUp(e){
    if(e.code === 'KeyD' || e.code === 'KeyA'){
        firstPlayer.dx = 0;
        firstPlayer.dy = 0;
    }
}

update()
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

// --------------------- SECOND PLAYER ---------------------//
const secondPlayer = {
    w:100,
    h:100,
    x:1000,
    y:550,
    speed: 5,
    dx: 0,
    dy: 0,
}

function drawPlayer2() {
    ctx2.drawImage(player2, secondPlayer.x, secondPlayer.y, secondPlayer.w, secondPlayer.h)
}

function clear2(){
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)
}

function newPos2(){
    secondPlayer.x += secondPlayer.dx;
    secondPlayer.y += secondPlayer.dy;
    detectWalls2()
}

function detectWalls2(){
    //Left wall
    if(secondPlayer.x < 0){
        secondPlayer.x = 0
    }
    //Right wall
    if(secondPlayer.x + secondPlayer.w > canvas2.width){
        secondPlayer.x = canvas2.width -secondPlayer.w
    }
}

function update2() {
    clear2()
    drawPlayer2()
    newPos2()
    requestAnimationFrame(update2)
}

function moveRight2(){
    secondPlayer.dx = secondPlayer.speed
}

function moveLeft2(){
    secondPlayer.dx = -secondPlayer.speed
}

function keyDown2(e){
    if(e.key === 'ArrowRight'){
        moveRight2()
    }else if(e.key === 'ArrowLeft'){
        moveLeft2()
    }
}

function keyUp2(e){
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
        secondPlayer.dx = 0;
        secondPlayer.dy = 0;
    }
}

class Drop {
    constructor(image, x){
        this.image = ctx3.drawImage(player1Drop, this.x, this.y, this.w, this.h)
        this.x = x
        this.y = 550
        this.w = 50
        this.h = 50
        this.dy = 0
        this.dx = 0
        this.speed = 5
    }
    drawDrop(){
        ctx3.drawImage(player1Drop, this.x, this.y, this.w, this.h)
    }
    clearDrop(){
        ctx3.clearRect(0, 0, canvas.width, canvas.height)
    }
    dropUpdate(){
        clearDrop()
        drawDrop()
        requestAnimationFrame(dropTest)
    }
    moveDrop(){
        this.y -= this.speed
    }
    shoot(player){
        clearDrop()
        drawDrop()
        requestAnimationFrame(dropTest)
        if(player.x === 1000){
            this.x = player.x - 15
        }else{
            this.x = player.x
        }
        setInterval(this.moveDrop,10)
    }
}

const shotCheck = (e) => {
    if(e.code === 'ShiftRight'){
        const drop = new Drop ('https:://i.imgur.com/KqKypNk.png',firstPlayer.x)
        dropArray.push(drop)
        setInterval(drop.moveDrop,10)
    }
}

// const firstDrop = {
//     x: 30,
//     y: 550,
//     w: 40,
//     h: 40,
//     dx: 0,
//     dy: 0,
//     speed: 5,
// }

// function drawDrop(){
//     ctx3.drawImage(player1Drop, firstDrop.x, firstDrop.y, firstDrop.w, firstDrop.h)
// }

// function clearDrop(){
//     ctx3.clearRect(0, 0, canvas.width, canvas.height)
// }

// const dropTest = () => {
//     clearDrop()
//     drawDrop()
//     requestAnimationFrame(dropTest)
// }

// const moveDrop = () => {
//     firstDrop.x = firstPlayer.x
//     firstDrop.y -= firstDrop.speed
// }

// const moveWithPlayer = () =>{
//     firstDrop.x = firstPlayer.x + 30
// }
// setInterval(moveWithPlayer,1);

// const shotCheck = (e) => {
//     setInterval(()=>{
//         if(e.code === 'ShiftRight'){
//             moveDrop()
//         }
//     })
// }


//setInterval(moveDrop,10)
//dropTest()

update2()
document.addEventListener('keydown', keyDown2)
document.addEventListener('keyup', keyUp2)

document.addEventListener('keydown',shotCheck)

