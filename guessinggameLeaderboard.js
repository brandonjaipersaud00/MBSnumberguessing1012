//gets name that was entered
var fname   = document.getElementsByTagName("fname").value = window.location.search;
fname = fname.replace("?fname=","");
fname = fname.replace("&numentry=","");
fname=fname.substring(0, fname.length - 2);

//gets number of entries that was entered
var numentry = document.getElementsByTagName("numentry").value= window.location.search;
numentry = numentry.substring(numentry.length-2);
numentry = parseInt(numentry);

//array 
var leaderboard = [ fname, numentry ];

//when a level is clicked, is prints the leaderboard with the name that was entered  and score
function printLeaderBoard(){
    document.getElementById("name1").innerHTML = fname;
    document.getElementById("score1").innerHTML = numentry;
}

leaderboard.sort(function(a,b){
    return parseFloat(a.numentry) - parseFloat(b.numentry);
})
