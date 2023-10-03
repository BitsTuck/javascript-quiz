var timeEl = document.querySelector("#timer");
var questionEl = document.querySelector(".ask-ques")
var answerEl = document.querySelector('.answer')
var secondsLeft = 120;

var askQuestion = 0;
var listAnswers = [];
var answerList = "";

var questionList = [
        {
                question: 'What special characters denote an array in JavaScript?',
                correctAns: '[]',
                answers: ['{}', '&&', '[]', '()']

        },
        {
                question: 'What special characters denote a string in JavaScript?',
                correctAns: '""',
                answers: ['{}', '&&', '""', '()']
        },
        {
                question: 'Which of the following is not a type of loop in JavaScript?',
                correctAns: 'integer',
                answers: ['for', 'while', 'do... while', 'integer']
        },
        {
                question: 'What property would you use to add to the beginning of a JavaScript array?',
                correctAns: '.shift()',
                answers: ['.length', '.pop()', '.unshift()', 'shift()']
        },
        {
                question: 'What property would you use to remove the last item in a JavaScript array?',
                correctAns: '.pop()',
                answers: ['.length', '.pop()', '.unshift()', 'shift()']
        }
]

// console.log(questionList[askQuestion].question)
// askQuestion++
// console.log(questionList[askQuestion].question



// init timer on question page load
function setTime() {
        var timerInterval = setInterval(function () {
                secondsLeft--;
                timeEl.textContent = secondsLeft + ' seconds remaining';
                if (secondsLeft === 0) {
                        var noTime = window.confirm("Your time has run out! Click OK to view High Scores, click Cancel to start again.")
                        clearInterval(timerInterval)
                        //                         // else if (noTime) {
                        //                         // go to high scores
                        //                         // } else {
                        //                         // return
                }
        }, 1000);
}
setTime()

function takeQuiz() {
        questionEl.textContent = questionList[askQuestion].question

        for (let i = 0; i < questionList[askQuestion].answers.length; i++) {
                let ansButton = document.createElement('button')
                ansButton.setAttribute("type", "button");
                ansButton.textContent = questionList[askQuestion].answers[i]

                answerEl.append(ansButton)

        }

        if (questionList[askQuestion].answers[i] === questionList[askQuestion].correctAns[i]) {
                questionEl++;
        } else {
                secondsLeft - 10;
        }
}
takeQuiz()







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