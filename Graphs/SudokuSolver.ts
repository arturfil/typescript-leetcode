export class SudokuSolver {
    options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    solveSudoku(board: string[][]): void {
        const emptyCells: number[][] = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") {
                    emptyCells.push([i, j]);
                }
            }
        }
        this.dfs(board, emptyCells, 0);
    };

    dfs(board: string[][], emptyCells: number[][], cur: number): boolean {
        if (cur >= emptyCells.length) return true;
        const [i, j] = emptyCells[cur];
        for (const option of this.options) {
            if (this.isValid(board, i, j, option)) {
                board[i][j] = option;
                if (this.dfs(board, emptyCells, cur + 1)) return true;
                else board[i][j] = ".";
            }
        }
        return false;
    }

    isValid(board:string[][], row:number, col:number, val:string) {
        const boxRow = Math.floor(row/3) * 3;
        const boxCol = Math.floor(col/3) * 3;
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] === val || board[i][col] === val) return false;
            const curRow = boxRow + Math.floor(i / 3);
            const curCol = boxCol + Math.floor(i % 3);
            if (board[curRow][curCol] === val) return false;
        }
        return true;   
    }
}

/*
    // printBoard(board:string[][]) {
    //     for (let i = 0; i < board.length; i++) {
    //         let row = "["
    //         for (let j = 0; j < board[i].length; j++) {
    //             row += `${board[i][j]} ,`;
    //         }
    //         row += "]"
    //         console.log(row);
    //     }
    // }

    TESTING
    let sudoku = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]

    let solv = new SudokuSolver();
    
    console.log(solv.solveSudoku(sudoku));
*/