import { MaximumSubArray } from "./Arrays/MaximumSubArray";
import ListNode from "./LinkedLists/ListNode";
import MergeTwoLists from "./LinkedLists/MergeTwoSortedLists";

class Main {

    main() {
        const max = new MaximumSubArray();
        const test = [-2,1,-3,4,-1,2,1,-5,4];
        console.log(max.maxSubArray(test) );
    }
}

const mainClass = new Main();
mainClass.main();