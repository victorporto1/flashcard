import questions from './perguntas.js';

 let currentQuestion = 0;

 const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const trueButton = document.getElementById("true-button");
 const falseButton = document.getElementById("false-button");
const restartButton = document.getElementById("restart-button");
const explanationText = document.getElementById("explanation-text");

function displayQuestion() {
if (currentQuestion < questions.length) {
quizContainer.style.display = "block";
startButton.style.display = "none";
questionText.textContent = questions [currentQuestion].question;
explanationText.textContent = " " ;
  } else{
    endQuiz();
  }
}
function endQuiz() {
    quizContainer.style.display = "none";
    restartButton.style.display = "block";
    startButton.style.display = "none";
    explanationText.textContent ="";
}
function restartQuiz() {
    currentQuestion = 0;
    displayQuestion();
    restartButton.style.display = "none" ;
    }