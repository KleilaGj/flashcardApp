const card = document.getElementById("card");
card.addEventListener("click",flip);
const frontContent = document.getElementById("frontContent");
const backContent = document.getElementById("backContent");
const saveButton = document.getElementById("save");


let frontText = "";
let backText = "";
let flipped = false;

saveButton.addEventListener("click", function(){
    frontText = frontContent.value;
    backText = backContent.value;
    card.textContent = frontText;
    flipped = false;
})


function flip() {
    if (!flipped) {
        card.textContent = backText;
    } else {
        card.textContent = frontText;
    }
    flipped = !flipped
}
