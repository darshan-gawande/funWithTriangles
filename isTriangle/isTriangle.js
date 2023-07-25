const angles = document.querySelectorAll(".input-angles");
const btn = document.querySelector("#btn");
const outputText = document.querySelector("#output");

btn.addEventListener("click",  () => {
        const sum = Number(angles[0].value) + Number(angles[1].value) +  Number(angles[2].value);
 
        if(sum === 180) {
            outputText.innerText = "Yay, This can become a Triangle";
        } else {
            outputText.innerText = "Sorry, this cannot become a triangle";
        }
});
