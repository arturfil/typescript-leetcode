export class TreeNode {
    val: number | null;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?:number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    // arrayToTree(arr: any[], root: TreeNode, i: number) {
    //     // [5, 1, 4, null, null, 3, 6]
    //     if (i < arr.length) {
    //         let temp = new TreeNode(arr[i]);
    //         root = temp;
    //         root.left = this.arrayToTree(arr, root.left!, 2 * i + 1)
    //         root.right = this.arrayToTree(arr, root.right!, 2 * i + 2)
            
    //     }
    //     return root;
    // }

    arrayToTree(arr: any[],  i: number) {
        // [5, 1, 4, null, null, 3, 6]
        let temp:TreeNode;
        if (i < arr.length) {
            let temp = new TreeNode(arr[i]);
            temp.left = this.arrayToTree(arr, 2 * i + 1)
            temp.right = this.arrayToTree(arr, 2 * i + 2)
            return temp;
            
        }
        return null;
    }

    // TODO
    printTree(root:TreeNode, level: number) {
        let len = this.maxDepth(root);
        if (root == null) return;
        console.log(
            ("\t").repeat(level) + root.val
        );
        this.printTree(root.left!, level + 1)
        this.printTree(root.right!, level + 1);
    }

    maxDepth(root: TreeNode):number {
        if (root === null || root === undefined) return 0;
        let left = 1 + this.maxDepth(root.left!)
        let right = 1 + this.maxDepth(root.right!)
        return left > right ? left : right; 
        // Math.max doesn't work because we are returning a recurion, not a number
    } 

}

/*
    1 
    |_2
        |_3

*/