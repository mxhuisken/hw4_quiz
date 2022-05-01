var startBtn = document.querySelector(".startBtn");
var homePage = document.querySelector(".homePage");
var showQuestions = document.getElementById("container");
var spanEl = document.getElementById("secondsLeft")
var timeLeft = 100;
var currentQuestion = 0;
var quizContainer = document.getElementById("container");
var titleEl = document.createElement("h1")

var timer;
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
        img: "./assets/images/tunabday.jpeg",
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
        img: "./assets/images/3cats.jpeg",
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
};

//Questions start

function showQuestion(){
    var q = allQuestions[currentQuestion];
}

//create a loop for questions, show question.loop choice and create buttons, attach event listener to choice buttons

//event listener for choice buttom 



//target img container for each question and set attribute to the img url 

//TIMER***  
//Start timer when quiz starts
function startTime(){

    timer = setInterval(function(){
        timeLeft--;  // timeleft = timeleft -1
        spanEl.textContent = timeLeft;
        //
        //if the time left is < 0 clearInterval(timer) and end the game
    }, 1000)
 
}
//timer count function
function count(){
    timeLeft--;  // timeleft = timeleft -1
    spanEl.textContent = timeLeft;
    //
    // clearInterval(timer)
}

//If question is answered incorrectly, time is subtracted from clock

//Show question


//After questions is answered, next question shows

//When timer reaches 0, quiz ends


//Quiz ends and user is taken to next page to log scores 

//Event Listeners 

startBtn.addEventListener("click", startQuiz);