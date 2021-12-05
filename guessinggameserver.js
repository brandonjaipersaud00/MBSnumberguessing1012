var N = Math.floor(Math.random() * 100) + 1;
var CNT = 1; //counter up to number of tries based on chosen game mode
var ENTRY_TRIES = 1 //number of tries to get chosen number

var codes ={};

var express = require('express');
var app = express();
var idCounter = 0;

if ('action' == 'entry'){
    idCounter++
    var jsontext = JSON.stringify({
        win = true,
        'entry_tries': entry_tries,
        'guessnumb': guessnumb,
        'code' : answer
    });
}
else{
    var [entry_tries, guessnumb]
    = evaluate (codes[guessnumb] [answer]);
}

var win=false;
if (entry_tries < guessnumb) win = true;

var jsontext = JSON.stringify({
    win = true,
    'entry_tries': entry_tries,
    'guessnumb': guessnumb,
    'code' : answer
});
res.send(jsontext);

function evaluate(guessnumb, answer) {
    var entry_tries = 0;
    var guessnumb = 0;
}
