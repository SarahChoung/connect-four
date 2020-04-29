var connectFourTable = [
  ['row0_col0', 'row0_col1', 'row0_col2', 'row0_col3', 'row0_col4', 'row0_col5', 'row0_col6'],
  ['row1_col0', 'row1_col1', 'row1_col2', 'row1_col3', 'row1_col4', 'row1_col5', 'row1_col6'],
  ['row2_col0', 'row2_col1', 'row2_col2', 'row2_col3', 'row2_col4', 'row2_col5', 'row2_col6'],
  ['row3_col0', 'row3_col1', 'row3_col2', 'row3_col3', 'row3_col4', 'row3_col5', 'row3_col6'],
  ['row4_col0', 'row4_col1', 'row4_col2', 'row4_col3', 'row4_col4', 'row4_col5', 'row4_col6'],
  ['row5_col0', 'row5_col1', 'row5_col2', 'row5_col3', 'row5_col4', 'row5_col5', 'row5_col6'],
  ['row6_col0', 'row6_col1', 'row6_col2', 'row6_col3', 'row6_col4', 'row6_col5', 'row6_col6'],
];



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

/* restart game */

var modalWindow = document.querySelector("div#modal");

/* function to make modal appear on winnin
g
var win = false;
if condition that chances win to true once 4 in a row is met

if (win === true) {
  modalWindow.classList.remove.("hidden");
}

*/

var restartButton = document.querySelector("button#modal-button");
restartButton.addEventListener("click", restartGame);

function restartGame() {
  var redSlots = document.querySelectorAll("div.red");
  for (var i = 0; i < redSlots.length; i++) {
    redSlots[i].classList.add("gray");
    redSlots[i].classList.remove("red");
  }
  var blackSlots = document.querySelectorAll("div.black");
  for (var i = 0; i < blackSlots.length; i++) {
    blackSlots[i].classList.add("gray");
    blackSlots[i].classList.remove("black");
  }
  modalWindow.classList.add("hidden");
}

/* mouseover test */

var topRowSlots = document.querySelectorAll("div.listen");
for (var i = 0; i < topRowSlots.length; i++) {
  topRowSlots[i].addEventListener("mouseover", showPiece);
  topRowSlots[i].addEventListener("mouseout", hidePiece);
}

function showPiece(event) {
  var mouseoverSlot = event.target;
  if (player === "player1") {
    mouseoverSlot.classList.add("red");
    console.log(mouseoverSlot.classList);
  } else if (player === "player2") {
    mouseoverSlot.classList.add("black");
  }
}

function hidePiece(event) {
  var mouseoutSlot = event.target;
  if (mouseoutSlot.classList.contains("red")) {
    mouseoutSlot.classList.remove("red")
  } else if (mouseoutSlot.classList.contains("black")) {
    mouseoutSlot.classList.remove("black");
  }
}
