export class MeetingRoomsII {
    minMeetingRooms(intervals: number[][]): number {
        const compare = (a:number,b:number) => a - b;
        const minHeap = new MinHeap(compare);
        
        intervals.sort((a, b) => a[0] - b[0]);
        let rooms = 1;

        for (let i = 0; i < intervals.length; i++) {
            if (minHeap.size > 0 && minHeap.peek()! <= intervals[i][0]) {
                minHeap.extract();
            }
            minHeap.insert(intervals[i][1]);
            rooms = Math.max(rooms, minHeap.size);
        }
        return rooms;
    }
}

class MinHeap {
    compareFunc: (a: number, b: number) => number;
    heap: number[] = [];

    constructor(compareFunc: (a: number, b: number) => number) {
    this.compareFunc = compareFunc; // 
    this.heap = [];
}

    insert(val: any) {
        this.heap.unshift(val);
        this.heap.sort(this.compareFunc);
    }

    extract() {
        if (this.size === 0) return null;
        return this.heap.shift();
    }

    peek() {
        if (this.size === 0) return null;
        return this.heap[0];
    }

    get size() {
        return this.heap.length;
    }
}

/* 
    TESTING
    let m = new MeetingRoomsII();     
    // console.log(m.minMeetingRooms([[9,10],[4,9],[4,17]]));
    console.log(m.minMeetingRooms([[0,30],[5,10],[15,20]]));
*/