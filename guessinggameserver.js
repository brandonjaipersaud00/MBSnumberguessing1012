var N = Math.floor(Math.random() * 100) + 1;
var CNT = 1; //counter up to number of tries based on chosen game mode
var ENTRY_TRIES = 1 //number of tries to get chosen number

var codes ={};

var express = require('express');
var app = express();
var idCounter = 0;
