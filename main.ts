import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { BackSpaceStringCompare } from "./Strings/BackSpaceStringCompare";
import { MultiplyStrings } from "./Strings/MultiplyStrings";
import { ValidAnagram } from "./Strings/ValidAnagram";

class Main {

    main() {
        let validAng = new ValidAnagram();
        console.log(validAng.isAnagram("test", "sett"));
    }
}

const mainClass = new Main();
mainClass.main();