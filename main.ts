import { GroupAnagrams } from "./Arrays/GroupAnagrams";
import { NextPermutation } from "./Arrays/NextPermutation";
import { RotateImage } from "./Arrays/RotateImage";
import { SingleNumber } from "./Arrays/SingleNumber";
import { Search2DMatrix } from "./BinarySearch/Search2DMatrix";
import { SearchInRotatedArray } from "./BinarySearch/SearchInRotatedArray";
import { SearchRange } from "./BinarySearch/SearchRange";
import { BackSpaceStringCompare } from "./Strings/BackSpaceStringCompare";



class Main {

    main() {
        // let next = new NextPermutation();
        // next.nextPermutation([1,2,3]);
        let test_matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
        let rot_img = new RotateImage();
        rot_img.rotate(test_matrix)
        
    }
}

const mainClass = new Main();
mainClass.main();