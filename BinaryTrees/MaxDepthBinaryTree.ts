import { TreeNode } from "./TreeNode";

export class MaxDepthBinaryTree {
    maxDepth(root: TreeNode | null):number {
        if (root === null) return 0;
        let left = 1  + this.maxDepth(root.left);
        let right = 1 + this.maxDepth(root.right);
        return left > right ? left : right;
    }
}

/*
    let root = new TreeNode(4);
    let l2 = new TreeNode(2);
    let l3 = new TreeNode(3);
    let l5 = new TreeNode(5);
    let l1 = new TreeNode(1);

    root.left = l2;
    l2.left = l3;
    l3.left = l5;
    l5.left = l1;

  
    let max = new MaxDepthBinaryTree();
    console.log(max.maxDepth(root));
*/