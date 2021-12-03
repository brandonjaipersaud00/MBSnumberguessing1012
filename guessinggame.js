var x = document.getElementById("drop").value;
var n = Math.floor(Math.random() * 100) + 1;
var result = document.getElementById("result");
var submit = document.getElementById("submit");
var entry = document.getElementById("entry");
var cnt = 1;

function Play() {
    var Uservalue = Number(entry.value);
    if(Uservalue === n) {
      result.innerHTML = 'That is correct!';
      Winner();
    } else if(Uservalue === 25) {
      result.innerHTML = 'GAME OVER';
      GameOver();
    } else {
      result.innerHTML = 'Wrong!';
    }
    cnt++;
  }


  
  function Leader() {
  
  }
  
  function Weather (){
  
    
  }