import { FindAndReplaceInString } from "./Arrays/FindAndReplaceInString";


class Main {
    main() {
        let fnR = new FindAndReplaceInString();
        console.log(fnR.findReplaceString("abcd", [0,2], ["a", "cd"], ["eee", "ffff"]));
    }
}

const mainClass = new Main();
mainClass.main();