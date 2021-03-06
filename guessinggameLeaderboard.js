//gets name that was entered
const params = (new URL(document.location)).searchParams;
var fname=params.get("fname");
var lname=params.get("lname");

//gets number of entries that was entered
var numentry = params.get("numentry");

//array 
var leaderboard = [ fname, lname, numentry ];

//prints the leaderboard with the name that was entered  and score
window.onload = function(){
    document.getElementById("name1").innerHTML = fname + " " + lname;
    document.getElementById("score1").innerHTML = numentry;
}

leaderboard.sort(function(a,b){
    return parseFloat(a.numentry) - parseFloat(b.numentry);
})
