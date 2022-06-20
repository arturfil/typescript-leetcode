import { TreeNode } from "./TreeNode";

export class DiameterOfBinaryTree {
    diameterOfBinaryTree(root: TreeNode | null):number {
        if (root === null) return 0;
        let current = this.depth(root.left) + this.depth(root.right);
        let left = this.diameterOfBinaryTree(root?.left);
        let right = this.diameterOfBinaryTree(root?.right);
        
        return Math.max(current, Math.max(left, right));
    }

    depth(root: TreeNode | null): number {
        if (root === null) return 0;
        let left  = this.depth(root.left);
        let right = this.depth(root.right);
        
        return 1 + Math.max(left, right);
    }
}

/*
    FIRST TREE
    let root = new TreeNode(1);
    let l2 = new TreeNode(2);
    let l4 = new TreeNode(4);
    let l5 = new TreeNode(5);

    let r3 = new TreeNode(3);

    root.left = l2;
    root.right = r3;
    l2.left = l4;
    l2.right = l5;

    SECOND TREE
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
*/