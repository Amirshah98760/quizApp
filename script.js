const detailsApp = document.querySelector("#details-btn")

const quiz = [
  {
    question:"What is the result of 2 + 2?",
    ans1text: "3",
    ans2text: "4",
    ans3text: "5",
    ans4text: "6",
    answer: "4",
  },
 
  {
    question: "What does 'DOM' stand for?",
    ans1text: "Document Object Model",
    ans2text:  "Data Object Model",
    ans3text:  "Digital Object Model",
    ans4text: "Dynamic Object Model",
    answer: "Document Object Model",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "string",
    ans2text: "boolean",
    ans3text: "float",
    ans4text: "array",
    answer: "1995",
  },
  {
    question: "What does Css stands for",
    ans1text: "cascading style sheet ",
    ans2text: "cascading cast sheet ",
    ans3text: "cascading sale sheet",
    ans4text: "cascad style sheet",
    answer:"cascading style sheet ",
  }

]



const questions = [
    {
      question: "What is the result of 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["string", "boolean", "float", "array"],
      answer: "float"
    },
    {
      question: "What does 'DOM' stand for?",
      options: ["Document Object Model", "Data Object Model", "Digital Object Model", "Dynamic Object Model"],
      answer: "Document Object Model"
    }
  ];




  

const showName = document.querySelector("#showName")
const showRollNo = document.querySelector("#showRollNo")
const showBatch = document.querySelector("#showBatch")
const showsection = document.querySelector("#showsection")
const showMark = document.querySelector("#showMark")

const name = document.querySelector("#name")
const rollNo = document.querySelector("#roll-no")
const batch = document.querySelector("#batch")
const section = document.querySelector("#section")

const container3 = document.querySelector(".container3")
const container2 = document.querySelector(".container2")
const detailsBtn = document.querySelector("#details-btn")
const container = document.querySelector(".container")

const question = document.getElementById("question")
const optionA = document.getElementById("input-option-a")
const optionB = document.getElementById("input-option-b")
const optionC = document.getElementById("input-option-c")
const optionD = document.getElementById("input-option-d")
const submitBtn = document.getElementById("submit-btn")

let currentQuestion = 0
let score = 0

question.textContent = quiz[currentQuestion].question
optionA.nextElementSibling.textContent = quiz[currentQuestion].ans1text
optionB.nextElementSibling.textContent = quiz[currentQuestion].ans2text
optionC.nextElementSibling.textContent = quiz[currentQuestion].ans3text
optionD.nextElementSibling.textContent = quiz[currentQuestion].ans4text

submitBtn.addEventListener("click", () => {
  const checkAnswer = document.querySelector('input[type="radio"]:checked')
  if (checkAnswer === null) {
    alert("Please slect one option")
  } else if (
    checkAnswer.nextElementSibling.textContent === quiz[currentQuestion].answer
  ) {
    score++
  }
  currentQuestion++
  if (currentQuestion < quiz.length) {
    question.textContent = quiz[currentQuestion].question
    optionA.nextElementSibling.textContent = quiz[currentQuestion].ans1text
    optionB.nextElementSibling.textContent = quiz[currentQuestion].ans2text
    optionC.nextElementSibling.textContent = quiz[currentQuestion].ans3text
    optionD.nextElementSibling.textContent = quiz[currentQuestion].ans4text
    checkAnswer.checked = false
  } else {
    // alert("Your score is " + score + " out of " + quiz.length)

    const namedata = name.value
    const rollNodata = rollNo.value
    const batchdata = batch.value
    const sectiondata = section.value

    showName.textContent = namedata
    showRollNo.textContent = rollNodata
    showBatch.textContent = batchdata
    showsection.textContent = sectiondata

    container3.classList.add("showDiv")
    container2.classList.add("hideDiv")
    showMark.textContent = "Your obtain marks is " + score + " out of " + quiz.length

    container2.classList.add("hideDiv")
  }
})

detailsBtn.addEventListener("click", () => {
  container.classList.add("showDiv")
  container2.classList.add("hideDiv")
})