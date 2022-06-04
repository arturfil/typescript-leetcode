import { MergeIntervals } from "./Arrays/Intervals";
import { ThreeSum } from "./Arrays/ThreeSum";
import { TwoSumII } from "./Arrays/TwoSumII";


class Main {
    main() {
        let tests = [
            [[1,3],[2,6],[8,10],[15,18]],
            [[1,4],[2,3]],
            [[1,4],[0,0]],
            [[1,4],[0,2],[3,5]],
            [[1,4],[4,5]]
        ]
        let inter = new MergeIntervals();
        tests.forEach(test => inter.merge(test));
        
    }
}

const mainClass = new Main();
mainClass.main();