const landingPageRemoval = () => {
    let startButton = document.querySelector('#start-button')
    let h1 = document.querySelector('#game-title')
    startButton.remove()
    h1.remove()
}

document.querySelector('#start-button').addEventListener('click',landingPageRemoval)