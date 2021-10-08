

const container = document.getElementById("container");
const div = document.createElement("div");
// div.innerHTML = "this boilerplate is ready for action!";
div.style.fontSize = "48px";
div.style.color = "red";
div.style.backgroundColor = "black";

container.appendChild(div);


// numberPlayer1 = document.getElementById("score").innerHTML = "1";

// numberPlayer2



let count = 3;
var started = false;


var time = document.getElementById('playerSetGameTime').value ;

function setTime(){
    time = document.getElementById('playerSetGameTime').value ;

};

//Start functie
function start() {
    countable = setInterval(function () {

        document.getElementById("startButton").innerHTML = count;

        if (count > 0) {
            count -= 1;
        } else if (count <= 0) {
            clearInterval(countable);
            started = true;
            gameTimer();
            count = "GO!";
            document.getElementById("startButton").innerHTML = count;
        }

    }, 1000);

}


//game duration
function gameTimer() {

    Z = setInterval(function () {

        document.getElementById("gameTimeCounter").innerHTML = time;

        if (time > 0) {
            time -= 1;
        } else if (time <= 0) {
            clearInterval(Z);
            started = false;
            gameEnd();
        }

    }, 1000);

}

//Key press detector
var player1Number = 0
var player2Number = 0
document.addEventListener('keydown', function (e) {
switch (e.keyCode) {
        case 87:
            if (started == true) {
                            keyRelease = false;
                            
                            document.getElementById("player1").innerHTML = player1Number++;
                        }
            break;
        case 38:
            if (started == true) {
                            keyRelease = false;
                            
                            document.getElementById("player2").innerHTML = player2Number++;
                        }
            break;

    }
});


//Game over functies
    var whoWins = "ITS A TIE!"

function gameEnd() {

    if (player1Number > player2Number){
        whoWins = "PLAYER1 WINS!"
    }
    else if (player2Number > player1Number){
        whoWins = "PLAYER2 WINS!"
    }
    document.getElementById("GameOver").style.display = "block"; 
    document.getElementById("winner").innerHTML = whoWins;
    document.getElementById("player1Score").innerHTML = player1Number-1;
    document.getElementById("player2Score").innerHTML = player2Number-1;


};
// var player1Number = 0
// var player2Number = 0
// document.addEventListener('keydown', keyPressed);
//       document.addEventListener('keyup', keyReleased);
//      var keyRelease = true;

//       function keyPressed(e) {
//         if (e.keyCode === 87 && keyRelease == true && started == true) {
//             keyRelease = false;
//             
//             document.getElementById("player1").innerHTML = player1Number++;
//         }
//                 else if (e.keyCode === 38 && keyRelease == true && started == true) {
//             keyRelease = false;
//             
//             document.getElementById("player2").innerHTML = player2Number++;
//         }
//     };
// function keyReleased(e) {
//     if (e.keyCode == 87) {
//         keyRelease = true;
//         
//     }
//        else if (e.keyCode == 38) {
//         keyRelease = true;
//         
//     }
// };





// var player2Number = 0
// document.addEventListener('keydown', keyPressed);
//       document.addEventListener('keyup', keyReleased);
//      var keyRelease = true;

//       function keyPressed(e) {
//         if (e.keyCode === 38 && keyRelease == true && started == true) {
//             keyRelease = false;
//             
//             document.getElementById("player2").innerHTML = player2Number++;
//         };
//     }
// function keyReleased(e) {
//     if (e.keyCode == 38) {
//         keyRelease = true;
//         
//     }
// };


