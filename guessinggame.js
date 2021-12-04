var n = Math.floor(Math.random() * 100) + 1; //chosen random number
var cnt = 1; //counter up to number of tries based on chosen game mode
var entry_tries = 1 //number of tries to get chosen number

//gets the value of the level button (easy, med, hard, insane), extracts just the number part, and parses it to an integer
var guessnumb = document.getElementsByTagName("level").innerHTML = window.location.search;
guessnumb.toString();
guessnumb = guessnumb.substring(7);
guessnumb = parseInt(guessnumb);


function Play() {
  
  var entry = parseInt(document.getElementById("entry").value);
  if(entry === n) {
    document.getElementById("output").innerHTML = 'That is correct! It took you ' + entry_tries + ' time(s) to guess it.';
    Winner();
  }  else {
    document.getElementById("output").innerHTML = 'Wrong!';
    entry_tries++;
  }

  if(cnt === guessnumb) {
    //!!ENTRY SHOULD BE EQUAL TO AMOUNT OF TRIES BASED ON CHOSEN GAME MODE!!
    document.getElementById("output").innerHTML = 'GAME OVER';
    GameOver();
  }
  cnt++;
}
  


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


  
  function Leader() {
  
  }
