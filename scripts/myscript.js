var turn = 1; // player1 = 0, player2 = 1
var count = 3; //count total moves
var winner; //Is there a winner No = 0, Yes = 1
var boxState=[];
var moveHistory = [];

var newGame = function() {

  initialize();
  //playerMove(turn);

//document.getElementById("box1").addEventListener("click", function(){alert("hello");});

}

var initialize = function(){
  var boxState = [];
  var moveHistory = [];
  count = 9;
  winner = 0;
  turn = 1;
  alert("New Game Initiated! \n\n Player 1 is X, Select position your tile!");
  checkWinCount();
}

function playerSelect(obj){
  alert(obj.id[3]);
  var x = obj.id[3];
  var y = turn;
  boxState[x] = turn;
  alert("boxstate = " + boxState);
}


var playerMove = function(obj){
  if( turn ){
    alert("Player 2 is O, Select position your tile!");
    turn = 0;
  }
  else{
    alert("Player 1 is X, Select position your tile!");
    turn = 1;
  }
  count--;
}

var checkWinCount = function (){
  if( (count != 0) && (winner != 1) ){
    alert("count: "+ count + " turn: " + turn);
  }
  else{
    alert("Game Completed!");
  }

}

function checkWinCombo(){
  var winCombo =
  [ [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,3],[3,6,9],
    [1,5,9],[3,5,7] ];

  for( var i = 0; i < 8; i++ ){
    console.log(winCombo[0,i]);
  }

}

function checkWinner(){

}

var mouseDown = function(){
  alert( "mousedown inside board");
}



function clickMeEvent(obj) {
  alert(obj.id);

}



/* winning combo
  123
  456
  789
  147
  258
  369
  159
  357
  00 11 - True
*/


/*var boxClick  = function(boxNum) {

      var boxID = "box" + boxNum;
      alert(boxID);
      //document.getElementById('boxID').style.background-color: green;
}*/
