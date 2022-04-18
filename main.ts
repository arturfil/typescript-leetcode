import { CourseSchedule } from "./Graphs/CourseSchedule";
import { NumberOfIslands } from "./Graphs/NumberOfIslands";
import { AddTwoNumbers } from "./LinkedLists/AddTwoNumbers";
import ListNode from "./LinkedLists/ListNode";


class Main {

    main() {
        let l1 = new ListNode(2);
        let l1_2 = new ListNode(4);
        let l1_3 = new ListNode(3);
        l1.next = l1_2;
        l1_2.next = l1_3;

        let l2 = new ListNode(5);
        let l2_2 = new ListNode(6);
        let l2_3 = new ListNode(4);
        l2.next = l2_2;
        l2_2.next = l2_3;

        let twoNums = new AddTwoNumbers();
        console.log(twoNums.addTwoNumbers(l1, l2));
    }
}

const mainClass = new Main();
mainClass.main();