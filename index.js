const player = {
  name : "standford",
  cheps : 23 
}

let cards = [];
let sum = 0;
let text = document.getElementById("text");
let card = document.getElementById("card");
let sumEL = document.getElementById("sum");
let message = "";
let isalive = false;
let hasblackjack = false;
let play  = document.getElementById("el")

play.innerHTML = player.name + " : $ " + player.cheps
 function rendomcard() {
  let  rendomcards = Math.floor(Math.random() *12 ) + 1;

  if (rendomcards === 1){
    return 11;
  }
  else if (rendomcards > 10 ){
    return 10;
  }
   else {
    return rendomcards;
   }
}

function renderGame() {  
sumEL.innerHTML = " sum :" + sum;
card.innerHTML = "cards :" +  cards;
console.log(cards)
  if (sum < 21){
  message = " you want to draw again";
  isalive = true;
} 
    else if (sum == 21){
      message = "you got black jacked" ;
      hasblackjack =true ;
    }
 
  else{
    message = "you out of the game";
    isalive = false ;
  }
  
  text.innerHTML = message;
}

function startGame() {
  let firstcard = rendomcard ();
  let secondcard = rendomcard()
  cards = [firstcard ,secondcard];
  card.innerHTML = cards;
  sum = firstcard + secondcard;
  renderGame();
}


 function newcards() {
  if (isalive === true && hasblackjack === false){
  let newcard = rendomcard() ;
  sum += newcard ;
  cards.push(newcard);
  renderGame() ; 

  }

 }




let largecountry = ["china" , "india" ,"usa" , "indonesia" ,"pakistan"]

for (let i = 0 ; i < largecountry.length ; i++){
console.log("- "  + largecountry[i] )
}




















