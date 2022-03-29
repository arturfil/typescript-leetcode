import ListNode from "./ListNode";

class MergeTwoLists {
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        if (list1.val < list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2
        }
    }
}

export default MergeTwoLists

/*
    TESTING
    // create node and link them 
    // to create a linked list
    const headA = new ListNode(1);
    const node1_A = new ListNode(2);
    const node2_A = new ListNode(4);

    const headB = new ListNode(1);
    const node1_B = new ListNode(3);
    const node2_B = new ListNode(4);

    headA.next = node1_A;
    node1_A.next = node2_A;
    
    headB.next = node1_B;
    node1_B.next = node2_B;

    const m = new MergeTwoLists();
    m.mergeTwoLists(headA, headB);
    headA.printList(headA);

    EXPLANATION
    - You want to make sure evertime you go through 
    each list's node you put the one with lower val
    first
    - You compare both and then you assign the .next
    to the function which will later, compare which 
    has a lower value.
    - This will happend recursively and so get a single
    sorted list
*/