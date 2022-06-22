export class ValidSudoku {
    isValidSudoku(board: string[][]) {
        for (let i = 0; i < board.length; i++) { // where board.length = 9
            const rowSet = new Set();
            const colSet = new Set();
            const boxSet = new Set();

            for(let j = 0; j < board[i].length; j++) { // where board[i].length = 9
                let currentRow = board[i][j]; // movement along the row
                let currentCol = board[j][i]; // movement along he col
                let currentBox = board[ 3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3)+(j%3)] // move every 3 rows & 3 cols

                if (currentRow !== ".") {
                    if (rowSet.has(currentRow)) return false;
                    rowSet.add(currentRow);
                }

                if (currentCol !== ".") {
                    if (colSet.has(currentCol)) return false;
                    colSet.add(currentCol);
                }

                if (currentBox !== ".") {
                    if (boxSet.has(currentBox)) return false;
                    boxSet.add(currentBox);
                }
            }
        }
        return true;
    }

    printBoard(board:number[][]) {
        for (let i = 0; i < board.length; i++) {
            let row = "["
            for (let j = 0; j < board[i].length; j++) {
                row += `${board[i][j]} ,`;
            }
            row += "]"
            console.log(row);
        }
    }
}

/*
    I'm assuming that I have to do dfs because we are looking for 
    whether one or more solutions exist, we don't care about "a"
    "optimal" solution

    rules of the game:
    - each row should have nums 1-9.
    - each col should have nums. 1-9.
    - each 3x3 box should have 1-9 nums.
    * all these shouldn't have repeated nums,
    though if one of these have repeated nums
    it means one of the other attributes have a missing number

    * for this problem we have to go first by row, check that it's ok
    * then go by the first 3x3 and check that it's okay
    * lastly go by column and check that it's okay.
    
    TESTING
    let val = new ValidSudoku();
    val.isValidSudoku(sudoku);

*/