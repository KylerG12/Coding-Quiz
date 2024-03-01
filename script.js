var timer = document.getElementById("timer");
var currentTime = 60; 

console.log(timer);

function initCheck(){
    let score = document.getElementById("ScoresHead");
    let li = document.createElement("li")
    li.textContent = "No Highscores yet"
    if(score.children.length < 1){
        score.appendChild(li);
    }
}

initCheck ();

function Countdown(){
    currentTime--;
    timer.textContent = currentTime;
}

Countdown ();

timerDown = setInterval(Countdown, 1000)
