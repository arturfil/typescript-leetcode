export class MinHeap<T = any> {
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