import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { TopKFrequentElements } from "./Arrays/TopKFrequentElements";
import { ValidParenthesis } from "./Strings/ValidParenthesis";
import { Klargest } from "./Design/KLargest";
import { RomanToInteger } from "./Strings/RomanToInteger";
import { SearchInBinaryTree } from "./BinaryTrees/SearchInBinaryTree";
import { TreeNode } from "./BinaryTrees/TreeNode";
import { NeedleHaystack } from "./Arrays/NeedleHaystack";


class Main {

    main() {
        let ndle = new NeedleHaystack();
        console.log(ndle.strStr("Hello", "ll"));
    }
}

const mainClass = new Main();
mainClass.main();