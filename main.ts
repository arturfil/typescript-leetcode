import ListNode from "./LinkedLists/ListNode";
import MergeTwoLists from "./LinkedLists/MergeTwoSortedLists";

class Main {

    main() {
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
    }
}

const mainClass = new Main();
mainClass.main();