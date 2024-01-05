
var height = 6;
var width = 5;

var row = 0;
var col = 0;

var gameOver = false;
var word = "SQUID";


window.onload = function () {
    intialize();
}


function intialize() {

    //Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);


        }
    }


    // Listen for Key Press
    document.addEventListener('keyup', (e) => {
        if (gameOver) return;

        //alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3];
                    col++;
                }
            }
        }
                else if (e.code == "Backspace") {
                    if (0 < col && col <= width) {
                        col--;
                    }
                    let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                    currentTile.Tile.innerText = "";
                }

                else if (e.code == "Enter") {
                    console.log("TEst");
                    update();
                    row += 1;
                    col = 0;
                }
                if (!gameOver && row == height) {
                    gameOver = true;
                    document.getElementById("answer").innerText = word;

                }
    })
}

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c);
        let letter = currentTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currentTile.classList.add("correct");
            correct++;
        }
        else if (word.includes(letter)) {
            currentTile.classList.add("present");
        }
        else {
            currentTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }

    }
}