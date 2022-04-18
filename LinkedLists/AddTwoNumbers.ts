import ListNode from "./ListNode";

export class AddTwoNumbers {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
        let head = new ListNode(null!);
        let carry: number = 0;
        let current: ListNode =  head;
        let currentSum: number = 0;
        while (l1 || l2) {
            currentSum = carry;
            if (l1) {
                currentSum += l1.val;
                l1 = l1.next;
            }
            if (l2) {
                currentSum += l2.val;
                l2 = l2.next;
            }
            carry = currentSum >= 10 ? 1 : 0;
            current.next = new ListNode(currentSum % 10);
            current = current.next;
        }
        if (carry) {
            current.next = new ListNode(carry);
        }
        return head.next;
    }
}

/*
    TESTING
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

    EXPLANATION
    
*/