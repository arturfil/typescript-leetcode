import { FloodFill } from "./Graphs/FloodFill";
import { LetterCombPhoneNumbers } from "./Recursion/LetterCombPhoneNumbers";


class Main {

    main() {
        const lett = new LetterCombPhoneNumbers();
        console.log(lett.letterCombinations("23"))
        
    }
}

const mainClass = new Main();
mainClass.main();