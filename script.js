let player = 0
let computer = 0
let rps = ['rock','paper','scissor']
let user;
let rand;
function getComputerChoice(){
    rand = Math.floor(Math.random() * rps.length)
    return rps[rand]
}

function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        alert("its tie!")
    }else if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissor') || (playerSelection == 'scissor' && playerSelection == 'rock')){
        computer+=1
        alert(`Your choice ${playerSelection} and computer choice ${computerSelection}`)
        alert(`computer won and score is ${computer}`)
    }else if((playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'rock' && playerSelection == 'scissor')){
        player+=1
        alert(`Your choice ${playerSelection} and computer choice ${computerSelection}`)
        alert(`You won and your score is ${player}`)
    }else{
        alert("Nothing!")
    }
}

let computerChoice;
for(let round = 1; round<=5; round++){
    user = prompt(`Enter Your choice: Round${round}`)
    computerChoice = getComputerChoice()
    playRound(user,computerChoice)
    console.log(rand)
}

if(player > computer){
    alert(`you won score ${player}`)
}else if(player < computer){
    alert(`Computer won score ${player} you loser!`)
}