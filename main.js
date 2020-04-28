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

var topRow = document.querySelector("div.row-0");
topRow.addEventListener("click", handleClick);
function handleClick(event) {
  var topRowSpace = event.target;
  console.log(topRowSpace.id.charAt(8));
  var topRowSpaceColumn = topRowSpace.id.charAt(8);


  var column = document.querySelectorAll("div.gray");

  var columnArray = [];
  for (var i = 0; i < column.length; i++) {
    if (column[i].id.charAt(8) === topRowSpaceColumn) {
      console.log(column[i]);
      columnArray.push(column[i]);
    }
  }
  console.log(columnArray);

  var j = columnArray.length-1;

  if (player === "player1") {
    while (j >=0)  {
      if (columnArray[j].classList.contains("gray")) {
        columnArray[j].classList.remove("gray");
        columnArray[j].classList.add("red");
        player = "player2"
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
        return;
      } else {
        j--;
      }
    }
  }
}
