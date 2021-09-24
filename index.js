var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your Name? ");

// welcome the user
console.log("Hey " + userName);
console.log("Welcome to the Quiz! " + "Do you Know Yash" + "\n ");
var score = 0;

// high score
var highScore = [{
    name: "Yash",
    score: "10"
  }, {
    name: "Aman",
    score: "9"
  }, {
    name: "Aakash",
    score: "9"
  }
]

// function
function quiz (question, answer){
 var userDetail = readlineSync.question(question);
 if (userDetail === answer){
   console.log("You're Right!")
   score = score + 1;
  }else{
    console.log("You're Wrong!")
    score = score + 0;
  }
  console.log("Your current score is: " + score + "\n ");
}

// array (list of questions)

var questions = [{
  question: "Where do I Live? ",
  answer: "Dhar"
}, {
  question: "Am I pursuing BBA? ",
  answer: "Yes"
}, {
  question: "Am I older than 18? ",
  answer: "Yes"
}, {
  question: "Where is my Collage located? ",
  answer: "Indore"
}, {
  question: "Do I use Instagram? ",
  answer: "Yes"
},{
  question: "Do I use LinkedIn? ",
  answer: "Yes"
},
 {
  question: "What is my Date of Birth? ",
  answer: "30/10/2002"
}, {
  question: "What is my Hometown? ",
  answer: "Dhar"
  }, {
  question: "How many members are there in my family? ",
  answer: "5"
}, {
  question: "What was the name of my School? " + "\n " + "a) St. George " + "\n " + "b) St. Joseph" + "\n ",
  answer: "a"
},
];

// loop
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}
// final score
console.log ("\n " + "Congatulations, You have scored " + score + "/10 points.")

console.log("Checkout the High Scores: ");
// i=index
for (var i=0; i<highScore.length; i++){
  var highScoreName = highScore[i];
  console.log(highScoreName.name, highScoreName.score);
}