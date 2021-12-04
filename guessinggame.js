var x = document.getElementById("drop").value;
var n = Math.floor(Math.random() * 10) + 1;
var cnt = 1;
var entry_tries = 1


function Play() {
  var entry = parseInt(document.getElementById("entry").value);
  if(entry === n) {
    document.getElementById("output").innerHTML = 'That is correct! It took you ' + entry_tries + ' time(s) to guess it.';
    Winner();
  } else if(entry === 25) {
    document.getElementById("output").innerHTML = 'GAME OVER';
    GameOver();
  } else {
    document.getElementById("output").innerHTML = 'Wrong!';
    entry_tries++;
  }
  cnt++;
}



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
  
  function Weather (){
  
    
  }