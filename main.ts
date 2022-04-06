import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";


class Main {

    main() {
        let con = new ContainerWithMostWater();
        con.maxArea([1,8,6,2,5,4,8,3,7])
        
    }
}

const mainClass = new Main();
mainClass.main();