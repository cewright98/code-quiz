var timer = document.querySelector("#timer");

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

// run countdown at the start of start quiz function
countdown();