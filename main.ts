import LongestCommonPrefix from "./SlidingWindow/LongestCommonPrefix";
import ValidParenthesis from "./Stacks/ValidParenthesis";

class Main {

    main() {
        let test = "()";
        let test2 = "{()}[]";
        const par = new ValidParenthesis();
        console.log(par.isValid("[)"));
    }
}

const mainClass = new Main();
mainClass.main();