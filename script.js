//var definitions

var timer = document.getElementById("timer");
var currentTime = 60;
var startBtn = document.getElementById("start");
var titleRem = document.getElementById("Title");
var quizQ = document.getElementById("quiz");
var questionPrompt = document.getElementById("question-prompt");
var choices = document.getElementById("choices");
var scores = document.getElementById("ScoresHead");
var index = 0;
var timerDown;
var saved = [];
var questions = [
  {
    question: "Which of the following is NOT a primitive value?",
    options: ["Null", "Boolean", "String", "Sound"],
    correct: "Sound",
  },
  {
    question: "What element of HTML is not seen by the user?",
    options: ["<body>", "<img>", "<head>", "<div>"],
    correct: "<head>",
  },
  {
    question: "A function can be ended with the statement:",
    options: ["return", "end", "stop", "conclude"],
    correct: "return",
  },
  {
    question: "Which of the following is a common CSS term?",
    options: ["control", "padding", "commit", "function"],
    correct: "padding",
  },
];

//Function Logic

function Countdown() {
  if (currentTime > 0) {
    currentTime--;
    timer.textContent = currentTime;
  }
  if (currentTime <= 0) {
    currentTime = 0;
    endGame();
  }
}

function quizStart() {
  titleRem.setAttribute("class", "hidden");
  quizQ.removeAttribute("class", "hidden");
  nextQ();
  timerDown = setInterval(Countdown, 1000);
  Countdown();
}
function nextQ() {
  questionPrompt.textContent = questions[index].question;

  for (var i = 0; i < questions[index].options.length; i++) {
    var cycle = document.createElement("button");
    var li = document.createElement("li");
    cycle.textContent = questions[index].options[i];
    li.appendChild(cycle);
    choices.append(li);
  }
}

function questionA(event) {
  var pressed = event.target;

  if (!pressed.matches("button")) {
    return;
  }

  if (pressed.textContent !== questions[index].correct) {
    currentTime -= 10;
    timer.textContent = currentTime;
  } else {
    index++;

    if (index <= 3) {
      questionPrompt.innerHTML = "";
      choices.innerHTML = "";
      nextQ();
    } else {
      endGame();
    }
  }
}

function endGame() {
  var highscore = document.createElement("li");
  var name = prompt("Please enter your name");
  var input = name.concat(":   ").concat(currentTime);
  highscore.append(input);
  scores.append(highscore);
  saved.push(input);
  quizQ.setAttribute("class", "hidden");
  titleRem.setAttribute("class", "Title");
  index = 0;
  questionPrompt.innerHTML = "";
  choices.innerHTML = "";
  clearInterval(timerDown);
  currentTime = 60;
  console.log(saved);
  saving();
}

function saving() {
  var arrayS = JSON.stringify(saved);
  localStorage.setItem("scores", arrayS);
}

function loading() {
  var load = localStorage.getItem("scores");
  var reload = JSON.parse(load);

  for (var i = 0; i < reload.length; i++) {
    var loaditems = document.createElement("li");
    var pre = reload[i];
    loaditems.append(pre);
    scores.append(loaditems);
  }
}

//Additional Logic
startBtn.onclick = quizStart;

choices.onclick = questionA;

if (saved.length != 0){
    loading();
}