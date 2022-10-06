//Team 1 Week 04 Exercise
const board = document.querySelector(".board");
const resetButton = document.querySelector("#reset");
const player1 = "X";
const player2 = "O";
let player = player1; //set player to player1
let winner = false;
let tie = false;

//addPiece() gets called when a square is clicked
function addPiece(e) {
  let msg = "";
  console.log(e.target); //shows us which square was clicked
  e.target.innerHTML = player; //writes an X or O to square clicked

  //check to see if there is a winner or tie yet
  checkWinner();

  //reset player if no winner and no tie
  if (winner == false && tie == false) {
    if (player === player1) {
      player = player2;
    } else {
      player = player1;
    }
    msg = `Player ${player} Turn`;
    document.querySelector("#message").innerText = msg;
  }
}

// Check for winner
function checkWinner() {
  const s1 = document.querySelector("#square1").innerHTML;
  const s2 = document.querySelector("#square2").innerHTML;
  const s3 = document.querySelector("#square3").innerHTML;
  const s4 = document.querySelector("#square4").innerHTML;
  const s5 = document.querySelector("#square5").innerHTML;
  const s6 = document.querySelector("#square6").innerHTML;
  const s7 = document.querySelector("#square7").innerHTML;
  const s8 = document.querySelector("#square8").innerHTML;
  const s9 = document.querySelector("#square9").innerHTML;
  //check possible winning solutions
  if (
    (s1 === player && s2 === player && s3 === player) ||
    (s4 === player && s5 === player && s6 === player) ||
    (s7 === player && s8 === player && s9 === player) ||
    (s1 === player && s4 === player && s7 === player) ||
    (s2 === player && s5 === player && s8 === player) ||
    (s3 === player && s6 === player && s9 === player) ||
    (s7 === player && s5 === player && s3 === player) ||
    (s1 === player && s5 === player && s9 === player)
  ) {
    winner = true;
    document.querySelector("#message").innerText = `Player ${player} WON!`;
    board.removeEventListener("click", addPiece);
    board.removeEventListener("touchend", addPiece);
  }
  //check for TIE
  if (
    s1 !== "" &&
    s2 !== "" &&
    s3 !== "" &&
    s4 !== "" &&
    s5 !== "" &&
    s6 !== "" &&
    s7 !== "" &&
    s8 !== "" &&
    s9 !== "" &&
    winner == false
  ) {
    tie = true;
    document.querySelector("#message").innerText = `Game is a TIE!`;
  }
}

// Reset the board - just reload the page
function resetBoard() {
  location.reload();
}

board.addEventListener("click", addPiece);
board.addEventListener("touchend", addPiece);
reset.addEventListener("click", resetBoard);
