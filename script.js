const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the boiling point of water at sea level in degrees Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C"
    }
];
let question_element=document.querySelector("#question");
let answer_element=document.querySelector("#answer-btns")
let next_btn=document.querySelector("#btn");


let current_index=0;
let score=0;
function startquiz(){
next_btn.style.display = "none"; 
resetstate();
const current_index=0;
const score=0;
showquestion();
}
function showquestion(){
   let current_question=quizData[current_index] ;
   let question_no= current_index + 1;
   question_element.innerHTML=question_no+ " " + current_question.question;
   current_question.options.forEach(Option =>{
    const button = document.createElement("button");
    button.innerHTML=Option;
    button.classList.add("btn");
    answer_element.appendChild(button);  
    button.addEventListener("click", () => {
        if (Option === current_question.answer) {
            button.style.backgroundColor = "green"; 
            score++;
        } else {
            button.style.backgroundColor = "red"; 
            
        }
        disable_button();
    })
 })}
 function disable_button(){
    const buttons = answer_element.querySelectorAll("button");
    next_btn.style.display = ""; 
    next_btn.style.textalignment="center"


  buttons.forEach(button => {
        button.disabled = true;
    });
 }
 function resetstate(){
    while(answer_element.firstChild){
        answer_element.removeChild(answer_element.firstChild);
    }
   
 }
 next_btn.addEventListener("click",()=>{
    current_index++;
    if (current_index < quizData.length) {
        resetstate();
        showquestion();
    } else {
        showResult();
    }
 })

function showResult() {
    resetstate();
    question_element.innerHTML = "Quiz Completed!";    
        answer_element.innerHTML = `Your score is ${score} out of ${quizData.length}.`;
        answer_element.classList.add("rslt")
        next_btn.style.display = "none"; 
    }
    

startquiz();
