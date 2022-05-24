export class KthLargestElements {
    findKthLargest(nums: number[], k: number): number {
        let minHeap = new MockMinHeap((a, b) => b - a);
        // set all values in map
        for(let i = 0; i < nums.length; i++)
            minHeap.insert(nums[i]);
        
        console.log(minHeap.heap[k-1]);
        
        return minHeap.heap[k-1];
    }
}

class MockMinHeap {
    heap: number[];
    compareFunc: (a:number, b:number) => number;

    constructor(compareFunc: (a:number, b:number) => number) {
        this.compareFunc = compareFunc;
        this.heap = [];
    }

    insert(val: number) {
        this.heap.unshift(val);
        this.heap.sort(this.compareFunc);
    }

    extract() {
        if (this.heap.length === 0) return null;
        this.heap.unshift();
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }
}

/*
    TESGING
    // Kth Largest Element -> min heap
    let k = new KthLargestElements();
    k.findKthLargest([3,2,1,5,6,4], 2);
*/