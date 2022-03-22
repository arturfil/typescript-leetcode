import { ExitStatus } from "typescript";
import { MajorityElement } from "./Arrays/MajorityElement";


class Main {

    main() {
        const maj = new MajorityElement();
        console.log(maj.majorityElement([2,2,1,1,1,2,2]));
        process.exit(0);

    }
}

const mainClass = new Main();
mainClass.main();