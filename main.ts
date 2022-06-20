import { ExpressiveWords } from "./Arrays/ExpressiveWords";

class Main {
    main() {
        let tests: [string, string[]][] = [
            ["heeellooo",["hello", "hi", "helo"]],
            ["zzzzzyyyyy", ["zzyy","zy","zyy"]]
        ]
        let exp = new ExpressiveWords();
        tests.forEach(test => console.log(exp.expressiveWords(test[0], test[1])));
    }
}

const mainClass = new Main();
mainClass.main();