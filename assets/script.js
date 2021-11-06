var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");

var questions = [
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
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "Time's Up!"
            // run end quiz function here ?
        }
    }, 1000);
};

function startQuiz() {
    // run countdown at the start of start quiz function
    countdown();


};

startBtn.addEventListener("click", startQuiz);