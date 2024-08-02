document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = parseInt(Math.random() * 100 + 1);
  const userInput = document.querySelector("#guessField");
  const submit = document.querySelector("#subt");
  const remaining = document.querySelector(".lastResult");
  const guesses = document.querySelector(".guesses");
  const lowHigh = document.querySelector(".lowOrHi");
  const startOver = document.querySelector(".resultParas");

  const para = document.createElement("p");

  let prevGuess = [];
  let numGuess = 1;
  let playGame = true;

  if (playGame) {
    submit.addEventListener("click", function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }
  function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number");
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage("You guesses it right");
      endGame();
    } else if (guess < randomNumber) {
      displayMessage("Number is TOO Low");
    } else if (guess > randomNumber) {
      displayMessage("Number is TOO High");
    }
  }
  function displayGuess(guess) {
    userInput.value = "";
    guesses.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
  }
  function displayMessage(message) {
    lowHigh.innerHTML = `<h2>${message}</h2>`;
  }
  function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    para.classList.add("button");
    para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
  }
  function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guesses.innerHTML = "";
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute("disabled");
      startOver.removeChild(para);
      playGame = true;
    });
  }
});
