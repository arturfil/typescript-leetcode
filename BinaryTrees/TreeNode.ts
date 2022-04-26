export class TreeNode {
    val: number | null;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?:number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    arrayToTree(arr: any[], root: TreeNode, i: number) {
        // [5, 1, 4, null, null, 3, 6]
        if (i < arr.length) {
            let temp = new TreeNode(arr[i]);
            root = temp;
            root.left = this.arrayToTree(arr, root.left!, 2 * i + 1)
            root.right = this.arrayToTree(arr, root.right!, 2 * i + 2)
            
        }
        return root;
    }

    printTree(root:TreeNode) {
        if (root == null) return;
        console.log(root.val);
        this.printTree(root.left!)
        this.printTree(root.right!);
    }
}