var fname   = document.getElementsByTagName("fname").value = window.location.search;

var lname    = document.getElementsByTagName("lname").value= window.location.search;

var numentry = document.getElementsByTagName("numentry").value= window.location.search;
numentry = numentry.substring(numentry.length-2);
numentry = parseInt(numentry);

var leaderboard = [ fname, lname, numentry ];

leaderboard.sort(function(a,b){
    return parseFloat(a.numentry) - parseFloat(b.numentry);
})

