var timeEl = document.querySelector("#timer");
var questionEl = document.querySelector(".ask-ques")
var answerEl = document.querySelector('.answer')
var secondsLeft = 0;
var points = 0;

var askQuestion = -1;
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


function startGame() {
        secondsLeft = 60;
        document.getElementById("timer").innerHTML = secondsLeft

        var timerInterval = setInterval(function () {
                secondsLeft--;
                document.getElementById("timer").innerHTML = secondsLeft
                if (secondsLeft === 0) {
                        window.alert("Your time has run out!")
                        clearInterval(timerInterval)
                }
        }, 1000)

        nextQuestion()
} 

function correct() {
        points += 1;
        nextQuestion()

}

function wrong() {
        secondsLeft -= 10;
        nextQuestion()
}

function nextQuestion() {
        askQuestion++
        if (askQuestion >= questionList.length) {
                return
        };
        var quizContent = questionList[askQuestion].question
        answerEl.innerHTML = ""

        for (var i = 0; i < questionList[askQuestion].answers.length; i++) {
                var correctAnswer = (questionList[askQuestion].answers[i] == questionList[askQuestion].correctAns) ? "correct()" : "wrong()";

                var button = document.createElement('button');
                button.textContent = questionList[askQuestion].answers[i];
                button.setAttribute("onclick", correctAnswer);
                button.style.backgroundColor="white";
                button.style.width="150px";
                button.style.height= "50px";
                button.style.color="midnightblue";
                button.style.margin="8px;"
        
                document.querySelector(".answer").appendChild(button);

        }
        document.querySelector(".ask-ques").innerHTML = quizContent;

        if (quizContent > questionList.length) {
                document.querySelector(".thanks").append
        }
}
startGame()