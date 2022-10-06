let currentPlayer = 1;
const board = document.querySelector("#game_board");
const button = document.querySelector("#reset_button");

board.addEventListener("click", turn);
board.addEventListener("touchend", turn);
button.addEventListener("click", reset);

function turn(e) {
    let token = ""

    if (currentPlayer == 1){
        token = "X";
        write();
        game_over();
        currentPlayer = 2;
    }
    else {
        token = "O";
        write();
        game_over();
        currentPlayer = 1;
    };

    function write() {
        if (e.target.textContent == "") {
            e.target.textContent = token;
        }
    }
};

function reset() {
    location.reload();
};

function game_over() {
    let win = false

    const tl = document.querySelector("#top_left");
    const tm = document.querySelector("#top_center");
    const tr = document.querySelector("#top_right");

    const ml = document.querySelector("#middle_left");
    const m = document.querySelector("#middle_center");
    const mr = document.querySelector("#middle_right");

    const bl = document.querySelector("#bottom_left");
    const bm = document.querySelector("#bottom_center");
    const br =  document.querySelector("#bottom_right");
    
    if ( // X wins
        // horizontal
        (tl.textContent == "X" && tm.textContent =="X" && tr.textContent == "X") ||
        (ml.textContent == "X" && m.textContent =="X" && mr.textContent == "X") ||
        (bl.textContent == "X" && bm.textContent =="X" && br.textContent == "X") ||
        // vertical
        (tl.textContent == "X" && ml.textContent =="X" && bl.textContent == "X") ||
        (tm.textContent == "X" && m.textContent =="X" && bm.textContent == "X") ||
        (tr.textContent == "X" && mr.textContent =="X" && br.textContent == "X") ||
        // diagonal
        (tl.textContent == "X" && m.textContent =="X" && br.textContent == "X") ||
        (tr.textContent == "X" && m.textContent =="X" && bl.textContent == "X")
        ) {
            alert("Congratulations! X Wins!")
            win = true
    }
    else if ( // Y wins
        // horizontal
        (tl.textContent == "O" && tm.textContent =="O" && tr.textContent == "O") ||
        (ml.textContent == "O" && m.textContent =="O" && mr.textContent == "O") ||
        (bl.textContent == "O" && bm.textContent =="O" && br.textContent == "O") ||
        // vertical
        (tl.textContent == "O" && ml.textContent =="O" && bl.textContent == "O") ||
        (tm.textContent == "O" && m.textContent =="O" && bm.textContent == "O") ||
        (tr.textContent == "O" && mr.textContent =="O" && br.textContent == "O") ||
        // diagonal
        (tl.textContent == "O" && m.textContent =="O" && br.textContent == "O") ||
        (tr.textContent == "O" && m.textContent =="O" && bl.textContent == "O")
        ) {
            alert("Congratulations! O Wins!")
            win = true
    }
    else if (// Tie
        tl.textContent !== "" && tm.textContent !== "" && tr.textContent !== "" &&
        ml.textContent !== "" && m.textContent !== "" && mr.textContent !== "" &&
        bl.textContent !== "" && bm.textContent !== "" && br.textContent !== "" &&
        win == false
    ) {
        alert("Tie Game!")
    }
}