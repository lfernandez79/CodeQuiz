// linked HTML iDs to make reference
var startButton = document.getElementById("beginQuiz")
var nextButton = document.getElementById("nextBtn")
var quizBoxEl = document.getElementById("quizBox")
var questionElement = document.getElementById("question")
var choiceEl = document.getElementById("answerChoices")

var shuffledQuestions, currentQuestionIndex

// Array of all questions with answers.
var questions = [

    {
        question: "Who is the main character in Game of Thrones show?",
        answers: [
            { text: " Jaime ", correct: false },
            { text: " Cersei ", correct: false },
            { text: " Daenerys ", correct: true },
            { text: " Sansa ", correct: false }
        ]

    },

    {
        question: "What do you think, when you see red, green, blue?",
        answers: [
            { text: " html ", correct: false },
            { text: " JS ", correct: false },
            { text: " CSS ", correct: true },
            { text: " Or all ", correct: false },
        ],
    },

    {
        question: "How many cylinders are allow on Formula 1 cars since 2014 ?",
        answers: [
            { text: " V6 ", correct: true },
            { text: " V8 ", correct: false },
            { text: " V10 ", correct: false },
            { text: " V12 ", correct: false }
        ],
    },

    {
        question: "Scariest movie ever?",
        answers: [
            { text: " The Ring ", correct: true },
            { text: " The Exorcist ", correct: true },
            { text: " 28 Days Later ", correct: true },
            { text: " The Devil Dead ", correct: true }
        ],
    },

    {
        question: "In what state can you eat the best pizza?",
        answers: [
            { text: " Connecticut ", correct: true },
            { text: " New York ", correct: false },
            { text: " Illinois ", correct: false },
            { text: " Massachusetts ", correct: false }
        ],
    },
]

var timer = 100;
var intervalId = setInterval(funtion() {
    if(timer>0)
    timer--;
})

// Event listener to start button when click on.
startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
})

// function that starts the quiz and hide start button.
    function startQuiz() {
    startButton.classList.add("hide")
   
// Random question selected when start.
    shuffledQuestions = questions.sort(() => Math.random() - 1)
    currentQuestionIndex = 0
    quizBoxEl.classList.remove("hide")
    nextQuestion()
}

// selects the next question and then reset function
function nextQuestion() {
    resetState()
    displayQuestions(shuffledQuestions[currentQuestionIndex])
}

// displays question on page and create a button for answers.
function displayQuestions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        choiceEl.appendChild(button)
    })
}

// removes the previous questions answers by 'resetting' the page
function resetState() {
    nextButton.classList.add("hide")
    while (choiceEl.firstChild) {
        choiceEl.removeChild(choiceEl.firstChild)
    }
}

// continues to cycle through answers until none are left, switch startButton to Submit
function selectAnswer() {
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Submit"
        startButton.classList.remove("hide")
    }
}

