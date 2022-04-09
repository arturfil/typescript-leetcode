import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { TopKFrequentElements } from "./Arrays/TopKFrequentElements";
import { Klargest } from "./Design/KLargest";
import { RomanToInteger } from "./Strings/RomanToInteger";


class Main {

    main() {
        let prodcuts = [1,1,1,2,2,3];
        let tk = new TopKFrequentElements();
        tk.topKFrequent(prodcuts, 2);
    }
}

const mainClass = new Main();
mainClass.main();