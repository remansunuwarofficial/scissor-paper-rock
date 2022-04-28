// oh its working so let design it
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
let buttons = document.getElementsByClassName("button");
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        let getTarget = e.target;
        let getItsText = getTarget.innerText;
        userChoice.innerText = getItsText;
        computerBrain();
        checkWin();
    })
});

function computerBrain(){
    // max charater is 6 and min charater is 1
    let random = Math.floor(Math.random() * 6) + 1; 
    // so

    if(random === 1){
        computerChoice.innerText = "scissor";
    }
    if(random === 2){
        computerChoice.innerText = "paper";
    }
    if(random === 3){
        computerChoice.innerText = "rock";
    }

    
    if(random === 4){
        computerChoice.innerText = "scissor";
    }
    if(random === 5){
        computerChoice.innerText = "paper";
    }
    if(random === 6){
        computerChoice.innerText = "rock";
    }
    
}

function checkWin(){
    if(userChoice.innerText === computerChoice.innerText){
        result.innerText = "It's Draw";
    }

    // wins

    if(computerChoice.innerText === "scissor" && userChoice.innerText === "rock"){
        result.innerText = "You win";
    }

    if(computerChoice.innerText === "rock" && userChoice.innerText === "paper"){
        result.innerText = "You win";
    }

    if(computerChoice.innerText === "paper" && userChoice.innerText === "scissor"){
        result.innerText = "You win";
    }

    // lose

    if(computerChoice.innerText === "scissor" && userChoice.innerText === "paper"){
        result.innerText = "You lose";
    }

    if(computerChoice.innerText === "paper" && userChoice.innerText === "rock"){
        result.innerText = "You lose";
    }

    if(computerChoice.innerText === "rock" && userChoice.innerText === "scissor"){
        result.innerText = "You lose";
    }
}