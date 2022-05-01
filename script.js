let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flip__button");
let resetButton = document.querySelector("#reset__button");

flipButton.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "flip-heads 3s forwards";
        }, 100);
        heads++;
    } else {
        setTimeout(function(){
            coin.style.animation = "flip-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateScore, 3000);
    disableButtons();
});

resetButton.addEventListener("click", () => {
    heads = 0;
    tails = 0;
    updateScore();
})

function updateScore(){
    document.querySelector("#numHeads").textContent = `Heads: ${heads}`;
    document.querySelector("#numTails").textContent = `Tails: ${tails}`;
}

function disableButtons(){
    flipButton.disabled = true;
    resetButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled=false;
        resetButton.disabled=false;
    }, 3000);
}
