var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var quiz = document.querySelector("#quiz");
var startContent = document.querySelector("#startContent");
var quizQuestion = document.querySelector("#quizQuestion");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var correctness = document.querySelector("#correctness");
var selectA = document.querySelector("#selectA");
var selectB = document.querySelector("#selectB");
var selectC = document.querySelector("#selectC");
var selectD = document.querySelector("#selectD");
var endContent = document.querySelector("#endContent");
var finalScore = document.querySelector("#finalScore");
var userInitials = document.querySelector("#userInitials");
var scoreSubmit = document.querySelector("#scoreSubmit");
var highScoreLink = document.querySelector("#highScoreLink");
var savedScoresContent = document.querySelector("#savedScoresContent");
var highScoreContent = document.querySelector("#highScoreContent");
var goBackButton = document.querySelector("#goBack");
var highScoreList = document.querySelector("#highScoreList");
var count = 0;
var timeLeft = 90;
var score = 0;

var myQuestions = [
    {
        question: "Which of the following is NOT an example of a semantic HTML element?",
        answers: {
            a: "<header>",
            b: "<div>",
            c: "<form>",
            d: "<article>"
        },
        correctAnswer: "b"
    },
    {
        question: "What symbol is used to reference an HTML element’s ID in CSS?",
        answers: {
            a: "*",
            b: ".",
            c: "$",
            d: "#"
        },
        correctAnswer: "d"
    },
    {
        question: "What JavaScript function converts a string into an integer?",
        answers: {
            a: "parseInt()",
            b: "stringify()",
            c: "parse()",
            d: "int()"
        },
        correctAnswer: "a"
    },
    {
        question: "Which coding language is used only to style existing HTML elements?",
        answers: {
            a: "HTML",
            b: "Java",
            c: "CSS",
            d: "JavaScript"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is NOT an acceptable CSS color value?",
        answers: {
            a: "Blue",
            b: "#919191",
            c: "rgb(100, 0, 250)",
            d: "Light blue"
        },
        correctAnswer: "d"
    },
    {
        question: "Where in an HTML file should you link a JavaScript file?",
        answers: {
            a: "Before the <head> element",
            b: "At the end of the <body> element",
            c: "At the very top of the page",
            d: "Inside the <head> element"
        },
        correctAnswer: "b"
    },
    {
        question: "Which type of brackets enclose a function?",
        answers: {
            a: "[ ]",
            b: "( )",
            c: "{ }",
            d: "| |"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is NOT a primitive data type?",
        answers: {
            a: "Array",
            b: "String",
            c: "Boolean",
            d: "Number"
        },
        correctAnswer: "a"
    },
    {
        question: "Which coding language makes webpages interactive?",
        answers: {
            a: "HTML",
            b: "Java",
            c: "CSS",
            d: "JavaScript"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is NOT a DOM event?",
        answers: {
            a: "Blur",
            b: "Drop",
            c: "Hover",
            d: "Click"
        },
        correctAnswer: "c"
    }
];

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (startContent.style.display === 'block' || highScoreContent.style.display === 'block') {
            clearInterval(timeInterval);
        } else {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
};

function startQuiz() {
    timer.style.display = 'block';
    score = 0;
    timeLeft = 90;
    // start timer
    countdown();

    startContent.style.display = 'none';
    startBtn.style.display = 'none';
    quiz.style.display = 'block';

    showQuestions();
};

function showQuestions() {
    quizQuestion.textContent = myQuestions[count].question;
    choiceA.textContent = myQuestions[count].answers.a;
    choiceB.textContent = myQuestions[count].answers.b;
    choiceC.textContent = myQuestions[count].answers.c;
    choiceD.textContent = myQuestions[count].answers.d;

    count++;
};

function isCorrect() {
    var userAnswer = false; 

    document.addEventListener("click", function(event) {
        userAnswer = event.target;
    });

    if (userAnswer === myQuestions[count].correctAnswer) {
        correctness.textContent = "Correct";
        buttonClicked = true;
    } else if (userAnswer) {
        correctness.textContent = "Incorrect";
        buttonClicked = true;
    }
};

function endQuiz() {
    timer.style.display = 'none';
    quiz.style.display = 'none';
    endContent.style.display = 'block';
    
    // show score
    finalScore.textContent = "Your final score is: " + score;

    count = 0;
    correctness.textContent = "";
};

function saveScores() {
    var i = 0;
    var savedScores = [
        {
            initials: "",
            userScore: ""
        }
    ];

    savedScores[i].initials = localStorage.getItem("initials");
    savedScores[i].userScore = score;

    savedScoresContent.textContent = savedScoresContent.textContent + " | " + savedScores[i].initials + ":  " + savedScores[i].userScore;
    
    console.log(savedScores[i]);

    i++;
};

document.addEventListener("click", function(event) {
    if (event.target === selectA || event.target === selectB || event.target === selectC || event.target === selectD) {
        if (event.target.textContent === myQuestions[count - 1].correctAnswer) {
            correctness.textContent = "Correct!";
            score = score + 10;
        } else {
            correctness.textContent = "Incorrect";
            timeLeft = timeLeft - 10;
        }
        if (count < myQuestions.length) {
            showQuestions();
        } else {
            endQuiz();
        }
    }
});

scoreSubmit.addEventListener("click", function() {
    if (userInitials.value) {
        localStorage.setItem("initials", userInitials.value);
        userInitials.value = "";
        saveScores();
    } else {
        window.alert("Please type your initials.");
        endQuiz();
    }
});

highScoreLink.addEventListener("click", function() {
    startContent.style.display = 'none';
    quiz.style.display = 'none';
    endContent.style.display = 'none';
    highScoreContent.style.display = 'block';
});

goBackButton.addEventListener("click", function() {
    quiz.style.display = 'none';
    endContent.style.display = 'none';
    highScoreContent.style.display = 'none';
    startContent.style.display = 'block';
    startBtn.style.display = 'block';
});

startBtn.addEventListener("click", startQuiz);