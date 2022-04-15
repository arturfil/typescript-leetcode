import { TreeNode } from "./TreeNode";

export class SearchInBinaryTree {
    searchBST(root: TreeNode | null, val: number): TreeNode | null {
        if (root?.val === val || !root) 
            return root;
        
        return this.searchBST(root.left, val) || this.searchBST(root.right, val);
    }   
}

/*
    TESTING
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

    EXPLANATION
*/