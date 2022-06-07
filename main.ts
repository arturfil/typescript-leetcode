import { NextPermutation } from "./Arrays/NextPermutation";
import { CourseSchedule } from "./Graphs/CourseSchedule";
import { GenerateParentheses } from "./Recursion/GenerateParenthesis";
import ValidParenthesis from "./Stacks/ValidParenthesis";


class Main {
    main() {
        let n = new NextPermutation();
        console.log(n.nextPermutation([1,2,3]));
    }
}

const mainClass = new Main();
mainClass.main();