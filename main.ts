import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { TopKFrequentElements } from "./Arrays/TopKFrequentElements";
import { ValidParenthesis } from "./Arrays/ValidParenthesis";
import { Klargest } from "./Design/KLargest";
import { RomanToInteger } from "./Strings/RomanToInteger";


class Main {

    main() {
        const par = new ValidParenthesis();
        console.log(par.isValid("[()]")); // should give true;
    }
}

const mainClass = new Main();
mainClass.main();