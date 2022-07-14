const player1 = document.getElementById('player-1-icon');
const player2 = document.getElementById('player-2-icon');
const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2')
const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const player1Laser = document.querySelector('#blue-drop')
const player2Laser = document.querySelector('#red-drop')

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
    if(e.key === 'ArrowRight'){
        moveRight()
    }else if(e.key === 'ArrowLeft'){
        moveLeft()
    }
}

function keyUp(e){
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
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
    if(e.code === 'KeyD'){
        moveRight2()
    }else if(e.code === 'KeyA'){
        moveLeft2()
    }
}

function keyUp2(e){
    if(e.code === 'KeyD' || e.code === 'KeyA'){
        secondPlayer.dx = 0;
        secondPlayer.dy = 0;
    }
}

const laser1 = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
}

const laser2 = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
}

update2()
document.addEventListener('keydown', keyDown2)
document.addEventListener('keyup', keyUp2)

