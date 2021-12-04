var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var numentry = document.getElementById("numentry").value;
var leaderboard = [ fname, lname, numentry ];

leaderboard.sort(function(a,b){return a-b});
