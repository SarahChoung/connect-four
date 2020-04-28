var connectFourTable = [
  ['row0_col0', 'row0_col1', 'row0_col2', 'row0_col3', 'row0_col4', 'row0_col5', 'row0_col6'],
  ['row1_col0', 'row1_col1', 'row1_col2', 'row1_col3', 'row1_col4', 'row1_col5', 'row1_col6'],
  ['row2_col0', 'row2_col1', 'row2_col2', 'row2_col3', 'row2_col4', 'row2_col5', 'row2_col6'],
  ['row3_col0', 'row3_col1', 'row3_col2', 'row3_col3', 'row3_col4', 'row3_col5', 'row3_col6'],
  ['row4_col0', 'row4_col1', 'row4_col2', 'row4_col3', 'row4_col4', 'row4_col5', 'row4_col6'],
  ['row5_col0', 'row5_col1', 'row5_col2', 'row5_col3', 'row5_col4', 'row5_col5', 'row5_col6'],
  ['row6_col0', 'row6_col1', 'row6_col2', 'row6_col3', 'row6_col4', 'row6_col5', 'row6_col6'],
];









/* pickPlayer();

function startGame() {
  pickPlayer();
}

var randomPlayer = ["red", "black"];

*/
/*
function pickPlayer() {
  for (var s = 0; s < 1; s++) {
    var randomSpot = Math.floor(Math.random() * randomPlayer.length);
    var finalSpot = randomPlayer[s];//
    randomPlayer[s] = randomPlayer[randomSpot];
    finalSpot = randomPlayer[randomSpot];
  }
}
*/



window.addEventListener('load', runRed);


/* This is for later when we connect pickPlayer (to randomize who goes first) to
    either runRed or runBlack depending on the output of the
    pickPlayer function. Right it's set to runRed on load.*/
function runRed() {
  redContainer0();
}




/* Red game piece empty space global variables */
var emptyRedSpace0 = document.querySelector("#row0_col0");
var emptyRedSpace1 = document.querySelector("#row0_col1");
var emptyRedSpace2 = document.querySelector("#row0_col2");
var emptyRedSpace3 = document.querySelector("#row0_col3");
var emptyRedSpace4 = document.querySelector("#row0_col4");
var emptyRedSpace5 = document.querySelector("#row0_col5");
var emptyRedSpace6 = document.querySelector("#row0_col6");

/* Red game pieces appear when hoved over by mouse */

function redContainer0() {
  emptyRedSpace0.addEventListener("mouseover", displayRedPiece0);
  function displayRedPiece0() {
  emptyRedSpace0.classList.add("red");
  }
  emptyRedSpace0.addEventListener("mouseout", hidePiece0);
  function hidePiece0() {
  emptyRedSpace0.classList.remove("red");
  }
}

/* On next commit, I'll clean up the code below to reflect that of redContainer0.*/

emptyRedSpace1.addEventListener("mouseover", displayRedPiece1);
function displayRedPiece1() {
  emptyRedSpace1.classList.add("red");
}
emptyRedSpace1.addEventListener("mouseout", function hidePiece1(){
  emptyRedSpace1.classList.remove("red");
});



emptyRedSpace2.addEventListener("mouseover", displayRedPiece2);
function displayRedPiece2() {
  emptyRedSpace2.classList.add("red");
}
emptyRedSpace2.addEventListener("mouseout", function hidePiece2() {
  emptyRedSpace2.classList.remove("red");
});


emptyRedSpace3.addEventListener("mouseover", displayRedPiece3);
function displayRedPiece3() {
  emptyRedSpace3.classList.add("red");
}
emptyRedSpace3.addEventListener("mouseout", function hidePiece3() {
  emptyRedSpace3.classList.remove("red");
});


emptyRedSpace4.addEventListener("mouseover", displayRedPiece4);
function displayRedPiece4() {
  emptyRedSpace4.classList.add("red");
}
emptyRedSpace4.addEventListener("mouseout", function hidePiece4() {
  emptyRedSpace4.classList.remove("red");
});



emptyRedSpace5.addEventListener("mouseover", displayRedPiece5);
function displayRedPiece5() {
  emptyRedSpace5.classList.add("red");
}
emptyRedSpace5.addEventListener("mouseout", function hidePiece5() {
  emptyRedSpace5.classList.remove("red");
});


emptyRedSpace6.addEventListener("mouseover", displayRedPiece6);
function displayRedPiece6() {
  emptyRedSpace6.classList.add("red");
}
emptyRedSpace6.addEventListener("mouseout", function hidePiece6() {
  emptyRedSpace6.classList.remove("red");
});
/*End of red game pieces appear when hoved over by mouse*/



var player = "player1";
var playerText = document.querySelector("h2.current-player");

/* adds disc to bottom of the row and switches players */
var topRow = document.querySelector("div.row-0");
topRow.addEventListener("click", handleClick);
function handleClick(event) {
  var topRowSpace = event.target;
  var topRowSpaceColumn = topRowSpace.id.charAt(8);


  var column = document.querySelectorAll("div.gray");

  var columnArray = [];
  for (var i = 0; i < column.length; i++) {
    if (column[i].id.charAt(8) === topRowSpaceColumn) {
      columnArray.push(column[i]);
    }
  }

  var j = columnArray.length - 1;

  if (player === "player1") {
    while (j >= 0) {
      if (columnArray[j].classList.contains("gray")) {
        columnArray[j].classList.remove("gray");
        columnArray[j].classList.add("red");
        player = "player2";
        playerText.innerText = "Player 2";
        return;
      } else {
        j--;
      }
    }
  }

  if (player === "player2") {
    while (j >= 0) {
      if (columnArray[j].classList.contains("gray")) {
        columnArray[j].classList.remove("gray");
        columnArray[j].classList.add("black");
        player = "player1"
        playerText.innerText = "Player 1";
        return;
      } else {
        j--;
      }
    }
  }
}
/* end of disc adding function */

