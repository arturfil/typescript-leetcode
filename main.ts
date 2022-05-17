import { GroupAnagrams } from "./Arrays/GroupAnagrams";
import { NextPermutation } from "./Arrays/NextPermutation";
import { SingleNumber } from "./Arrays/SingleNumber";
import { Search2DMatrix } from "./BinarySearch/Search2DMatrix";
import { SearchInRotatedArray } from "./BinarySearch/SearchInRotatedArray";
import { SearchRange } from "./BinarySearch/SearchRange";
import { BackSpaceStringCompare } from "./Strings/BackSpaceStringCompare";



class Main {

    main() {
        // let next = new NextPermutation();
        // next.nextPermutation([1,2,3]);
        let backComp = new BackSpaceStringCompare();
        console.log(backComp.backspaceCompare("ab##", "c#d#"));
    }
}

const mainClass = new Main();
mainClass.main();