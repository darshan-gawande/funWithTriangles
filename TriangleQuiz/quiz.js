const submitBtn = document.querySelector("#submit");
const quizForm = document.querySelector("#quizform");
const outputText = document.querySelector("#output-message");

const correctAns = ["90°","right angled triangle"];

submitBtn.addEventListener("click", () => {
    let index = 0;
    let score = 0;
    
    const data = new FormData(quizForm);

    for(let value of data.values()) {
        if(correctAns[index] === value) {
            score += 1;
        } 
            index += 1;
    }
  outputText.innerText = "Your score is " + score;
});