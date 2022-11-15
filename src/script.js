function startGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "flex";
}

let botChoseArray = ["rock", "paper", "scissors"];
let countYou = 0;
let countBot = 0;

function onClickRock() {
    botIndex = Math.floor(Math.random()*3);
    botChose = botChoseArray[botIndex];
    document.getElementById("img-you").src = "src/images/rock.png";
    if (botChose == "rock") {
        // Draw
        document.getElementById("img-bot").src ="src/images/rock.png";
        document.getElementById("winner").innerHTML = "Draw";
    } else if (botChose == "paper") {
        // Lose
        countBot += 1;
        document.getElementById("score-bot").innerHTML = countBot;
        document.getElementById("img-bot").src = "src/images/paper.png";
        document.getElementById("winner").innerHTML = "Winner: Bot";
    } else {
        // Win
        countYou += 1;
        document.getElementById("score-you").innerHTML = countYou;
        document.getElementById("img-bot").src = "src/images/scissors.png";
        document.getElementById("winner").innerHTML = "Winner: You";
    }
    checkWinner()
}

function onClickPaper() {
    botIndex = Math.floor(Math.random()*3);
    botChose = botChoseArray[botIndex];
    document.getElementById("img-you").src = "src/images/paper.png";
    if (botChose == "rock") {
        // Win
        countYou += 1;
        document.getElementById("score-you").innerHTML = countYou;
        document.getElementById("img-bot").src ="src/images/rock.png";
        document.getElementById("winner").innerHTML = "Winner: You";
    } else if (botChose == "paper") {
        // Draw
        document.getElementById("img-bot").src = "src/images/paper.png";
        document.getElementById("winner").innerHTML = "Draw";
    } else {
        // Lose
        countBot += 1;
        document.getElementById("score-bot").innerHTML = countBot;
        document.getElementById("img-bot").src = "src/images/scissors.png";
        document.getElementById("winner").innerHTML = "Winner: Bot";
    }
    checkWinner()
}

function onClickScissors() {
    botIndex = Math.floor(Math.random()*3);
    botChose = botChoseArray[botIndex];
    document.getElementById("img-you").src = "src/images/scissors.png";
    if (botChose == "rock") {
        // Lose
        countBot += 1;
        document.getElementById("score-bot").innerHTML = countBot;
        document.getElementById("img-bot").src ="src/images/rock.png";
        document.getElementById("winner").innerHTML = "Winner: Bot";
    } else if (botChose == "paper") {
        // Win
        countYou += 1;
        document.getElementById("score-you").innerHTML = countYou;
        document.getElementById("img-bot").src = "src/images/paper.png";
        document.getElementById("winner").innerHTML = "Winner: You";
    } else {
        // Draw
        document.getElementById("img-bot").src = "src/images/scissors.png";
        document.getElementById("winner").innerHTML = "Draw";
    }
    checkWinner()
}

function checkWinner() {
    if (countBot == 3) {
        document.getElementById("choose-you").style.display = "none"
        document.getElementById("winner").innerHTML = "Bot Win!"
    } else if (countYou == 3) {
        document.getElementById("choose-you").style.display = "none"
        document.getElementById("winner").innerHTML = "You Win!"
    }
}

function onClickMainScreen() {
    document.getElementById("game").style.display = "none";
    document.getElementById("home").style.display = "flex";
    onClickReset()
}
function onClickReset() {
    countBot = 0;
    countYou = 0;
    document.getElementById("score-you").innerHTML = 0;
    document.getElementById("score-bot").innerHTML = 0;
    document.getElementById("img-bot").src = "";
    document.getElementById("img-you").src = "";
    document.getElementById("winner").innerHTML = "Best Of Five!";
    document.getElementById("choose-you").style.display = "flex"
    document.getElementById("img-bot").src = "src/images/empty.png"
    document.getElementById("img-you").src = "src/images/empty.png"
}

function onClickToggle() {
    if (document.getElementById("toggledark").value == "light") {
        document.body.style.background = "#222425";
        var allButton = document.getElementsByTagName("*");
        for (var i=0; i<allButton.length; i++){
            allButton[i].style.color = "white"
        }
        document.getElementById("you").style.borderRightColor = "white";
        document.getElementById("bot").style.borderLeftColor = "white";
        document.getElementById("toggledark").value = "dark";
    } else {
        document.body.style.background = "white";
        var allButton = document.getElementsByTagName("*");
        for (var i=0; i<allButton.length; i++){
            allButton[i].style.color = "black"
        }
        document.getElementById("you").style.borderRightColor = "black";
        document.getElementById("bot").style.borderLeftColor = "black";
        document.getElementById("toggledark").value = "light";        
    }
}