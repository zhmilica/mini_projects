

let userInput = 'bomb';
userInput = userInput.toLowerCase();

function getComputerChoice(){
  Math.floor(Math.random() * 3)
    switch(randomNumber){
      case 0: 
        return 'rock';
      case 1: 
        return 'paper';
      case 2: 
        return 'scissors';
    }
  }

function determineWinner(userChoice, computerChoice){
  if (userChoice === 'bomb'){
    return 'You won with that BOMB!';
  }
  if(userChoice === computerChoice){
    return 'The game is a tie!';
}
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }
  
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }
  
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }
 
  console.log(determineWinner('paper', 'scissors'));
  //prints something like 'The computer won!'
  
  function playGame(){
    let userChoice = userInput;
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  console.log(playGame());
