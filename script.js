//var definitions

var timer = document.getElementById("timer");
var currentTime = 60;
var startBtn = document.getElementById("start");
var titleRem = document.getElementById("Title");
var quizQ = document.getElementById("quiz");
var questionPrompt = document.getElementById("question-prompt");
var choices = document.getElementById("choices");
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

function initCheck() {
  let score = document.getElementById("ScoresHead");
  let li = document.createElement("li");
  li.textContent = "No Highscores yet";
  if (score.children.length < 1) {
    score.appendChild(li);
  }
}

function Countdown() {
  if (currentTime > 55) {
    currentTime--;
    timer.textContent = currentTime;
  }
}

function quizStart() {
  titleRem.setAttribute("class", "hidden");
  quizQ.removeAttribute("class", "hidden");
  questionPrompt.textContent = questions[0].question;

  for(var i = 0; i < questions[0].options.length; i++){
  var cycle = document.createElement("button");
  var li = document.createElement("li");
  cycle.textContent = questions[0].options[i];
  li.appendChild(cycle);
  choices.append(li);
  

}

}

function questionA(event){
    var pressed = event.target;
    
    if(!pressed.matches("button")){
        return;
    }

    if (pressed !==  questions[0].correct){
        currentTime -= 10;
        timer.textContent = currentTime;
    }

    console.log(pressed);
}

//Logic
initCheck();
Countdown();

startBtn.onclick = quizStart;

choices.onclick = questionA;

timerDown = setInterval(Countdown, 1000);
