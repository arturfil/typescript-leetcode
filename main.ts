import { NextClosestTime } from "./Arrays/NextClosestTime";
import { SudokuSolver } from "./Graphs/SudokuSolver";
import { ValidSudoku } from "./Graphs/ValidSudoku";

class Main {
    main() {
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
    }
}

const mainClass = new Main();
mainClass.main();