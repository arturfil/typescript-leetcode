import { FruitIntoABasket } from "./Arrays/FruitIntoABasket";
import { TreeNode } from "./BinaryTrees/TreeNode";
import { MostStonesRemoved } from "./Graphs/MostStonesRemoved";
import { AddTwoNumbers } from "./LinkedLists/AddTwoNumbers";
import { CountCompleteTreeNodes } from "./LinkedLists/CountCompleteNodes";
import ListNode from "./LinkedLists/ListNode";


class Main {

    main() {
        
        // create root node
        let root = new TreeNode(1);
        // create left side of tree
        let l_2 = new TreeNode(2);
        let l_4 = new TreeNode(4);
        let l_5 = new TreeNode(5);
        // create rigth side of tree
        let r_3 = new TreeNode(3);
        let r_6 = new TreeNode(6);
        let r_7 = new TreeNode(7);
        // connect left side
        root.left = l_2;
        l_2.left = l_4;
        l_2.right = l_5;
        // connect right side
        root.right = r_3;
        r_3.left = r_6
        r_3.right = r_7;
        
        // root.printTree(root);
        let count = new CountCompleteTreeNodes();
        console.log(count.countNodes(root));
        
    }
}

const mainClass = new Main();
mainClass.main();