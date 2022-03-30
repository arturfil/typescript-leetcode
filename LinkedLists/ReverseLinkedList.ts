import ListNode from "./ListNode";

export class ReverseLinkedList {
    reverseList(head: ListNode | null): ListNode | null {
        let previous = null;
        while(head != null) {
            let current = head.next;
            head.next = previous;
            previous = head;
            head = current;
        }
        return head;
    }   
}

/*
    TEST
    const head = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    const rev = new ReverseLinkedList();
    rev.reverseList(head);

    EXPLANATION
    - You essentially want to programatically change the direction of the arrows
    - I.E. if linked list is 1 -> 2 -> 3; you want 1 <- 2 <- 3, where 3 is head now
    - For that you have to do it programatically travelling one node ahead "current.next"
    and pointing current.next to current where you also store the value of the "previous" node
    and initially previous is null
*/