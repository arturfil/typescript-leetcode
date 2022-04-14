import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { TopKFrequentElements } from "./Arrays/TopKFrequentElements";
import { ValidParenthesis } from "./Strings/ValidParenthesis";
import { Klargest } from "./Design/KLargest";
import { RomanToInteger } from "./Strings/RomanToInteger";
import { SearchInBinaryTree } from "./BinaryTrees/SearchInBinaryTree";
import { TreeNode } from "./BinaryTrees/TreeNode";


class Main {

    main() {
        // Create Tree
        let root = new TreeNode(4);
        let l1 = new TreeNode(2);
        let l1_l = new TreeNode(1);
        let l1_r = new TreeNode(3);
        let r1 = new TreeNode(7);

        root.left = l1;
        root.right = r1;
        l1.left = l1_l;
        l1.right = l1_r;


        let srch = new SearchInBinaryTree();
        console.log(srch.searchBST(root, 7));
    }
}

const mainClass = new Main();
mainClass.main();