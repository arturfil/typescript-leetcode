export class MajorityElement {
    majorityElement(nums: number[]): number {
        let hashMap:any = {};
        nums.forEach(num => {
            if (hashMap[num]) {
                hashMap[num] += 1
            } else {
                hashMap[num] = 1;
            }
        });
        const values:number[] = Object.values(hashMap);
        const max = Math.max(...values);
        let res:string = '';
        Object.keys(hashMap).forEach(key => {
            if (hashMap[key] == max) {
                res = key;
            }
        })
        return parseInt(res);
    }
}