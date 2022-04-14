import { TreeNode } from "./TreeNode";

export class SearchInBinaryTree {
    searchBST(root: TreeNode | null, val: number): TreeNode | null {
        if (root?.val === val || !root) 
            return root;
        
        return this.searchBST(root.left, val) || this.searchBST(root.right, val);
    }   
}