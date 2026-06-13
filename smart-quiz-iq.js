/* =====================================
   THEME SYSTEM
===================================== */

const themeToggle =
document.getElementById("themeToggle");

if(localStorage.getItem("quizTheme")==="light"){
    document.body.classList.add("light");
}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("quizTheme","light");
        showToast("☀ Light Theme Activated");
    }else{
        localStorage.setItem("quizTheme","dark");
        showToast("🌙 Dark Theme Activated");
    }

});

/* =====================================
   QUIZ DATA
===================================== */

const quizData = {

iq:[

{
question:"Which number comes next? 2, 4, 8, 16, ?",
options:["20","24","32","64"],
answer:"32"
},

{
question:"If all roses are flowers, all flowers are plants. Roses are?",
options:["Plants","Trees","Animals","Fruits"],
answer:"Plants"
},

{
question:"Which shape has 8 sides?",
options:["Hexagon","Octagon","Pentagon","Heptagon"],
answer:"Octagon"
},

{
question:"What is half of 100?",
options:["25","40","50","60"],
answer:"50"
},

{
question:"Which is the odd one out?",
options:["Dog","Cat","Lion","Car"],
answer:"Car"
},

{
question:"Which month has 28 days?",
options:["February","All Months","June","December"],
answer:"All Months"
},

{
question:"5 x 5 + 5 = ?",
options:["25","30","35","20"],
answer:"30"
},

{
question:"Mirror of LEFT?",
options:["RIGHT","LEFT","UP","DOWN"],
answer:"RIGHT"
},

{
question:"Complete: A,C,E,G,?",
options:["I","J","K","L"],
answer:"I"
},

{
question:"Which is largest?",
options:["1","100","1000","10"],
answer:"1000"
}

],

logical:[

{
question:"If A>B and B>C then?",
options:["A>C","A<C","B>A","C>A"],
answer:"A>C"
},

{
question:"Find next: 1,3,5,7,?",
options:["8","9","10","11"],
answer:"9"
},

{
question:"Sun rises in?",
options:["West","East","North","South"],
answer:"East"
},

{
question:"Logical opposite of Hot?",
options:["Warm","Cold","Boiling","Dry"],
answer:"Cold"
},

{
question:"Which does not belong?",
options:["Apple","Banana","Car","Orange"],
answer:"Car"
},

{
question:"Which is a mammal?",
options:["Shark","Whale","Fish","Snake"],
answer:"Whale"
},

{
question:"What comes after Tuesday?",
options:["Friday","Wednesday","Monday","Sunday"],
answer:"Wednesday"
},

{
question:"2+2x2=?",
options:["8","6","4","2"],
answer:"6"
},

{
question:"Odd number?",
options:["2","4","8","7"],
answer:"7"
},

{
question:"Capital of India?",
options:["Mumbai","Delhi","Pune","Jaipur"],
answer:"Delhi"
}

],

aptitude:[
{
question:"10% of 200?",
options:["10","20","30","40"],
answer:"20"
},
{
question:"25 x 4?",
options:["50","100","75","125"],
answer:"100"
},
{
question:"15+35?",
options:["40","45","50","55"],
answer:"50"
},
{
question:"100/5?",
options:["10","20","30","40"],
answer:"20"
},
{
question:"Square of 12?",
options:["144","124","132","120"],
answer:"144"
},
{
question:"20% of 500?",
options:["50","100","150","200"],
answer:"100"
},
{
question:"7x8?",
options:["54","56","64","48"],
answer:"56"
},
{
question:"9²=?",
options:["81","72","90","99"],
answer:"81"
},
{
question:"1000-250?",
options:["650","700","750","800"],
answer:"750"
},
{
question:"5³=?",
options:["100","125","150","75"],
answer:"125"
}

]

};

/* =====================================
   VARIABLES
===================================== */

let currentCategory = "";
let currentQuestion = 0;
let score = 0;
let timer = 30;
let interval = null;

/* =====================================
   ELEMENTS
===================================== */

const questionText =
document.getElementById("questionText");

const answersContainer =
document.getElementById("answersContainer");

const timerDisplay =
document.getElementById("timer");

const scoreDisplay =
document.getElementById("score");

const levelDisplay =
document.getElementById("level");

const consoleOutput =
document.getElementById("consoleOutput");

const progressFill =
document.getElementById("progressFill");

const nextBtn =
document.getElementById("nextBtn");

/* =====================================
   CATEGORY CLICK
===================================== */

document
.querySelectorAll(".challenge-card")
.forEach(card=>{

card.addEventListener("click",()=>{

currentCategory =
card.dataset.category;

currentQuestion = 0;
score = 0;

scoreDisplay.innerText = score;

startQuiz();

});

});

/* =====================================
   START QUIZ
===================================== */

function startQuiz(){

showQuestion();

}

/* =====================================
   SHOW QUESTION
===================================== */

function showQuestion(){

clearInterval(interval);

const data =
quizData[currentCategory];

const q =
data[currentQuestion];

questionText.innerText =
q.question;

answersContainer.innerHTML = "";

q.options.forEach(option=>{

const btn =
document.createElement("button");

btn.classList.add("answer-btn");

btn.innerText = option;

btn.onclick = ()=>checkAnswer(
option,
q.answer
);

answersContainer.appendChild(btn);

});

timer = 30;

timerDisplay.innerText = timer;

interval =
setInterval(updateTimer,1000);

updateProgress();

}

/* =====================================
   TIMER
===================================== */

function updateTimer(){

timer--;

timerDisplay.innerText = timer;

if(timer<=0){

clearInterval(interval);

consoleOutput.innerHTML =
"⌛ Time Up!";

nextQuestion();

}

}

/* =====================================
   CHECK ANSWER
===================================== */

function checkAnswer(selected,correct){

clearInterval(interval);

if(selected===correct){

score += 5;

scoreDisplay.innerText = score;

consoleOutput.innerHTML =
"✅ AWESOME! Correct Answer";

showToast("Correct +5");

}else{

consoleOutput.innerHTML =
"❌ WRONG Answer";
}

updateLevel();

}

/* =====================================
   LEVEL SYSTEM
===================================== */

function updateLevel(){

let level = 1;

if(score>=10) level=2;
if(score>=20) level=3;
if(score>=30) level=4;
if(score>=40) level=5;
if(score>=50) level=6;

levelDisplay.innerText =
level;

}

/* =====================================
   NEXT QUESTION
===================================== */

nextBtn.addEventListener(
"click",
nextQuestion
);

function nextQuestion(){

currentQuestion++;

const data =
quizData[currentCategory];

if(currentQuestion>=data.length){

finishQuiz();
return;
}

showQuestion();

}

/* =====================================
   PROGRESS
===================================== */

function updateProgress(){

const data =
quizData[currentCategory];

const percent =
((currentQuestion+1)
/data.length)*100;

progressFill.style.width =
percent+"%";

}

/* =====================================
   FINISH QUIZ
===================================== */

function finishQuiz(){

document
.getElementById("resultSection")
.style.display="block";

document
.getElementById("finalScore")
.innerText =
score + " Points";

document
.getElementById("resultMessage")
.innerText =
"Excellent Work!";

}

/* =====================================
   TOAST
===================================== */

function showToast(message){

const toast =
document.getElementById("toast");

toast.innerText = message;

toast.style.display = "block";

setTimeout(()=>{

toast.style.display = "none";

},2500);

}

/* =====================================
   AI ASSISTANT
===================================== */

function askAI(){

const text =
document.getElementById("aiInput").value;

if(text===""){
showToast("Enter Question");
return;
}

showToast(
"AI Tutor Processing..."
);

}

