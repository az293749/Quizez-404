const quizData = [
  {
    question: "Do you use a logitech gaming mouse?",
    a: "yes",
    b: "no",
    c: "not really",
    d: "I don't know",
    correct: "b",
  },
  {
    question: "What text editor do you use?",
    a: "Sublime Text",
    b: "VS Studio",
    c: "Brackets",
    d: "Notepad++",
    correct: "c",
  },
  {
    question: "Which company's hardware do you use?",
    a: "Lenovo",
    b: "Dell",
    c: "Asus",
    d: "Microsoft",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answersEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers()
{
  answersEls.forEach(answersEl => answersEl.checked = false)
}
function getselected() {
  let answer

  answersEls.forEach(answersEl => {
    if (answersEl.checked) {
      answer = answersEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getselected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    }
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
    }
  }
})