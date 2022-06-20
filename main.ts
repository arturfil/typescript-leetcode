import { FindMissingRanges } from "./Arrays/FindMissingRanges";
import { PlusOne } from "./Arrays/PlusOne";

class Main {
    main() {
        let find = new FindMissingRanges();
        console.log(find.findMissingRanges([-1], -1, -1));
    }
}

const mainClass = new Main();
mainClass.main();