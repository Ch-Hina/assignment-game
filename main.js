

let randomNumber = Math.floor( Math.random() * 100) + 1;
const submitButtom = document.getElementById('submit');
const guessInput = document.getElementById('guess');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

submitButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value) 

    if(userGuess < 1 || userGuess > 100 || !userGuess){
        message.textContent = 'Please enter a number between 1 and 100';
        return;
    }

    if(userGuess > randomNumber  ) {
        message.textContent = 'Too high! Try again.' ;
        message.style.color ="red";
    }
    if( userGuess < randomNumber) {
        message.textContent = 'Too low Try again   ';
        message.style.color ="red";
    }
    if(randomNumber === userGuess) {
        message.textContent = 'Congratulation! you guessed it right';
        message.style.color ="green";
    }
});
    resetButton.addEventListener('click', () =>{

        guessInput.value=""
        message.textContent=""
    })