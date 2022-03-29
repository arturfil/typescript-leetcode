import { MajorityElement } from "./Arrays/MajorityElement";
import { RotateImage } from "./Arrays/RotateImage";
import { TwoSum } from "./Arrays/TwoSum";
import { LongestSubstring } from "./Strings/LongestSubstring";
import { UniqueEmails } from "./Strings/UniqueEmails";


class Main {

    main() {
        const test1 = "abcabcbb"
        const lng = new LongestSubstring();
        console.log(lng.lengthOfLongestSubstring(test1));
    }
}

const mainClass = new Main();
mainClass.main();