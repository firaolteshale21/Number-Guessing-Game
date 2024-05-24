const answer = document.querySelector("#actual_answer");
const attempt = document.querySelector("#actual_attept");
const userinput = document.querySelector("#userinput");
const guessBtn = document.querySelector("#guess_Btn");
const playagainBtn = document.querySelector("#play_againBtn");
const errorMessage = document.querySelector("#errorMessage");
let attemptCount = 0;
let minValue = 1;
let maxValue = 10;
let running = true;
let answerValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

guessBtn.onclick = function() {
  const userinputvalue = parseInt(userinput.value);

  while (running) {
    if (isNaN(userinputvalue)) {
      userinput.value = "";
      userinput.style.setProperty('--placeholder-color', 'red');
      errorMessage.style.color = 'Red';
      errorMessage.textContent = "Please enter a number";
      break;
    } else if (userinputvalue < minValue || userinputvalue > maxValue) {
        errorMessage.style.color = 'Red';
     userinput.value = "";
      userinput.style.setProperty('--placeholder-color', 'red');
      userinput.placeholder = "Invalid Input";
      errorMessage.textContent = `Enter a Number Between ${minValue} and ${maxValue}`;
      break;
    } else {
      attemptCount++;
      if (userinputvalue > answerValue) {
        errorMessage.textContent = 'Too High, Try Again';
        errorMessage.style.color = 'Red';
        break;
      } else if (userinputvalue < answerValue) {
        errorMessage.textContent = 'Too Low, Try Again';
        errorMessage.style.color = 'Blue';
        break;
      } else {
        errorMessage.innerHTML = "Congratulations! Your Guess is Correct.<br>Click to Play Again";
        errorMessage.style.color = 'green';
        answer.style.display = 'inline';
        answer.textContent = answerValue;
        attempt.textContent = attemptCount;
        running = false;
      }
    }
  }
};

playagainBtn.onclick = function() {
  running = true;
  errorMessage.innerHTML = '';
  answer.textContent = '';
  attempt.textContent = '';
  userinput.value = '';
  attemptCount = 0;
  answerValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  userinput.placeholder = "Enter a number" ; 
  userinput.style.setProperty('--placeholder-color', 'black');
};

function add(x,y){
  let sum = x+y;
  return sum;
}
console.log(add(1,3));