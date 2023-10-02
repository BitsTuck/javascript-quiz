var timeEl = document.querySelector("#timer");
var secondsLeft = 120;

var questionList = ['What special characters denote a string in Javascript?', 'What special characters denote an array in JavaScript?', 'What special characters denote that two values are strictly equal in JavaScript?', 'Which of the following is not a type of loop in JavaScript?', 'What property would you use to remove the last element in an array in JavaScript?']

var answerCorrect = [' " "', ' []', ' ===', ' integer', ' .pop()']



//init timer on question page load
function setTime() {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds remaining';  
        if (secondsLeft === 0) {
        var noTime = window.confirm("Your time has run out! Click OK to view High Scores, click Cancel to start again.")
        clearInterval(timerInterval)
        // else if (noTime) {
        // go to high scores
        // } else {
        // return
        }
}, 1000);
}
setTime()

// function askQuestions() {
for(let i = 0; i < questionList.length; i++) { document.getElementById("question").innerHTML = questionList[i];
} if (answerCorrect) {
        var nextQuestion = questionList(i+1)
} else {
        secondsLeft -10;
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

// var answersWrong = [' ()', ' &&', ' ||',' {}',' * *', ' !==', ' +==', ' -==', ' ==!', ' for', ' while', ' do... while', ' .slice()', ' nested', ' .unshift()', ' .push()', ' .length']