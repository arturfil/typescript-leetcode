import { MaximumSubArray } from "./Arrays/MaximumSubArray";
import ListNode from "./LinkedLists/ListNode";
import MergeTwoLists from "./LinkedLists/MergeTwoSortedLists";
import { IsValidPalindrome } from "./Strings/IsValidPalindrome";

class Main {

    main() {
        const pal = new IsValidPalindrome();
        console.log(pal.isPalindrome("A man, a plan, a canal: Panama"));
        // console.log(pal.isPalindrome("raaacecar"));
    }
}

const mainClass = new Main();
mainClass.main();