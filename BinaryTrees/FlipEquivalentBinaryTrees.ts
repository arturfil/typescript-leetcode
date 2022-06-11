import { TreeNode } from "./TreeNode";

export class FlipEquivalentBinaryTrees {
    flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
        if (root1 === null && root2 === null) return true;
        if (root1 === null || root2 === null) return false;
        if (root1.val !== root2.val) return false;
        
        const equal = 
            this.flipEquiv(root1.left, root2.left) && this.flipEquiv(root1.right, root2.right);
        const flipped = 
            this.flipEquiv(root1.left, root2.right) && this.flipEquiv(root1.right, root2.left);

        return equal || flipped;
    }
    
}

/*
    let tests = [
        [1,2,3,4,5,6,null,null,null,7,8],
        [1,3,2,null,6,4,5,null,null,null,null,8,7],
        [],
        [],
        [],
        [1]
    ]

    For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.
    A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.
    Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

    // 
    Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
    Output: true
    Explanation: We flipped at nodes with values 1, 3, and 5.
*/