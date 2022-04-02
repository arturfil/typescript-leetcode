import { FloodFill } from "./Graphs/FloodFill";
import { ReverseString } from "./Strings/ReverseString";
import { TwoValidPalindrome } from "./Strings/TwoValidPalindrome";
// import { LetterCombPhoneNumbers } from "./Recursion/LetterCombPhoneNumbers";


class Main {

    main() {
        let two = new TwoValidPalindrome();
        console.log(two.validPalindrome("aba"));
        
    }
}

const mainClass = new Main();
mainClass.main();