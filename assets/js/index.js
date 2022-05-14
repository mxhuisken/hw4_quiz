var startBtn = document.querySelector(".startBtn");
var homePage = document.querySelector(".homePage");
var showQuestions = document.getElementById("container");
var spanEl = document.getElementById("secondsLeft")
var currentQuestion = 0;
var quizContainer = document.getElementById("container");
var titleEl = document.querySelector(".questionAsked")
var choiceRef = document.querySelector(".choiceOpts")
var confirmAnswer = "";
var clearChoices = document.querySelector(".choiceOpts");
var imageEl = document.getElementById("image");
var quizDone = document.getElementById("results");
var timeDone = document.getElementById("timer");
var timeShow = document.querySelector(".showTime");


var allQuestions = [

    {
        question: "When was the earliest known occurence of domesticated cats?",
        choices: ["1945","450 AD","1200 BC","2022"],
        answer: "1200 BC",
        img: "./assets/images/ancientcat.jpeg",
    },

    {
        question: "How many cats does Marina have?",
        choices: ["3","7","4","1"],
        answer: "3",
        img: "./assets/images/catq.png",
    },

    {
        question: "What is this breed of cat",
        choices: ["persian", "main coon", "siberian", "scottish fold"],
        answer: "scottish fold",
        img: "./assets/images/scottish.jpeg",
    },

    {
        question: "What is the best pet to own?",
        choices: ["dog", "fish", "bird", "cat"],
        answer: "cat",
        img: "./assets/images/allpets.jpeg",
    },

    {
        question: "About how many different breeds of cats exist?",
        choices: ["24", "73", "41", "112"],
        answer: "73",
        img: "./assets/images/catq.png",
    },

    {
        question: "Who is Marina's favorite cat?",
        choices: ["Atlas", "Tuna","Oliver","None"],
        answer: "Tuna",
        img: "./assets/images/tuna.jpeg",
    },

    {
        question: "What is the main purpose cats use their whiskers for?",
        choices: ["spacial detemination", "communication", "smelling", "picking up vibes"],
        answer: "spacial determination",
        img: "./assets/images/whiskers.jpeg",
    },

    {
        question: "When is Tuna's birthday?",
        choices: ["12/7", "9/24", "7/14", "3/17"],
        answer: "3/17",
        img: "./assets/images/tunaday.png",
    },

    {
        question: "Are cats better than dogs?",
        choices: ["ofc 1000% yes!", "no, i'm a loser", "sometimes", "who knows"],
        answer: "ofc 1000% yes!",
        img: "./assets/images/catq.png",
    },

    {
        question: "How cute are Marina's cats?",
        choices: ["so cute omg", "the cutest cats ever to exist", "very beautiful", "too cute it hurts"],
        answer: "the cutest cats ever to exist" ,
        img: "./assets/images/allbbs.jpg",
    }, 
];
//Starting the quiz
function startQuiz(){
    hideHome();
    showQuestion();
    startTime();
};

//Home page gets hidden

function hideHome(){
    homePage.style.display = "none";
    startBtn.style.display = "none";
}

//hide questions once completed

function hideQ(){
    quizContainer.style.display = "none";
}

//function for results page
function showResults(){
    quizDone.style.cssText = `
    display: block; 
    text-align: center;
    `;
}

//function to hide time when quiz is over

function hideTime(){
    timeDone.style.cssText = `
    display: none;
    `;
}

//Questions start

function showQuestion(){
    
    var q = allQuestions[currentQuestion];
    
    timeDone.style.display = "block";//takes timer from hidden to showing
    clearChoices.innerHTML = "" // clears old choices
    imageEl.innerHTML = "" // clears img from each q

    //appending img to each q

    var picture = q.img;
    var image = document.createElement("img");
    image.setAttribute("src", picture);
    imageEl.append(image);
    

    //questions only
    titleEl.textContent = q.question; //current question

    var showChoice = q.choices; //answers for current question
    //create a loop for questions, show question.loop choice and create buttons, attach event listener to choice buttons
    for(var i = 0; i < showChoice.length; i++) {
        var xChoices = showChoice[i];

        var choiceBtns = document.createElement('button');
            choiceBtns.textContent = xChoices;
            choiceRef.append(choiceBtns);

//event listener for choice buttom 

choiceBtns.addEventListener("click", function (event) {
    var userAnswr = event.target.textContent;

    if (userAnswr === q.answer){
        answerCorrect();
    } else{
        answerWrong()
    }
    //next question
    currentQuestion++;
//checking user input
if (currentQuestion === allQuestions.length){
    quizOver();
}else {
    showQuestion();
}
});
}
}
//if answered correctly
function answerCorrect() {
    confirmAnswer.textContent = "correct";
}

//if answered wrong
function answerWrong() {
    //subtract 10secs from clock
    timeLeft -= 10;
    confirmAnswer.textContent = "incorrect!";
}

//quiz over
function quizOver(){
    clearInterval(timer);
    hideQ();
    showResults();
    hideTime();
}
//TIMER***  
//Start timer when quiz starts

var timeLeft = 100;
var timeStart = spanEl;
var timer;
var timeEl = document.querySelector(".secondsLeft")

function startTime(){

    timer = setInterval(function(){
        timeLeft--;  // timeleft = timeleft -1
        spanEl.textContent = timeLeft;
        //
        //if the time left is < 0 clearInterval(timer) and end the game
        if (timeLeft <= 0){ 
            quizOver();
        }
    }, 1000);
}

//Quiz ends and user is taken to next page to log scores 

//Event Listeners 

startBtn.addEventListener("click", startQuiz);