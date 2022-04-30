import { SearchInRotatedArray } from "./BinarySearch/SearchInRotatedArray";
import { SearchRange } from "./BinarySearch/SearchRange";



class Main {

    main() {
        let s = new SearchInRotatedArray();
        s.search([4,5,6,7,0,1,2], 4);

    }
}

const mainClass = new Main();
mainClass.main();