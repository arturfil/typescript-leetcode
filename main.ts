import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { ThreeSum } from "./Arrays/Threesum";


class Main {

    main() {
        let test = [-1,0,1,2,-1,-4];
        let three = new ThreeSum();
        three.threeSum(test)  
    }
}

const mainClass = new Main();
mainClass.main();