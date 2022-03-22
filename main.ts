import { MaximumSubArray } from "./Arrays/MaximumSubArray";
import { SingleNumber } from "./Arrays/SingleNumber";
import ListNode from "./LinkedLists/ListNode";
import MergeTwoLists from "./LinkedLists/MergeTwoSortedLists";
import { IsValidPalindrome } from "./Strings/IsValidPalindrome";

class Main {

    main() {
        const sngNum = new SingleNumber()
        console.log(sngNum.findSingle([2,3,1,2,3,4,4])); 
        
    }
}

const mainClass = new Main();
mainClass.main();