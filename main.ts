import { GroupAnagrams } from "./Arrays/GroupAnagrams";
import { Search2DMatrix } from "./BinarySearch/Search2DMatrix";
import { SearchInRotatedArray } from "./BinarySearch/SearchInRotatedArray";
import { SearchRange } from "./BinarySearch/SearchRange";



class Main {

    main() {
        let test = ["eat","tea","tan","ate","nat","bat"]
        let grp = new GroupAnagrams();
        console.log(grp.groupAnagrams(test));

    }
}

const mainClass = new Main();
mainClass.main();