import { DiameterOfBinaryTree } from "./BinaryTrees/DiameterOfBinaryTree";
import { TreeNode } from "./BinaryTrees/TreeNode";

class Main {
    main() {
        let root = new TreeNode(4);
        let l2 = new TreeNode(2);
        let l3 = new TreeNode(3);
        let l5 = new TreeNode(5);
        let l1 = new TreeNode(1);

        // let r8 = new TreeNode(8)

        root.left = l2;
        l2.left = l3;
        l3.left = l5;
        l3.right = l1;
        
        // root.right = r8;
        
        let dim = new DiameterOfBinaryTree();
        console.log(dim.diameterOfBinaryTree(root));
        
    }
}

const mainClass = new Main();
mainClass.main();