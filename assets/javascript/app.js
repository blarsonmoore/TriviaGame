var timeLeft = 10;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);
var wrong = 0;

function countdown() {
  if (timeLeft == 0) {
    wrong++;
    clearTimeout(timerId);
    alert("You Took Too Long!")
    reset();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}