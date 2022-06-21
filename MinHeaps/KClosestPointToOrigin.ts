import { MinHeap } from "../Heaps/MinHeap";

export class KClosestPointToOrigin {
    // euclidean distance = sqrt(x1 - x2)^2 + (y1 + y2)^2);
    kClosest(points: number[][], k: number): number[][] {
        let minHeap = new MinHeap<number[]>();
        let res = [];
        for(let point of points) {
            let distance = Math.sqrt(
                Math.pow(point[0] - 0, 2) + Math.pow(point[1] - 0, 2)
            )
            minHeap.insert(distance, point);
        }
        while (k > 0) {
            res.push(minHeap.pop().data);
            k -= 1;
        }
        return res;
    }
}

class _MinHeap<T = any> {
    private readonly heap:(HeapElement<T>|null)[] = [null];
    private count:number = 0;

    insert(value:number, data:T):void {
        this.count++;

        this.heap[this.count] = new HeapElement(value, data);

        let index = this.count;
        let parent = Math.floor(index / 2);

        while (this.heap[index]?.value! < this.heap[parent]?.value! && index > 1) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[parent];
            this.heap[parent] = temp;
            index = parent;
            parent = Math.floor(index / 2);
        }
    }

    pop():HeapElement<T> {
        if (this.count < 1) {
            throw 'No elements';
        }

        const removed = this.heap[1];

        this.heap[1] = this.heap[this.count];
        this.count--;

        let index = 1;

        while (index <= this.count / 2) {
            const left = index * 2;
            const right = (index * 2) + 1;

            if (this.heap[index]?.value! > this.heap[left]?.value! || this.heap[index]?.value! > this.heap[right]?.value!) {
                if (this.heap[left]?.value! < this.heap[right]?.value!) {
                    const temp = this.heap[left];
                    this.heap[left] = this.heap[index];
                    this.heap[index] = temp;
                    index = left;
                } else {
                    const temp = this.heap[right];
                    this.heap[right] = this.heap[index];
                    this.heap[index] = temp;
                    index = right;
                }
            } else {
                break;
            }
        }
    
        return removed!;
    }
}

class HeapElement<T> {
    constructor(
        readonly value:number,
        readonly data:T,
    ) {}
}

/*
let tests:[number[][], number][] = [
    [[[-2,2],[1,3],], 1],
    [[[3,3],[5,-1],[-2,4]], 2],
    [[[0,1],[1,0]], 2],
    [[[1,3],[-2,2],[2,-2]], 2]
]
let k = new KClosestPointToOrigin();
console.log(k.kClosest(tests[3][0], tests[3][1]));
*/