//Global Variables

var player;
var playerText = document.querySelector("h2.current-player");
var randomPlayer = ["player1", "player2"];

var player1WinsNumber = 0;
var player2WinsNumber = 0;


//Pick Random Player to Start

window.addEventListener("load", pickPlayer);

function pickPlayer() {
  var randomIndex = Math.floor(Math.random() * 2);
  player = randomPlayer[randomIndex];
  if (player === "player1") {
    playerText.innerText = "Player 1";
  } else if (player === "player2") {
    playerText.innerText = "Player 2";
  }
}


//Check Win Conditions

var connectFourTable = [
  ['row1_col0', 'row1_col1', 'row1_col2', 'row1_col3', 'row1_col4', 'row1_col5', 'row1_col6'],
  ['row2_col0', 'row2_col1', 'row2_col2', 'row2_col3', 'row2_col4', 'row2_col5', 'row2_col6'],
  ['row3_col0', 'row3_col1', 'row3_col2', 'row3_col3', 'row3_col4', 'row3_col5', 'row3_col6'],
  ['row4_col0', 'row4_col1', 'row4_col2', 'row4_col3', 'row4_col4', 'row4_col5', 'row4_col6'],
  ['row5_col0', 'row5_col1', 'row5_col2', 'row5_col3', 'row5_col4', 'row5_col5', 'row5_col6'],
  ['row6_col0', 'row6_col1', 'row6_col2', 'row6_col3', 'row6_col4', 'row6_col5', 'row6_col6'],
];


var modalWindow = document.querySelector("div#modal");
var gameWinner = document.getElementById('winner');

var verticalChecked;
var horizontalChecked;
var diagDownChecked;
var diagUpChecked;


function checkVertical() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 6; j++) {
      var targetSquare1 = document.getElementById(connectFourTable[i][j]);
      var targetSquare2 = document.getElementById(connectFourTable[i + 1][j]);
      var targetSquare3 = document.getElementById(connectFourTable[i + 2][j]);
      var targetSquare4 = document.getElementById(connectFourTable[i + 3][j]);
      if (targetSquare1.className.indexOf("gray") === -1 && targetSquare2.classList[1] === targetSquare1.classList[1] && targetSquare3.classList[1] === targetSquare2.classList[1] && targetSquare4.classList[1] === targetSquare3.classList[1]) {
        verticalChecked = connectFourTable[i][j];
      }
    }
  }
}

function checkHorizontal() {
  for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 3; j++) {
      var targetSquare1 = document.getElementById(connectFourTable[i][j]);
      var targetSquare2 = document.getElementById(connectFourTable[i][j + 1]);
      var targetSquare3 = document.getElementById(connectFourTable[i][j + 2]);
      var targetSquare4 = document.getElementById(connectFourTable[i][j + 3]);
      if (targetSquare1.className.indexOf("gray") === -1 && targetSquare2.classList[1] === targetSquare1.classList[1] && targetSquare3.classList[1] === targetSquare2.classList[1] && targetSquare4.classList[1] === targetSquare3.classList[1]) {
        horizontalChecked = connectFourTable[i][j];
      }
    }
  }
}

function checkDiagDown() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 3; j++) {
      var targetSquare1 = document.getElementById(connectFourTable[i][j]);
      var targetSquare2 = document.getElementById(connectFourTable[i + 1][j + 1]);
      var targetSquare3 = document.getElementById(connectFourTable[i + 2][j + 2]);
      var targetSquare4 = document.getElementById(connectFourTable[i + 3][j + 3]);
      if (targetSquare1.className.indexOf("gray") === -1 && targetSquare2.classList[1] === targetSquare1.classList[1] && targetSquare3.classList[1] === targetSquare2.classList[1] && targetSquare4.classList[1] === targetSquare3.classList[1]) {
        diagDownChecked = connectFourTable[i][j];
      }
    }
  }
}


function checkDiagUp() {
  for (var i = 3; i <= 5; i++) {
    for (var j = 0; j <= 3; j++) {
      var targetSquare1 = document.getElementById(connectFourTable[i][j]);
      var targetSquare2 = document.getElementById(connectFourTable[i - 1][j + 1]);
      var targetSquare3 = document.getElementById(connectFourTable[i - 2][j + 2]);
      var targetSquare4 = document.getElementById(connectFourTable[i - 3][j + 3]);
      if (targetSquare1.className.indexOf("gray") === -1 && targetSquare2.classList[1] === targetSquare1.classList[1] && targetSquare3.classList[1] === targetSquare2.classList[1] && targetSquare4.classList[1] === targetSquare3.classList[1]) {
        diagUpChecked = connectFourTable[i][j];
      }
    }
  }
}


function youWin() {
  if (verticalChecked) {
    updateModalWinner();
    topRow.removeEventListener("click", handleClick);
    setTimeout(function () { modalWindow.classList.remove("hidden"); }, 1500);
  } else if (horizontalChecked) {
    updateModalWinner();
    topRow.removeEventListener("click", handleClick);
    setTimeout(function () { modalWindow.classList.remove("hidden"); }, 1500);
  } else if (diagDownChecked) {
    updateModalWinner();
    topRow.removeEventListener("click", handleClick);
    setTimeout(function () { modalWindow.classList.remove("hidden"); }, 1500);
  } else if (diagUpChecked) {
    updateModalWinner();
    topRow.removeEventListener("click", handleClick);
    setTimeout(function () { modalWindow.classList.remove("hidden"); }, 1500);
  }
}
// Checks current who the current player is
/* If the current player is player1 and wins, the text content on the gamerWinner
object will update to show Player 1 */
/* If the current player is player2 and wins, the text content on the gamerWinner
object will update to show Player 2 */
function updateModalWinner() {
  if (player === 'player1') {
    gameWinner.textContent = 'Player 1';
    player1WinsNumber++;
  } else if (player === 'player2') {
    gameWinner.textContent = 'Player 2';
    player2WinsNumber++;
  }
  updatePlayerWins();
}

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

  var k = columnArray.length - 1;

  if (player === "player1") {
    while (k >= 0) {
      if (columnArray[k].classList.contains("gray")) {
        columnArray[k].classList.remove("gray");
        columnArray[k].classList.add("red");
        switch (k) {
          case 5:
            columnArray[k].classList.add("player-drop6");
            break;
          case 4:
            columnArray[k].classList.add("player-drop5");
            break;
          case 3:
            columnArray[k].classList.add("player-drop4");
            break;
          case 2:
            columnArray[k].classList.add("player-drop3");
            break;
          case 1:
            columnArray[k].classList.add("player-drop2");
            break;
          case 0:
            columnArray[k].classList.add("player-drop1");
            break;
        }
        checkVertical();
        checkHorizontal();
        checkDiagDown();
        checkDiagUp();
        youWin();
        player = "player2";
        playerText.innerText = "Player 2";
        return;
      } else {
        k--;
      }
    }
  }

  if (player === "player2") {
    while (k >= 0) {
      if (columnArray[k].classList.contains("gray")) {
        columnArray[k].classList.remove("gray");
        columnArray[k].classList.add("black");
        switch (k) {
          case 5:
            columnArray[k].classList.add("player-drop6");
            break;
          case 4:
            columnArray[k].classList.add("player-drop5");
            break;
          case 3:
            columnArray[k].classList.add("player-drop4");
            break;
          case 2:
            columnArray[k].classList.add("player-drop3");
            break;
          case 1:
            columnArray[k].classList.add("player-drop2");
            break;
          case 0:
            columnArray[k].classList.add("player-drop1");
            break;
        }
        checkVertical();
        checkHorizontal();
        checkDiagDown();
        checkDiagUp();
        youWin();
        player = "player1"
        playerText.innerText = "Player 1";
        return;
      } else {
        k--;
      }
    }
  }
}
/* end of disc adding function */

/* restart game */

var restartButton = document.querySelector("button#modal-button");
restartButton.addEventListener("click", restartGame);

function restartGame() {
  var redSlots = document.querySelectorAll("div.red");
  for (var i = 0; i < redSlots.length; i++) {
    redSlots[i].className = "col gray"
  }
  var blackSlots = document.querySelectorAll("div.black");
  for (var i = 0; i < blackSlots.length; i++) {
    blackSlots[i].className = "col gray"
  }
  player = null;
  verticalChecked = 0;
  horizontalChecked = 0;
  diagDownChecked = 0;
  diagUpChecked = 0;
  pickPlayer();
  modalWindow.classList.add("hidden");
  topRow.addEventListener("click", handleClick);
}

/* mouseover */

var topRowSlots = document.querySelectorAll("div.listen");
for (var i = 0; i < topRowSlots.length; i++) {
  topRowSlots[i].addEventListener("mouseover", showPiece);
  topRowSlots[i].addEventListener("mouseout", hidePiece);
  topRowSlots[i].addEventListener('click', changePiece); // Top Row while change to player color after every click/turn
}

function showPiece(event) {
  var mouseoverSlot = event.target;
  if (player === "player1") {
    mouseoverSlot.classList.add("red");
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

// Changes color piece of top row for player after every turn
// If player is truly equal to player1
// The targeted element will remove the class of 'red'
// The targeted element will then add a class of 'black'
// Else if player is truly equal to player2
// The targeted element will then add a class of 'black'
// The targeted element will remove the class of 'red'
function changePiece(event) {
  var changeColor = event.target
  if (player === 'player1') {
    changeColor.classList.remove('red');
    changeColor.classList.add('black');
  } else if (player === 'player2') {
    changeColor.classList.remove('black');
    changeColor.classList.add('red');
  }
}


//update win number for each player
function updatePlayerWins() {
  document.querySelector("p.player1-count").textContent = player1WinsNumber;
  document.querySelector("p.player2-count").textContent = player2WinsNumber;
}
