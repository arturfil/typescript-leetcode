import { TreeNode } from "./TreeNode";

export class ValidateBST {

  isValid(root: TreeNode | null): boolean {
    let prevVal:number|null = -Infinity
    
    function traverse(node: TreeNode | null):boolean {
    
        if (!node) return true;
        if (!traverse(node.left)) return false;
        if (node.val! <= prevVal!) return false;
        prevVal = node.val;
        return traverse(node.right);
    }
    
    return traverse(root)
  }
}

/*
  TESTING
  let val = new ValidateBST();
  let root = new TreeNode();
  let tree = root.arrayToTree([4,1,5,], root, 0)
  tree.printTree(tree);
  console.log(val.isValid(tree));
*/