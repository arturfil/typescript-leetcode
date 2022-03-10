class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }

    printList(node: ListNode | null) {
        while(node !== null) {
            console.log(node.val);
            node = node.next;
        }
    }
}

export default ListNode;