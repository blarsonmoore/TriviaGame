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

var allQuestions = [{
  question: 'What is 1+1?',
  choices: ['0', '1', '2', '3'],
  correctAnswer: 2
},
{
  question: 'What is 2+2?',
  choices: ['1', '2', '3', '4'],
  correctAnswer: 3
},
{
  question: 'What is 3+3?',
  choices: ['3', '5', '6', '7'],
  correctAnswer: 2
},
{   
  question: 'What is 3-3?',
  choices: ['0', '1', '2', '3'],
  correctAnswer: 0
}];

//Reference to tags
var questionTitle = document.getElementById('mainQuestion');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');

//Initiating some variables
var i = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;

function populateQuestion() {}