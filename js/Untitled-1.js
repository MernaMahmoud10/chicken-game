

var basket = document.getElementById("basket");
var egg1 = document.getElementsByClassName("egg")[0];
var egg2 = document.getElementsByClassName("egg")[1];
var egg3 = document.getElementsByClassName("egg")[2];
var pos = 0;
//position of the egg from the left of the window
var egg1Left = document.getElementById('chicken1Div').offsetLeft + egg1.offsetLeft;
var egg2Left = document.getElementById('chicken2Div').offsetLeft + egg2.offsetLeft;
var egg3Left = document.getElementById('chicken3Div').offsetLeft + egg3.offsetLeft;
var chicken1Div = document.getElementById("chicken1Div");
var chicken2Div = document.getElementById("chicken2Div");
var chicken3Div = document.getElementById("chicken3Div");
//picture of broken egg
var eggbroken1 = document.getElementsByClassName("eggbroken")[0];
var eggbroken2 = document.getElementsByClassName("eggbroken")[1];
var eggbroken3 = document.getElementsByClassName("eggbroken")[2];

//eggtop
var egg1Top = egg1.style.top;
var numegg1Top = Number(egg1Top.split("px")[0]);
var egg2Top = egg2.style.top;
var numegg2Top = Number(egg2Top.split("px")[0]);
var egg3Top = egg2.style.top;
var numegg3Top = Number(egg3Top.split("px")[0]);

//score and life
var score = 0;
var life = 10;
document.getElementById("score").innerHTML = score;
document.getElementById("life").innerHTML = life;
//audio
var startGameAudio = document.getElementById("startGame");
var gameOverAudio = document.getElementById("gameOverSound");

//startGameAudioPlay function
function playStartGameAudio() {
    
    startGameAudio.play();
    startGameAudio.currentTime = 0;
  }

  function pauseStartGameAudio()
  {
    startGameAudio.pause();

  }

  //game over function 
  function playGameOverAudio()
  {
    gameOverAudio.play();

  }

  function playStartGameAudio() {
    var startGameAudio = document.getElementById("startGame");
    startGameAudio.play();
  }
//function to move basket with mouse move
document.addEventListener("mousemove", function (e) {
    basket.style.left = e.clientX
    document.getElementById("scoreOnBasket").style.left=e.clientX+Number('33')

})

document.getElementById("play").addEventListener("click", function () {
    debugger;
    hoho();
    document.getElementById("gameStart").style.display = 'none'
})

document.getElementById("playAgain").addEventListener("click", function () {
    debugger;
    document.getElementById("gameStart").style.display = 'block';
    document.getElementsByClassName("chickenEggsDiv")[0].style.display = 'block';
    document.getElementById("gameOver").style.display = 'none';
    document.getElementById("gameDetails").style.display = 'flex';

})

function hoho() {
    function stopInterval() {

        clearInterval(intervalForFirstTime);
    };

    const intervalForFirstTime = setInterval(eggMove, 500);
    //funcyion of the movement of the egg at first time
    function eggMove() {
        playStartGameAudio();

        eggMovement();

        //eggtop
        var egg1Top = egg1.style.top;
        var numegg1Top = Number(egg1Top.split("px")[0]);
        var egg2Top = egg2.style.top;
        var numegg2Top = Number(egg2Top.split("px")[0]);
        var egg3Top = egg2.style.top;
        var numegg3Top = Number(egg3Top.split("px")[0]);


        // the egg reached the top edge of the basket
        if (numegg1Top == basket.offsetTop - chicken1Div.offsetTop - basket.offsetHeight) {
            stopInterval()
            // the position of the basket contain the first egg or not

            if (basket.offsetLeft <= egg1Left + 5 && basket.offsetLeft >= egg1Left - 40) {
                //set time out to make the display none having a delay
                setTimeout(function () {
                    egg1.style.display = "none";
                    score += 1;
                }, 1500)

                setTimeout(function () { startEgg1(); }, 2500)



            }
            else {
                setTimeout(function () { egg1.style.display = "none"; }, 1500)
                setTimeout(function () {
                    eggbroken1.style.display = "block";
                    life = life - 1;
                }, 1700)

                setTimeout(function () { startEgg1(); }, 2500)
            }
            document.getElementById("score").innerHTML = score;
            if (life <= 0) {
                stopInterval()
                endGame()
            }
            else {
                document.getElementById("life").innerHTML = life;
            }
        }

        //second egg
        if (numegg2Top == basket.offsetTop - chicken2Div.offsetTop - basket.offsetHeight) {
            stopInterval(intervalForFirstTime)

            if (basket.offsetLeft <= egg2Left + 5 && basket.offsetLeft >= egg2Left - 40) {
                setTimeout(function () {
                    egg2.style.display = "none";
                    score += 1;
                }, 1500)

                setTimeout(function () { startEgg2(); }, 2500)


            }
            else {
                debugger;
                setTimeout(function () { egg2.style.display = "none"; }, 1500)
                setTimeout(function () {
                    eggbroken2.style.display = "block";
                    life = life - 1;
                }, 1700)
                setTimeout(function () { startEgg2(); }, 2500)


            }
            document.getElementById("score").innerHTML = score;
            if (life <= 0) {
                stopInterval();
                endGame()
            }
            else {
                document.getElementById("life").innerHTML = life;
            }
        }

        //third egg
        if (numegg3Top == basket.offsetTop - chicken3Div.offsetTop - basket.offsetHeight) {
            debugger;
            stopInterval()
            if (basket.offsetLeft <= egg3Left + 5 && basket.offsetLeft >= egg3Left - 40) {
                setTimeout(function () {
                    egg3.style.display = "none";
                    score += 1;
                }, 1500)
                score += 1;
                setTimeout(function () { startEgg3(); }, 2500)


            }
            else {
                setTimeout(function () { egg3.style.display = "none"; }, 1500)
                setTimeout(function () {
                    eggbroken3.style.display = "block";
                    life = life - 1;
                }, 1700)
                setTimeout(function () { startEgg3(); }, 2500)
            }
            document.getElementById("score").innerHTML = score;
            if (life <= 0) {
                stopInterval()
                endGame()
            }
            else {
                document.getElementById("life").innerHTML = life;
            }
        }

    }

}





function eggMovement() {
    pos = pos + 90.5;
    egg1.style.top = pos + "px";
    egg2.style.top = pos + "px";
    egg3.style.top = pos + "px";
    // egg1.style.display = "block";
    // egg2.style.display = "block";
    // egg3.style.display = "block";




}


// function startEggwithHighSpeed()
// {   
//     pos=0;
//     setInterval (eggMove ,1000);

//     egg1.style.display="block";
//     egg2.style.display="block";
//     egg3.style.display="block";




// }

function startEgg3() {
    debugger;
    document.getElementsByClassName("egg")[2].style.top = '75px';
    document.getElementsByClassName("egg")[2].style.display = 'block';
    document.getElementsByClassName("eggbroken")[2].style.display = 'none';
    var pos3 = 0;
    const thirdEgg = setInterval(function () {


        thirdMovement()
        var egg3secondloopTop = egg3.style.top;
        var numegg3secLoopTop = Number(egg3secondloopTop.split("px")[0]);

        if (numegg3secLoopTop == basket.offsetTop - chicken3Div.offsetTop - basket.offsetHeight) {
            stopIntervalforthirdEgg()
            if (basket.offsetLeft <= egg3Left + 5 && basket.offsetLeft >= egg3Left - 40) {
                setTimeout(function () {
                    egg3.style.display = "none";
                    score += 1;
                }, 1500)

                setTimeout(function () { startEgg3(); }, 2500)


            }
            else {
                setTimeout(function () { egg3.style.display = "none"; }, 1500)
                setTimeout(function () {
                    eggbroken3.style.display = "block";
                    life = life - 1;
                }, 1700)

                setTimeout(function () { startEgg3(); }, 2500)

            }
            document.getElementById("score").innerHTML = score;
            if (life <= 0) {
                stopIntervalforthirdEgg();
                endGame()
            }
            else {
                document.getElementById("life").innerHTML = life;
            }
        }
    }, 500)

    function stopIntervalforthirdEgg() {
        clearInterval(thirdEgg)
    }
    function thirdMovement() {
        pos3 = pos3 + 90.5;
        egg3.style.top = pos + "px";
    }


}

function startEgg2() {
    document.getElementsByClassName("egg")[1].style.top = '75px';
    document.getElementsByClassName("egg")[1].style.display = 'block';
    document.getElementsByClassName("eggbroken")[1].style.display = 'none';

    var pos2 = 0;
    const secondEgg = setInterval(function () {

        secondMovement()
        var egg2secondloopTop = egg2.style.top;
        var numegg2secLoopTop = Number(egg2secondloopTop.split("px")[0]);


        if (numegg2secLoopTop == basket.offsetTop - chicken2Div.offsetTop - basket.offsetHeight) {
            stopIntervalforsecondEgg()
            if (basket.offsetLeft <= egg2Left + 5 && basket.offsetLeft >= egg2Left - 40) {
                setTimeout(function () {
                    egg2.style.display = "none";
                    score += 1;
                }, 1500)

                setTimeout(function () { startEgg2(); }, 2500)


            }
            else {
                setTimeout(function () { egg2.style.display = "none"; }, 1500)
                setTimeout(function () {
                    eggbroken2.style.display = "block";
                    life = life - 1;
                }, 1700)

                setTimeout(function () { startEgg2(); }, 2500)
            }
            document.getElementById("score").innerHTML = score;
            if (life <= 0) {
                stopIntervalforsecondEgg()
                endGame()
            }
            else {
                document.getElementById("life").innerHTML = life;
            }

        }
    }, 500)

    function stopIntervalforsecondEgg() {
        clearInterval(secondEgg)
    }
    function secondMovement() {
        pos2 = pos2 + 90.5;
        egg2.style.top = pos + "px";
    }


}

function startEgg1() {
    document.getElementsByClassName("egg")[0].style.top = '75px';
    document.getElementsByClassName("egg")[0].style.display = 'block';
    document.getElementsByClassName("eggbroken")[0].style.display = 'none';

    var pos1 = 0;
    const firstEgg = setInterval(function () {

        firstMovement()
        var egg1secondloopTop = egg1.style.top;
        var numegg1secLoopTop = Number(egg1secondloopTop.split("px")[0]);

        if (numegg1secLoopTop == basket.offsetTop - chicken1Div.offsetTop - basket.offsetHeight) {
            stopIntervalforfirstEgg()
            if (basket.offsetLeft <= egg1Left + 5 && basket.offsetLeft >= egg1Left - 40) {
                setTimeout(function () {
                    egg1.style.display = "none";
                    score += 1;
                }, 1500)

                setTimeout(function () { startEgg1(); }, 2500)


            }
            else {
                setTimeout(function () { egg1.style.display = "none"; }, 1500)
                setTimeout(function () {
                    eggbroken1.style.display = "block";
                    life = life - 1;
                }, 1700)

                setTimeout(function () { startEgg1(); }, 2500)

            }
            document.getElementById("score").innerHTML = score;
            if (life <= 0) {
                stopIntervalforfirstEgg()
                endGame()
            }
            else {
                document.getElementById("life").innerHTML = life;
            }


        }
    }, 500)

    function stopIntervalforfirstEgg() {
        clearInterval(firstEgg)
    }
    function firstMovement() {
        pos1 = pos1 + 90.5;
        egg1.style.top = pos + "px";
    }


}

function endGame() {
    document.getElementsByClassName("chickenEggsDiv")[0].style.display = 'none';
    document.getElementById("gameOver").style.display = 'block';
    document.getElementsByClassName("scoreInGameOver")[0].innerHTML = score;
    document.getElementById("gameDetails").style.display = 'none';
    pauseStartGameAudio();
    playGameOverAudio()

    
}


