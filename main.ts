import { MostStonesRemoved } from "./Graphs/MostStonesRemoved";
import { AddTwoNumbers } from "./LinkedLists/AddTwoNumbers";
import ListNode from "./LinkedLists/ListNode";


class Main {

    main() {
        // Evaluate Division
        // Letter Combinations of a phonenumber
        // Most stones removed
        // let test = [[0,0], [0,1], [1,0], [1,2], [2,1], [2,2]];
        // let st = new MostStonesRemoved();
        // console.log(st.removeStones(test));

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

        let addT = new AddTwoNumbers();
        addT.addTwoNumbers(l1, l2);
    }
}

const mainClass = new Main();
mainClass.main();