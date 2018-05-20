var startScreen;
var gameHTML;
var counter = 10;
var questionArray = ["What is 3 + 3?", "What is 9 / 3?", "What is 3 x 4?", "What is 7 - 3?", "What is 6 x 6?", "What is 36 / 6?", "What is 12 - 7?", "What is 5 x 4?"];
var answerArray = [["2", "3", "4", "6"], ["3", "1", "9", "6"], ["16", "14", "12", "10"], ["6", "3", "4", "2"], ["63", "22", "33", "36"], ["6", "3", "9", "7"], ["7", "5", "2", "4"], ["30", "25", "15", "20"]];
var correctAnswers = ["D. 6", "A. 3", "C. 12", "C. 4", "D. 36", "A. 6", "B. 5", "D. 20"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;


$(document).ready(function () {
  function initialScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $(".mainArea").html(startScreen);
  }

  initialScreen();

  //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

  $("body").on("click", ".start-button", function (event) {
    generateHTML();
    timerWrapper();

  });

  $("body").on("click", ".answer", function (event) {
    //answeredQuestion = true;
    selectedAnswer = $(this).text();
    if (selectedAnswer === correctAnswers[questionCounter]) {
      //alert("correct");

      clearInterval(theClock);
      generateWin();
    }
    else {
      //alert("wrong answer!");
      clearInterval(theClock);
      generateLoss();
    }
  }); // Close .answer click

  $("body").on("click", ".reset-button", function (event) {
    resetGame();
  }); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
  unansweredCount++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateWin() {
  correctCount++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateLoss() {
  incorrectCount++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</p>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 4000); //  change to 4000 or other amount
}

function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><button class='first-answer answer bg-success'>A. " + answerArray[questionCounter][0] + "</button><button class='answer bg-success'>B. " + answerArray[questionCounter][1] + "</button><button class='answer bg-success'>C. " + answerArray[questionCounter][2] + "</button><button class='answer bg-success'>D. " + answerArray[questionCounter][3] + "</button>";
  $(".mainArea").html(gameHTML);
}

function wait() {
  if (questionCounter < 7) {
    questionCounter++;
    generateHTML();
    counter = 30;
    timerWrapper();
  }
  else {
    finalScreen();
  }
}

function timerWrapper() {
  theClock = setInterval(tenSeconds, 1000);
  function tenSeconds() {
    if (counter === 0) {
      clearInterval(theClock);
      generateLossDueToTimeOut();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctCount + "</p>" + "<p>Wrong Answers: " + incorrectCount + "</p>" + "<p>Unanswered: " + unansweredCount + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".mainArea").html(gameHTML);
}

function resetGame() {
  questionCounter = 0;
  correctCount = 0;
  incorrectCount = 0;
  unansweredCount = 0;
  counter = 10;
  generateHTML();
  timerWrapper();
}


