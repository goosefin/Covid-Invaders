//landing page is removed
const landingPageRemoval = () => {
    let startPage = document.querySelector('#start-page')
    startPage.remove()
}

//player input page
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

//event listeners
document.querySelector('#start-button').addEventListener('click',landingPageRemoval)
document.querySelector('#start-button').addEventListener('click',playerInputPage)
document.querySelector('#player-info').addEventListener('click',function(e){
    if(e.target && e.target.id == 'game-button'){
        instructionsPage()
    }
})