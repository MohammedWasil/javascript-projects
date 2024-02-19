
(function(){
    const userInput = document.querySelector('.user-input')
    const form = document.querySelector('.form')
    const result = document.querySelector('.result')
    const allGuesses = document.querySelector('.all-guesses')
    const submitbtn = document.querySelector('.submit-btn')
    const startGamebtn = document.querySelector('.start-game-btn');

const allGuessesArray = []
let randomNumber = Math.round(Math.random() * 100)

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if(userInputValue < randomNumber){
       result.innerText = 'Too low!'
    } else if(userInputValue > randomNumber){
       result.innerText = 'Too high!'
    }else{
        result.innerText = 'You it! Congrats'
        startGamebtn.disabled = false
        submitbtn.disabled = true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your guesses: ' + allGuessesArray.join(', ')
    form.reset()
})

startGamebtn.addEventListener('click', () => {
    result.innerText = ''
    allGuesses.innerText = ''
    startGamebtn.disabled = true
    submitbtn.disabled = false
    randomNumber = Math.round(Math.random() * 100)
})
})();