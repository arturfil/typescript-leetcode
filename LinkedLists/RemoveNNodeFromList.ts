import ListNode from "./ListNode";

export class RemoveNNodeFromList {
    removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        const dummy = new ListNode();
        dummy.next = head;
        let p1 = dummy, p2 = dummy;

        for(let i = 0; i < n + 1; i++) {
            p1 = p1.next!;
        }

        while (p1) {
            p1 = p1.next!;
            p2 = p2.next!;
        }

        p2.next = p2.next?.next!;
        return dummy.next;
    }

    
}

/*
    
    TESTING:
    let head = new ListNode(1)
    let n1 = new ListNode(2)
    let n2 = new ListNode(3)
    let n3 = new ListNode(4)
    let n4 = new ListNode(5)

    head.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;

    let nNode = new RemoveNNodeFromList();
    nNode.removeNthFromEnd(head, 2)

    head.printList(head);

*/