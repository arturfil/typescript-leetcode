import { MajorityElement } from "./Arrays/MajorityElement";
import { RotateImage } from "./Arrays/RotateImage";
import { TwoSum } from "./Arrays/TwoSum";
import ListNode from "./LinkedLists/ListNode";
import { ReverseLinkedList } from "./LinkedLists/ReverseLinkedList";
import { LongestSubstring } from "./Strings/LongestSubstring";
import { UniqueEmails } from "./Strings/UniqueEmails";


class Main {

    main() {
        // [1,2,3,4,5]
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
    }
}

const mainClass = new Main();
mainClass.main();