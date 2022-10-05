const board = document.querySelector(".board");
//const divBoard = document.querySelector(".divBoard");
const resetButton = document.getElementById("reset");
const player1 = "X";
const player2 = "O";
let player = player1;
function addPiece(e) {
  console.log(e.target);
  e.target.innerHTML = player;
  if (player === player1) player = player2;
  else player = player1;
}
// table version
function resetBoard() {
  console.dir(board);
  for (let i = 0; i < board.rows.length; i++) {
    let row = board.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      row.cells[j].innerHTML = "";
    }
  }
}
// div version
// function resetBoardDiv() {
//   const divBoard = document.querySelector(".divBoard");
//   for (let i = 0; i < divBoard.children.length; i++) {
//     divBoard.children[i].innerText = "";
//   }
//   const children = Array.from(divBoard.children);
//   const empty = children.filter(function (child) {
//     return child.innerText == "X" || child.innerText == "O";
//   });
//   console.log(empty);
// }
board.addEventListener("click", addPiece);
//divBoard.addEventListener("click", addPiece);
reset.addEventListener("click", resetBoard);
