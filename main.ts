import { FindAndReplaceInString } from "./Arrays/FindAndReplaceInString";
import { InsertInterval } from "./Graphs/InsertInterval";


class Main {
    main() {
        let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
        let ins = new InsertInterval();
        console.log(ins.insert(intervals, [4,8])) // [[1,2],[3,10],[12,16]]
    }
}

const mainClass = new Main();
mainClass.main();