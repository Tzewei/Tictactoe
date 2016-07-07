// add in check if box has existing o or x.

var boxState = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
];
var playerTurn = 0; //Player 1 = 0 = o, Player2 = 1 = x
var gameCount = 9;
var winner;
var boxPtr;
var sign = -1;

initialize();



function changeBox(sign, choice) {
    var pointer;
    console.log("choice " + choice);
    pointer = document.getElementById(choice);
    console.log("pointer " + pointer.id);

    pointer.style = "background-color:pink";
    console.log("sign in changeBox" + sign);

    if (sign == 1) {
        console.log("sign here is 1");
        pointer.innerText =  "X";
    } else {
        pointer.innerText =  "O";
    }
}


function initialize() {
    initButton();
    initBox();
}

function initButton() {
    var resetBtn = document.getElementsByClassName("resetButton");
    console.log(resetBtn);

    resetBtn[0].addEventListener("click", function() {
        //newGame();
    });
}

function newGame(){
  var pointer;
  boxState = [
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, 10]
  ];
  playerTurn = 0; //Player 1 = 0 = o, Player2 = 1 = x
  gameCount = 9;
  winner = undefined;
  sign = -1;
  pointer = document.getElementsByClassName("box");
  for( var count = 0; count < 10 ; count++ ){
    pointer[count].style = "background-color:white";
    pointer[count].innerText =  " ";
  };
}



function initBox() {
    boxPtr = document.getElementsByClassName("box");
    console.log(boxPtr);
    boxPtr[0].addEventListener("click", function() {
        playerSelect(boxPtr[0].id);
    });
    boxPtr[1].addEventListener("click", function() {
        playerSelect(boxPtr[1].id);
    });
    boxPtr[2].addEventListener("click", function() {
        playerSelect(boxPtr[2].id);
    });
    boxPtr[3].addEventListener("click", function() {
        playerSelect(boxPtr[3].id);
    });
    boxPtr[4].addEventListener("click", function() {
        playerSelect(boxPtr[4].id);
    });
    boxPtr[5].addEventListener("click", function() {
        playerSelect(boxPtr[5].id);
    });
    boxPtr[6].addEventListener("click", function() {
        playerSelect(boxPtr[6].id);
    });
    boxPtr[7].addEventListener("click", function() {
        playerSelect(boxPtr[7].id);
    });
    boxPtr[8].addEventListener("click", function() {
        playerSelect(boxPtr[8].id);
    });
}

function playerSelect(choice) {
    sign = -1;


checkwinCombo();
    if (winner == "0") alert("The Winner is Player 1!");
    else if(winner == '1') alert("The Winner is Player 2!");


    else if (gameCount == 0 && winner == undefined)
        alert("Its a Draw!");
    else if (gameCount !== 0 && winner == undefined) {
        if (playerTurn === 0) { //Player 1 = 0 = o
            sign = "0";
            playerTurn++;
        } else {
            sign = "1";
            playerTurn--;
        }

        switch (choice) {
            case "box1":
                boxState[0][0] = sign;
                console.log("sign in choice " + sign);
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[0][0]);
                console.log("GameCount" + gameCount);
                break;
            case "box2":
                boxState[0][1] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[0][1]);
                console.log("GameCount" + gameCount);
                break;
            case "box3":
                boxState[0][2] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[0][2]);
                console.log("GameCount" + gameCount);
                break;
            case "box4":
                boxState[1][0] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[1][0]);
                console.log("GameCount" + gameCount);
                break;
            case "box5":
                boxState[1][1] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[1][1]);
                console.log("GameCount" + gameCount);
                break;
            case "box6":
                boxState[1][2] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[1][2]);
                console.log("GameCount" + gameCount);
                break;
            case "box7":
                boxState[2][0] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[2][0]);
                console.log("GameCount" + gameCount);
                break;
            case "box8":
                boxState[2][1] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[2][1]);
                console.log("GameCount" + gameCount);
            case "box9":
                boxState[2][2] = sign;
                changeBox(sign, choice);
                console.log("case1 BoxState00 =" + boxState[2][2]);
                console.log("GameCount" + gameCount);
                break;

            default:
                console.log("error at Switch");
        }//switch
        gameCount--;

    } else alert("All Boxes filled up");
}

function checkwinCombo() {
    if ((boxState[0][0] === boxState[0][1]) && (boxState[0][1] === boxState[0][2])) winner = boxState[0][2];
    if ((boxState[1][0] === boxState[1][1]) && (boxState[1][1] === boxState[1][2])) winner = boxState[1][2];
    if ((boxState[2][0] === boxState[2][1]) && (boxState[2][1] === boxState[2][2])) winner = boxState[2][2];
    if ((boxState[0][0] === boxState[1][0]) && (boxState[1][0] === boxState[2][0])) winner = boxState[2][0];
    if ((boxState[0][1] === boxState[1][1]) && (boxState[1][1] === boxState[2][1])) winner = boxState[2][1];
    if ((boxState[0][2] === boxState[1][2]) && (boxState[1][2] === boxState[2][2])) winner = boxState[2][2];
    if ((boxState[0][2] === boxState[1][1]) && (boxState[1][1] === boxState[2][0])) winner = boxState[2][0];
    if ((boxState[0][0] === boxState[1][1]) && (boxState[1][1] === boxState[2][2])) winner = boxState[2][2];

    console.log("winner " + winner);
    //alert("winner "+winner);
}
