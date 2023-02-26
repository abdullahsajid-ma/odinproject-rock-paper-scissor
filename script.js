let detail = document.querySelector(".game-detail")
let btn = document.querySelectorAll("button")
let h1container = document.querySelector(".Rounds")
let r = document.createElement("p")
let user_score = document.createElement("p")
let computer_score = document.createElement("p")

let rps = ['rock','paper','scissor']
let player = 0
let computer = 0
let user;
let rand;
let userChoice;
let computerChoice,round = 1;

r.textContent = `Round : ${round}`
h1container.appendChild(user_score)
h1container.appendChild(r)
h1container.appendChild(computer_score)
user_score.textContent = `Your Score : ${player}`
computer_score.textContent = `Computer Score : ${computer}`

function getComputerChoice(){
    rand = Math.floor(Math.random() * rps.length)
    return rps[rand]
}

function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        detail.textContent = "its tie!"
    }else if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissor') || (playerSelection == 'scissor' && computerSelection == 'rock')){
        computer+=1
        detail.textContent =  `Your choice ${playerSelection} and computer choice ${computerSelection}`
        detail.textContent = `computer won and score is ${computer}`
        user_score.textContent = `Your Score : ${player}`
        computer_score.textContent = `Computer Score : ${computer}`
    }else if((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'rock' && computerSelection == 'scissor')){
        player+=1
        detail.textContent = `Your choice ${playerSelection} and computer choice ${computerSelection}`;
        detail.textContent = `You won and your score is ${player}`;
        user_score.textContent = `Your Score : ${player}`;
        computer_score.textContent = `Computer Score : ${computer}`;
        
    }else{
        detail.textContent = "Nothing!"
    }
}


function result(){
    btn.forEach((b) =>{
        b.addEventListener('click', () =>{
            if(round!= 6){
                userChoice = b.innerText.toLocaleLowerCase();
                computerChoice = getComputerChoice()
                playRound(userChoice,computerChoice)
                r.textContent = `Round : ${round}`
                round+=1
            }
        })
        
    })
}

result()

function refresh(){
    location.reload();
}

