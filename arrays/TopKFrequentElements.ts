export class TopKFrequentElements {
    topKFrequent(nums: number[], k: number) {
        const freq = new Map<number, number|undefined>();
        const buckets = new Array<number[]>(nums.length + 1);

        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }

        for (let num of nums) {
            if (!freq.has(num)) {
               freq.set(num, 1);
            } else {
                freq.set(num, freq.get(num)! + 1);
            }
        }

        for(let [num, count] of freq.entries()) {
            buckets[count!].push(num);
        }

        const flat = buckets.flat();
        return flat.slice(flat.length - k);
    }
}

/*
    TESTING
    let prodcuts = [1,1,1,2,2,3];
    let tk = new TopKFrequentElements();
    tk.topKFrequent(prodcuts, 2);
    
*/