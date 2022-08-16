let firstCard=randomCard();
let secondCard=randomCard();
cards=[firstCard,secondCard]
let sum= firstCard+secondCard;
let hasBlackJack=false;
let isAlive=true;
let message="";
let messageEl=document.getElementById("message");
let sumEl=document.getElementById("sum");
let startBtn=document.getElementById("start");
let cardsEl=document.getElementById("card");
let newBtn=document.getElementById("new");
let name= document.getElementById("name");
let player={
    name:"Krishna",
    chips:"200$"

};
name.textContent=player.name+" : "+player.chips;

function randomCard(){
   let randomNumber= Math.floor(Math.random()*13)+1;
    if (randomNumber>10){
        return 10;
    }
    else if ( randomNumber ===1){
        return 11;
    }
    else{
        return randomNumber;
    }
}
function renderGame(){
cardsEl.textContent="Cards:"
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


startBtn.addEventListener("click",renderGame);

newBtn.addEventListener("click",function(e){
    startBtn.style.backgroundColor="grey";
  if(isAlive===true && hasBlackJack===false ){
    let card=randomCard();
  sum+=card;
  cards.push(card);
  renderGame();
  }
  else {
    newBtn.style.backgroundColor="grey";
  }
});