const quizData = [
    {
        Que: "How Old Is Javascript?",
        a:"10+ Year",
        b:"20+ Year",
        c:"30+ Year",
        d:"40+ Year",
        correct:"b",
    },
    {
        Que: "What does Dom means?",
        a:"Document Object Model",
        b:"Data Orient Manager",
        c:"Document Object Module",
        d:"Document Object Method",
        correct:"a",
    },
    {
        Que: "How Old Is Ecma6 is?",
        a:"2016",
        b:"2010",
        c:"2015",
        d:"2017",
        correct:"c",
    },
    {
        Que: "What is the characterstic of Javascript?",
        a:"Single Threded Language",
        b:"Dynamiclly Typed Language",
        c:"Server Side Language",
        d:"All Of The Above",
        correct:"d",
    },
    {
        Que: "Reason, how is Js different from Java?",
        a:"It is Different ik.",
        b:"Its same.",
        c:"Js is java with scripts",
        d:"All Of The Above",
        correct:"a"
    }
]

let que = document.querySelector("#question");
let quiz = document.querySelector("#quiz");
let label = document.querySelectorAll(".label");
let submit = document.querySelector("button");
const answers = document.querySelectorAll(".answer");

let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    que.innerText = currentQuizData.Que;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let ans = undefined;

    answers.forEach(answer => {
        if(answer.checked){
           ans = answer.id;
           console.log(ans);
        }
    });

    return ans;
}

function deselected(){
    answers.forEach((answer)=> {
        answer.checked = false;
    }
)}


submit.addEventListener("click", ()=>{
    
    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        deselected();

        if((quizData.length) > currentQuiz) {
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You Answered ${score}/${quizData.length} Correctly.</h2> <button onclick="location.reload();">Refresh</button>`;
        }
    }
})