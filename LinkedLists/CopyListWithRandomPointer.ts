class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}
 

export class CopyListWithRandomPointer {
    copyRandomList(head: Node | null): Node | null {
        if (!head) return null;
        const cloned = new Map();
        let current = head;
        // first copy all the nodes
        while (current) {
            let copy = new Node(current.val);
            cloned.set(current, copy);
            current = current.next!;
        }
        // re-assign head and assign the pointers
        current = head;
        while (current) {
            cloned.get(current).next = cloned.get(current.next) || null;
            cloned.get(current).random = cloned.get(current.random) || null;
            current = current.next!;
        }
        return cloned.get(head);
    }
}