class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }

    printList(node: ListNode | null) {
        let list = '';
        while(node !== null) {
            list += `|${node.val}|->`
            node = node.next;
        }
        console.log(list);
    }
}

export default ListNode;