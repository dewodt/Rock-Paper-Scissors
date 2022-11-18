function startGame() {
    // Hide "home", display "game"
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "flex";
}

// Inisialisasi Variable
const botChoseArray = ["rock", "paper", "scissors"];
let countYou = 0;
let countBot = 0;
let countClick = 0;
let time = 10;
let autoupdate;

function startAnimation() {
    // Disable button rock, paper, scissors, reset saat animasi mulai
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("mainscr").disabled = true;
    document.getElementById("reset").disabled = true;

    // Ubah menjadi image rock saat animasi
    document.getElementById("img-you").src = "src/images/rock.png";
    document.getElementById("img-bot").src = "src/images/rock.png";

    // Mulai animasi
    document.getElementById("img-you").style.animation = "shakeYou 1.4s ease";
    document.getElementById("img-bot").style.animation = "shakeRobot 1.4s ease";

    // Color Disabled Button
    document.getElementById("rock").style.color = "#398CA8";
    document.getElementById("paper").style.color = "#398CA8";
    document.getElementById("scissors").style.color = "#398CA8";
    document.getElementById("mainscr").style.color = "#398CA8";
    document.getElementById("reset").style.color = "#398CA8";

    // Cursor Disabled Button
    document.getElementById("rock").style.cursor = "default";
    document.getElementById("paper").style.cursor = "default";
    document.getElementById("scissors").style.cursor = "default";
    document.getElementById("mainscr").style.cursor = "default";
    document.getElementById("reset").style.cursor = "default";
    
    // Reset animasi setelah 1.4 detik
    setTimeout(resetAnimation, 1400);
    
    function resetAnimation() {
        // Enable button rock, paper, scissors, reset setelah animasi selesai
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        document.getElementById("mainscr").disabled = false;
        document.getElementById("reset").disabled = false;

        // Reset animasi
        document.getElementById("img-you").style.animation = "";
        document.getElementById("img-bot").style.animation = "";

        // Reset Style Disabled Button
        if (document.getElementById("toggledark").value == "light") {
            newColor = "black";
        } else {
            newColor = "white";
        }
        document.getElementById("rock").style.color = newColor;
        document.getElementById("paper").style.color = newColor;
        document.getElementById("scissors").style.color = newColor;
        document.getElementById("mainscr").style.color = newColor;
        document.getElementById("reset").style.color = newColor;

        // Cursor
        document.getElementById("rock").style.cursor = "pointer";
        document.getElementById("paper").style.cursor = "pointer";
        document.getElementById("scissors").style.cursor = "pointer";
        document.getElementById("mainscr").style.cursor = "pointer";
        document.getElementById("reset").style.cursor = "pointer";
    }
}

function timeLeft() {
    // Inisialisasi waktu count downm
    time = 10;

    // Jika button RPS sudah diklik setidaknya satu kali, countdown mulai
    if (countClick > 0) {
        autoupdate = setInterval(updateTime, 1000);
    }

    function updateTime() {
        document.getElementById("time").innerHTML = `Time Left : ${time}`;
        time -= 1;
        if (time < 0) { // Jika time negative, reset.
            countBot += 1;
            document.getElementById("score-bot").innerHTML = countBot;
            document.getElementById("winner").innerHTML = "Winner : Bot";
            time = 10;
        }
        checkWinner();
    }
}

function onClickRock() {
    // Inisialisasi count down
    countClick += 1;
    clearInterval(autoupdate);
    document.getElementById("time").innerHTML = "Time Left :";

    // Mulai Animasi saat button di click
    startAnimation();

    // Tampilkan hasil setelah 1.4s (animasi selesai)
    setTimeout(clickRock, 1400);
    function clickRock() {
        botIndex = Math.floor(Math.random()*3);
        botChose = botChoseArray[botIndex];
        document.getElementById("img-you").src = "src/images/rock.png";
        if (botChose == "rock") {
            // Draw
            document.getElementById("img-bot").src = "src/images/rock.png";
            document.getElementById("winner").innerHTML = "Draw";
        } else if (botChose == "paper") {
            // Lose
            countBot += 1;
            document.getElementById("score-bot").innerHTML = countBot;
            document.getElementById("img-bot").src = "src/images/paper.png";
            document.getElementById("winner").innerHTML = "Winner : Bot";
        } else {
            // Win
            countYou += 1;
            document.getElementById("score-you").innerHTML = countYou;
            document.getElementById("img-bot").src = "src/images/scissors.png";
            document.getElementById("winner").innerHTML = "Winner : You";
        }

        // Memanggil Fungsi
        timeLeft();

        // Memeriksa Pemenang
        checkWinner();
    }
}

function onClickPaper() {
    // Inisialisasi count down
    countClick += 1;
    clearInterval(autoupdate);
    document.getElementById("time").innerHTML = "Time Left :";

    // Mulai animasi saat button diclick
    startAnimation();

    // Tampilkan hasil setelah 1.4s (animasi selesai)
    setTimeout(clickPaper, 1400);
    function clickPaper() {
        botIndex = Math.floor(Math.random()*3);
        botChose = botChoseArray[botIndex];
        document.getElementById("img-you").src = "src/images/paper.png";
        if (botChose == "rock") {
            // Win
            countYou += 1;
            document.getElementById("score-you").innerHTML = countYou;
            document.getElementById("img-bot").src ="src/images/rock.png";
            document.getElementById("winner").innerHTML = "Winner : You";
        } else if (botChose == "paper") {
            // Draw
            document.getElementById("img-bot").src = "src/images/paper.png";
            document.getElementById("winner").innerHTML = "Draw";
        } else {
            // Lose
            countBot += 1;
            document.getElementById("score-bot").innerHTML = countBot;
            document.getElementById("img-bot").src = "src/images/scissors.png";
            document.getElementById("winner").innerHTML = "Winner : Bot";
        }
        // Memanggil Fungsi
        timeLeft();

        // Mengecek Pemenang
        checkWinner();
    }
}

function onClickScissors() {
    // Inisialisasi count down
    countClick += 1;
    clearInterval(autoupdate);
    document.getElementById("time").innerHTML = "Time Left :";

    // Mulai animasi saat button diclick
    startAnimation();

    // Tampilkan hasil setelah animasi selesai
    setTimeout(clickScissors, 1400);
    function clickScissors() {
        botIndex = Math.floor(Math.random()*3);
        botChose = botChoseArray[botIndex];
        document.getElementById("img-you").src = "src/images/scissors.png";
        if (botChose == "rock") {
            // Lose
            countBot += 1;
            document.getElementById("score-bot").innerHTML = countBot;
            document.getElementById("img-bot").src ="src/images/rock.png";
            document.getElementById("winner").innerHTML = "Winner : Bot";
        } else if (botChose == "paper") {
            // Win
            countYou += 1;
            document.getElementById("score-you").innerHTML = countYou;
            document.getElementById("img-bot").src = "src/images/paper.png";
            document.getElementById("winner").innerHTML = "Winner : You";
        } else {
            // Draw
            document.getElementById("img-bot").src = "src/images/scissors.png";
            document.getElementById("winner").innerHTML = "Draw";
        }

        // Memanggil Fungsi
        timeLeft();

        // Mengecek Pemenang
        checkWinner();
    }
}

function checkWinner() {
    if (countBot == 3) { //Bot Menang
        clearInterval(autoupdate);
        document.getElementById("time-left").style.display = "none";
        document.getElementById("choose-you").style.display = "none";
        document.getElementById("winner").innerHTML = "Bot Win!";
    } else if (countYou == 3) { // Anda menang
        clearInterval(autoupdate);
        document.getElementById("time-left").style.display = "none";
        document.getElementById("choose-you").style.display = "none";
        document.getElementById("winner").innerHTML = "You Win!";
    }
}

function onClickMainScreen() {
    document.getElementById("game").style.display = "none";
    document.getElementById("home").style.display = "flex";
    onClickReset()
}

function onClickReset() {
    // Reset countdown
    clearInterval(autoupdate);
    document.getElementById("time").innerHTML = "Time Left :";

    // Count jadi 0
    countBot = 0;
    countYou = 0;
    document.getElementById("score-you").innerHTML = 0;
    document.getElementById("score-bot").innerHTML = 0;

    // Reset Winner
    document.getElementById("winner").innerHTML = "Best Of Five!";

    // Reset display
    document.getElementById("choose-you").style.display = "flex";
    document.getElementById("time-left").style.display = "flex";

    // Reset images
    document.getElementById("img-bot").src = "src/images/rock.png";
    document.getElementById("img-you").src = "src/images/rock.png";
}

function onClickToggle() {
    // Dari light ke dark
    if (document.getElementById("toggledark").value == "light") {
        document.body.style.background = "#222425";
        var allButton = document.getElementsByTagName("*");
        for (var i=0; i<allButton.length; i++){
            allButton[i].style.color = "white";
        }
        document.getElementById("you").style.borderRightColor = "white";
        document.getElementById("bot").style.borderLeftColor = "white";
        document.getElementById("toggledark").value = "dark";
    } else { // Dari dark ke light
        document.body.style.background = "white";
        var allButton = document.getElementsByTagName("*");
        for (var i=0; i<allButton.length; i++){
            allButton[i].style.color = "black";
        }
        document.getElementById("you").style.borderRightColor = "black";
        document.getElementById("bot").style.borderLeftColor = "black";
        document.getElementById("toggledark").value = "light";        
    }
}
