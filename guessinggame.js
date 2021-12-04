var n = Math.floor(Math.random() * 100) + 1; //chosen random number
var cnt = 1; //counter up to number of tries based on chosen game mode
var entry_tries = 1 //number of tries to get chosen number

//gets the value of the level button (easy, med, hard, insane), extracts just the number part, and parses it to an integer
var guessnumb = document.getElementsByTagName("level").innerHTML = window.location.search;
guessnumb.toString();
guessnumb = guessnumb.substring(7);
guessnumb = parseInt(guessnumb);
var tempguess = guessnumb;

//circles 
var h=0;
var arr= [];
arr.length=(guessnumb);
    
for (h=0; h<arr.length; h++){
     arr[h]="<p class = circle id='circlesleft' ></p>"
  }

window.onload = function(){
  document.getElementById("circlesleft").innerHTML=arr;
  document.getElementById("guessesLeft").innerHTML = "You have " + guessnumb + " guesses left";
  document.getElementById("output").innerHTML = 'START';
}

function changeCircle(index){

  arr[index]= "<p class = circlered id='circlesleft' ></p>";
  document.getElementById("circlesleft").innerHTML = arr;

}



function Play() {
  
  
  var entry = parseInt(document.getElementById("entry").value);
  if(entry === n) {
    document.getElementById("output").innerHTML = 'That is correct! It took you ' + entry_tries + ' time(s) to guess it.';
    Winner();
  } 
  else if(entry_tries === guessnumb) {
    
    document.getElementById("output").innerHTML = 'GAME OVER';
    document.getElementById("guessesLeft").innerHTML = "You have 0 guesses left";
    changeCircle(guessnumb-1);
    GameOver();
  }
else {
    document.getElementById("output").innerHTML = 'Wrong!';
    entry_tries++;
    tempguess--;
    document.getElementById("guessesLeft").innerHTML = "You have " + tempguess + " guesses left"; }

  //updates circles after each try
  changeCircle(cnt-1);   

  cnt++;

    

  }

//if number of tries used reaches guessnumb (max number of tries allowed), game is over.
  


//for disabling and enabling buttons
function Winner() {
  document.getElementById("submit").disabled = true;
  document.getElementbyId("Home").disabled = true;
  document.getElementbyId("Leaderboard Entry").disabled = false;
}


function GameOver() {
    document.getElementById("submit").disabled = true;
    document.getElementbyId("Home").disabled = false;
    document.getElementbyId("Leaderboard Entry").disabled = true;
      }



function circlesOfGuesses(){
  
  document.getElementById("circlesleft").innerHTML = arr;

}

