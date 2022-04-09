import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { Klargest } from "./Design/KLargest";
import { RomanToInteger } from "./Strings/RomanToInteger";


class Main {

    main() {
        let rom = new RomanToInteger();
        console.log(rom.romanToInt("LVIII"));
    }
}

const mainClass = new Main();
mainClass.main();