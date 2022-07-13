//LANDING PAGE IS REMOVED
const landingPageRemoval = () => {
    let startPage = document.querySelector('#start-page')
    startPage.remove()
}

//PLAYER INPUT PAGE IS CREATED
const playerInputPage = () => {
    let parentDiv = document.querySelector('#player-info')
    let player1 = document.createElement('p')
    player1.innerText = 'Player 1:'
    let player1Input = document.createElement('input')
    player1Input.setAttribute('id','player-one-name')
    parentDiv.appendChild(player1)
    parentDiv.appendChild(player1Input)
    let player2 = document.createElement('p')
    player2.innerText = 'Player 2:'
    let player2Input = document.createElement('input')
    player2Input.setAttribute('id','player-two-name')
    parentDiv.appendChild(player2)
    parentDiv.appendChild(player2Input)
    let gameButton = document.createElement('button')
    gameButton.innerText = 'NEXT'
    gameButton.setAttribute('id','game-button')
    parentDiv.append(gameButton)
    // const player1Name = document.getElementById('player-one-name').value
    // const player2Name = document.getElementById('player-two-name').value
}

//PLAYER PAGE IS REMOVED AND INSTRUCTIONS PAGE IS CREATED
const instructionsPage = () => {
    let parentDiv = document.querySelector('#player-info')
    parentDiv.remove()
    let rulesHeading = document.createElement('p')
    rulesHeading.setAttribute('id','rules-heading')
    document.getElementById('instructions').appendChild(rulesHeading)
    rulesHeading.innerText = 'How To Play'
    let rules = document.createElement('p')
    document.getElementById('instructions').appendChild(rules)
    rules.innerText = 'Rounds are 90 seconds \n Player 1 moves with left and right arrows and shoots with right shift key \n Player 2 moves with A and D keys and shoots with left shift key \n Red covid cells are worth 1 point, blue cells are 5 points and green cells are 10 points \n Player with the highest score wins!'
    let button = document.createElement('button')
    button.setAttribute('id','enter-button')
    document.getElementById('instructions').appendChild(button)
    button.innerText = 'ENTER'
}

const gamePage = () => {
    let instructions = document.querySelector('#instructions')
    instructions.remove()
    let gameDiv = document.querySelector('#game-play')
    let player1Name = document.createElement('p')
    player1Name.innerText = 'Player 1: Name'
    gameDiv.appendChild(player1Name)
    let timer = document.createElement('p')
    timer.innerText = 'Timer'
    gameDiv.appendChild(timer)
    let player2Name = document.createElement('p')
    player2Name.innerText = 'Player 2: Name'
    gameDiv.appendChild(player2Name)
    let gameScreen = document.createElement('div')
    gameScreen.setAttribute('id', 'game-screen')
    document.body.appendChild(gameScreen)
    let background = document.createElement('img')
    background.setAttribute('src','https://i.imgur.com/Yn7VME9.gif')
    background.setAttribute('id','background')
    gameScreen.appendChild(background)
    let player1Icon = document.createElement('img')
    let player2Icon = document.createElement('img')
    player1Icon.setAttribute('src','https://i.imgur.com/7JYiWHR.png')
    player1Icon.setAttribute('id','player-1-icon')
    gameScreen.appendChild(player1Icon)
    player2Icon.setAttribute('src','https://i.imgur.com/hccAmLb.png')
    player2Icon.setAttribute('id','player-2-icon')
    gameScreen.appendChild(player2Icon)
}

const player1KeyCodes =['ArrowLeft', 'ArrowRight','ShiftRight']
const player2KeyCodes =['KeyA', 'KeyD','ShiftLeft']

class Hero {
    constructor(playerName){
        this.score = 0
        this.playerName = playerName
    }
    moveLeft(){

    }
    moveRight(){

    }
    shoot(){
        
    }
}

class Enemy {
    constructor(){
        this.points = [1,5,10]
    }
    move(){

    }
}

const aTest = () => {
    console.log('A Key Test')
}
const dTest = () => {
    console.log('D Key Test')
}
const leftShiftTest = () => {
    console.log('Left Shift Key Test')
}
const leftArrowTest = () => {
    console.log('Left Arrow Key Test')
}
const rightArrowTest = () => {
    console.log('Right Arrow Key Test')
}
const rightShiftTest = () => {
    console.log('Right Shift Key Test')
}

//EVENT LISTENERS
document.querySelector('#start-button').addEventListener('click',landingPageRemoval)
document.querySelector('#start-button').addEventListener('click',playerInputPage)
//the element was created dynamically so I had to use event delegation
document.querySelector('#player-info').addEventListener('click',function(e){
    if(e.target && e.target.id == 'game-button'){
        instructionsPage()
    }
})
document.querySelector('#instructions').addEventListener('click',function(e){
    if(e.target && e.target.id == 'enter-button'){
        gamePage()
    }
})

//keyboard event listener
window.addEventListener('keydown', function(e){
    if(e.code == 'KeyA'){
        aTest()
    }
    if(e.code == 'KeyD'){
        dTest()
    }
    if(e.code == 'ShiftLeft'){
        leftShiftTest()
    }
    if(e.code == 'ArrowLeft'){
        leftArrowTest()
    }
    if(e.code == 'ArrowRight'){
        rightArrowTest()
    }
    if(e.code == 'ShiftRight'){
        rightShiftTest()
    }
})