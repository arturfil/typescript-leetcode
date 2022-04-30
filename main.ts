import { Search2DMatrix } from "./BinarySearch/Search2DMatrix";
import { SearchInRotatedArray } from "./BinarySearch/SearchInRotatedArray";
import { SearchRange } from "./BinarySearch/SearchRange";



class Main {

    main() {
        let s = new Search2DMatrix();
        console.log(s.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));

    }
}

const mainClass = new Main();
mainClass.main();