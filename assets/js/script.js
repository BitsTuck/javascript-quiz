var timeEl = document.querySelector("#timer");
var secondsLeft = 150;

var question = document.querySelector ("#question")

var questionList = ['What special characters denote a string in Javascript?', 'What special characters denote an array in JavaScript?', 'What special characters denote that two values are strictly equal in JavaScript?', 'Which of the following is not a type of loop in JavaScript?', 'What property would you use to remove the last element in an array in JavaScript?']

var answersOne = [[' " "'], ' ||', ' []', ' {}', ' * *']

var answersTwo = [' " "', ' ||', [' []'], ' {}', ' * *']

var answersThree = [' !==', ' +==', [' ==='], ' -==', ' ==!']

var answersFour = [' for', [' integer'], ' while', ' do... while', ' nested']

var answersFive = [' .slice()', ' .unshift()', ' .push()', ' .length', [' .pop()']]

//init timer on question page load
function setTime() {
        setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds remaining';

        // if (response === false) {
        //     secondsLeft -10;
        // } else if (secondsLeft === 0) {
        //     var noTime = window.confirm("Your time has run out! Click OK to view High Scores, click Cancel to start again.")
        //     if (noTime) {
        //         //go to high scores
        //     } else {
        //         //go back to init
        //     }
        // }
}, 1000);
}
setTime()

// function askQuestions() {
for(let i = 0; i < questionList.length; i++) { document.getElementById("question").innerHTML = questionList[i];
}


//hide questions 2-5 when question page loads
// response.addEventListener("click", function(event) {
//     var element=event.target;;

//     if(element.matches (".question")) {
//     var state = element.getAttribute ("data-answer");
//     }

// })
//reveal questions one at-a-time 
// window prompt on last question answered OR timer runs out
// prompt response takes you to high-score page
//high score page displays scores