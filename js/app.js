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
    gameButton.innerText = 'ENTER'
    gameButton.setAttribute('id','game-button')
    parentDiv.append(gameButton)
    const player1Name = document.getElementById('player-one-name').value
    const player2Name = document.getElementById('player-two-name').value
}


document.querySelector('#start-button').addEventListener('click',landingPageRemoval)
document.querySelector('#start-button').addEventListener('click',playerInputPage)