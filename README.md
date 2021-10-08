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

### Edited After Zoom Meeting
<p>The server randomly chooses a number, x, that is between 1 and 100. There will be four modes: easy, medium, hard, and insane. Easy mode will give the user 25 guesses, medium will give 15, and hard will give 5. Insane mode is separate, with x between 1 and 1000 and the user only gets one guess.</p>
<p>The leaderboard should be ordered with easy, medium, and hard buttons. It will list players with least amount of guesses taken as first place; if two players have the same amount of guesses for first place, list the players that have that same amount of guesses each in a separate line (so if there are three people that took one guess, have their names in first position, listed as personA, personB, personC, then if there are two people that took two guesses, have their names listed underneath in position 2, etc.) </p>

### Side Feature
<p> Our side feature is a weather dashboard, which will display information about the client’s local weather. It will include temperature, cloudiness (sunny, partially cloudy, or cloudy), precipitation (rain, snow, etc.), and wind speed/direction. </p>

### Functional Requirements
<p>1. Users can choose one of four modes to enter the game </p>
<p>2. Users can repeatedly enter a number between 1 and 100 up to the amount allowed per game mode </p>
<p>3. Users will receive a victory message if they win, or a failure message if they lose </p>
<p>4. Users can enter their name an unlimited amount of times into the respective leaderboard </p>
<p>5. The number of rankings avaliable on the leaderboard is equal to the number of tries in each mode </p>
<p>6. There are an unlimited number of unique user entries per ranking </p>
<p>7. If the uer wins the guessing game, they will be given an option to enter their name into the leaderboard, or to bypass that if they wish to </p>
<p>8. If the user decides to enter their name into the leaderboard, their name must include at least one letter or number </p>
<p>9. An error message will appear if the previous requirement is not met, and will ask the user to re-enter their name </p>
<p>10. The leaderboard will update immediately after user enters their name </p>
<p>11. Once the user completes the game, they can choose to either play again or quit </p>