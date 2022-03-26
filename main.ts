import { MajorityElement } from "./Arrays/MajorityElement";
import { RotateImage } from "./Arrays/RotateImage";
import { TwoSum } from "./Arrays/TwoSum";
import { UniqueEmails } from "./Strings/UniqueEmails";


class Main {

    main() {
        const test = [2,7,11,15];
        const test2 = [3,2,4]
        const target = 9; // i.e. two numbers must add up to 9
        const t = new TwoSum();
        console.log(t.twoSumAlt(test, target));
    }
}

const mainClass = new Main();
mainClass.main();