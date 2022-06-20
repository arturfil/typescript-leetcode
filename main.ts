import { PlusOne } from "./Arrays/PlusOne";

class Main {
    main() {
        let dig = new PlusOne();
        let tests = [
            [1,2,3],
            [9,9,9],
            [8,9,9,9]
        ]
        tests.forEach(test => console.log(dig.plusOne(test)));
    }
}

const mainClass = new Main();
mainClass.main();