var startButton = document.getElementById('beginQuiz')
var nextButton = document.getElementById('nextBtn')
var quizBoxEl = document.getElementById('quizBox')
var questionElement = document.getElementById('question')
var choiceEl = document.getElementById('answerChoices')

var shuffledQuestions, currentQuestionIndex

// click listeners for start and next buttons
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

// function that starts the quiz by hiding the start button and un-hides the list of questions/answers
// also shuffles the possible questions on each start
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizBoxEl.classList.remove('hide')
    nextQuestion()
}

// selects the next question and invokes the reset function
function nextQuestion() {
    resetState()
    displayQuestions(shuffledQuestions[currentQuestionIndex])
}

// displays the question to the page, and for each possible answer creates a button
function displayQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        choiceEl.appendChild(button)
    })
}

// removes the previous questions answers by 'resetting' the page
function resetState() {
    nextButton.classList.add('hide')
    while (choiceEl.firstChild) {
        choiceEl.removeChild(choiceEl.firstChild)
    }
}

// continues to cycle through answers until none are left, switch startButton to Submit
function selectAnswer() {
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Submit'
        startButton.classList.remove('hide')
    }
}

var questions = [

    {
        question: "Inside of which HTML element do we put the JavaScript?",
        answers: [
            { text: " div ", correct: false },
            { text: " body ", correct: false },
            { text: " script ", correct: true },
            { text: " link ", correct: false }
        ]

    },

    {
        question: "How do we link an external JavaScript?",
        answers: [
            { text: " script href=' ' ", correct: false },
            { text: " script link=' ' ", correct: false },
            { text: " script name=' ' ", correct: false },
            { text: " script src=' ' ", correct: true },
        ],
    },

    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: " function myFunction() ", correct: true },
            { text: " function: myFunction() ", correct: false },
            { text: " function = myFunction() ", correct: false },
            { text: " fucntion.myFunction() ", correct: false }
        ],
    },

    {
        question: "How would you call a function named myFunction?",
        answers: [
            { text: " call myFunction() ", correct: false },
            { text: " call.function myFunction() ", correct: false },
            { text: " call(myFucntion) ", correct: false },
            { text: " myFunction() ", correct: true }
        ],
    },

    {
        question: "What even occurs when we click an element on page?",
        answers: [
            { text: " Keyup ", correct: false },
            { text: " Click ", correct: true },
            { text: " Change ", correct: false },
            { text: " Keydown ", correct: false }
        ],
    },
]