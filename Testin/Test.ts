import { TreeNode } from "../BinaryTrees/TreeNode";
import ListNode from "../LinkedLists/ListNode";

class FakeMinHeap {
    vals:any[];
    constructor() {
        this.vals = [];
    }

    peek() {
        if (this.isNull()) return
        return this.vals[0];
    }

    add(val:any) {
        this.vals.push(val);
        this.vals.sort((a,b) => a - b);
    }

    extract() {
        if (this.isNull()) return
        this.vals.shift();
    }

    isNull() {
        return this.vals === null;
    }

    get size() {
        return this.vals.length;
    }
}

export class Test {
    maxProfit(prices: number[]): number {
        // 7,1,5,3,6,4
        // |         |
        let profit = 0, min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[i]) {
                min = prices[i];
            } else if (prices[i] - min > profit) {
                profit = prices[i] - min;
            }
        }
        return profit;
    }

    generateParenthesis(n:number) {
        if (n <= 0) return [""];
        
        const base = this.generateParenthesis(n - 1) // returns an array; if n == 1, then index base[0] == what ever
        const variations:Set<string> = new Set([]);
        
        for(let i = 0; i < base!.length; i++) {
            const currentVariation:any = base![i];
            for (let j = 0; j < currentVariation.length; j++) {
                variations.add(currentVariation.slice(0, j) + "()" + currentVariation.slice(j));
            }
            variations.add(currentVariation + "()");
        }
        return Array.from(variations);
    }

    numberOfIslands(grid:string[][]) {
        let count = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    count += 1;
                    this.dfs(grid, i, j);
                }
            }
        }
        return count;
    }

    dfs(grid:string[][], i:number, j:number) {
        if (grid[i][j] === "0") return;
        grid[i][j] = "0"; // turn to zero to avoid duplicates
        if (i < grid.length-1 ) this.dfs(grid, i+1, j); // down;
        if (j < grid[i].length-1) this.dfs(grid, i,j+1); // right;
        if (i > 0) this.dfs(grid, i-1, j); // upwards
        if (j > 0) this.dfs(grid,i,j-1);  // left
    }

    minMeetingRooms(intervals: number[][]): number {
        intervals.sort((a:number[], b:number[]) => a[0] - b[0]); // sort ascending.
        let minHeap = new FakeMinHeap();
        let rooms = 1;
        for (let i = 0; i < intervals.length; i++) {
            if (minHeap.size > 0 && minHeap.peek() <= intervals[i][0]) {
                minHeap.extract();
            }
            minHeap.add(intervals[i][1]); // finishing
            rooms = Math.max(rooms, minHeap.size);
        }
        return rooms;
    }

    countNodes(root: TreeNode | null): number {
        return this.traverse(root!);
    }

        leftDepth(node: TreeNode): number {
            if (!node) return 0;
            return this.leftDepth(node.left!) + 1;
        }

        rightDepth(node: TreeNode): number {
            if (!node) return 0;
            return this.rightDepth(node.right!) + 1;
        }

        traverse(node: TreeNode): number {
            const leftLen = this.leftDepth(node);
            const rightLen = this.rightDepth(node);

            if (leftLen === rightLen) return Math.pow(2, leftLen) - 1;
            return this.traverse(node.left!) + this.traverse(node.right!) + 1
        }
    //---

    reverseLinkedList(head: ListNode | null): ListNode | null {
        let previous = null;
        // p |<- c |<- n
        while (head !== null) {
            let current = head.next; // previously stored head.next;
            head.next = previous;
            previous = head;
            head = current;
        }
        return previous;
    }

    /*
        we can pick infinite amount of two types of fruits as long as we see
        the fruits that are continously the same.
        If a new fruit appears we have to stop
        I would want to use two pointers for this
        max sub fruit qty.
    */
    totalFruit(fruits: number[]): number {
        const map = new Map();
        let left = 0, max = 0;
        for(let i = 0; i < fruits.length; i++) {
            let current = fruits[i];
            let count = map.get(current) ?? 0; // if map.get(current) === null return 0 else map.get(current);
            map.set(current, count+1); // either seen or set 1

            while (map.size > 2) { // if map gets too big, delete one key
                map.set(fruits[left], map.get(fruits[left] - 1));
                if (map.get(fruits[left]) === 0) {
                    map.delete(fruits[left])
                }
                left++
            }
            max = Math.max(max, i - left + 1);
        }
        return max;
    }

    // [1,2,3,2,2]
    //          |
    // left = 1;
    // count = 2
    // map ("2" => 3, "3" => 1);
    // i = 4
    // max = 4;

    backspaceCompare(s: string, t: string): boolean {
        let sArr = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "#") {
                sArr.pop()
            } else {
                sArr.push(s[i]);
            }
        }
        
        let tArr = []
        for (let i = 0; i < t.length; i++) {
            if (t[i] === "#") {
                tArr.pop();
            } else {
                tArr.push(t[i]);
            }
        }
        let sStr = sArr.join("");
        let tStr = tArr.join("");
        return sStr === tStr;
    }

    longestPalindrome(s: string): string {
        let num = 0;
        let max = ""
        for (let i = 0; i < s.length; i++) {
            let odd = this.expandAround(s, i, i+1);
            let even = this.expandAround(s, i, i);
            let current = odd.length > even.length ? odd : even;
            max = max.length > current.length ? max : current; // can't use Math.max cause not number;
        }
        return max;
    };
    
    expandAround(s: string, l:number, r: number) {
        while (l >= 0 && r <= s.length && s[l] === s[r]) {
            l -= 1;
            r += 1;
        }
        return s.substring(l, r-1)
    }

}

