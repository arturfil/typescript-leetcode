import { NextClosestTime } from "./Arrays/NextClosestTime";
import { SumOfTwoIntegers } from "./Bits/SumOfTwoIntegers";
import { SudokuSolver } from "./Graphs/SudokuSolver";
import { ValidSudoku } from "./Graphs/ValidSudoku";
import { Test } from "./Testin/Test";

class Main {
    main() {
        let s = new SumOfTwoIntegers();
        console.log(s.getSum(3, 2));
        

    }
}

const mainClass = new Main();
mainClass.main();