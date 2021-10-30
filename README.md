# Overview

### Name of Team
<p>MBS </p>

### Members of Team
<p>Brandon Jaipersaud, brandojp@my.yorku.ca, Section B Lab03 </p>
<p>Saba Yazdani, sabayzdn@my.yorku.ca, Section B Lab03 </p>
<p>Mahnsi Ruparelia, mahnsi@my.yorku.ca, Section B Lab03 </p>

### Project Title
<p>What Number am I Thinking of Between 1 and X? </p>

### Project Descripton
<p>Our web page is a number guessing game. The server starts by randomly choosing a number between 1 and X, and hides it from the user. It then asks the user how many attempts they want to guess the number (number of attempts must be less than X). The server then prompts the user to guess what the number between 1 and X is, and if the user guesses correctly, the server congratulates them, asks the user for their name, and adds their name to a winners list. If they guess wrong, they are prompted to keep guessing until they run out of tries. Once the user runs out of tries, the game ends. </p>

### Project Description - Edited After Zoom Meeting
<p>Our web page is a number guessing game. The server randomly chooses a number, x, that is between 1 and 100. There will be four modes: easy, medium, hard, and insane. Easy mode will give the user 25 guesses, medium will give 15, and hard will give 5. Insane mode is separate, with x between 1 and 1000 and the user only gets one guess. The server then prompts the user to guess what the number between 1 and X is, and if the user guesses correctly, the server congratulates them, asks the user for their name, and adds their name to a winners list. The user can choose to either enter their name, or skip that option. If they guess wrong, they are prompted to keep guessing until they run out of tries. Once the user runs out of tries, the game ends.</p>
<p>The leaderboard will be ordered by the easy, medium, and hard modes. It will list players with least amount of guesses taken as first place; if two players have the same amount of guesses, those players will each be listed in a separate line (so if there are three people that took one guess, have their names in first place, listed as personA, personB, personC, then if there are two people that took two guesses, have their names listed underneath in second place, etc.) </p>

### Side Feature
<p> Our side feature is a weather dashboard, which will display information about the client’s local weather. It will include temperature, cloudiness (sunny, partially cloudy, or cloudy), precipitation (rain, snow, etc.), and wind speed/direction. </p>

### Functional Requirements
<ol>
<li> Users can choose one of four modes (easy, medium, hard, insane) by clicking the respective button to enter the game </li>
<li> Users will repeatedly enter a number between 1 and 100 up to the amount allowed per game mode </li>
<li> Users will stop entering numbers once they've guessed correctly, or once they've run out of tries</li>
<li> Users will receive a victory message if they win, or a failure message if they lose </li>
<li> Users can enter their name an unlimited amount of times into the respective leaderboard, but only their best score will be shown </li>
<li> A users most recent attempt will be shown if they achieve their best score twice </li>
<li> The number of rankings avaliable on the leaderboard is equal to the number of tries in each mode </li>
<li> There are an unlimited number of unique user entries per ranking </li>
<li> If the user wins the guessing game, they will be given an option to enter their name into the leaderboard, or to bypass that if they wish to by pressing the skip button </li>
<li> If the user decides to enter their name into the leaderboard, their name must include at least one letter or number </li>
<li> An error message will appear if the previous requirement is not met, and will ask the user to re-enter their name </li>
<li> The user can choose to play the same mode again or select a different mode once the game is completed </li>
<li> The user can choose to exit the game if they do not want to play again </li>  
<li> The weather side feature will update every 20 minutes automatically </li>
<li> Users will be able to change the temperature between Celsius and Fahrenheit </li>
<li> Users will be able to change the wind speed between kilometres and miles </li>
<li> Celsius and kilometres will be the default settings in the weather side feature</li>
<li> The weather in Toronto will be shown by default and users can choose another major city or their own location from a drop-down menu in the side feature </li>
</ol>
