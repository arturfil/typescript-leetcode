export class TwoSum {
    twoSum(nums: number[], target: number ): number[] {
        const hashMap:any = {}
        for(let i = 0; i < nums.length; i++) {
            if (target - nums[i] in hashMap) {
                const other = hashMap[target - nums[i]];
                return [other, i];
            } else {
                hashMap[nums[i]] = i;
            }
        }
        return [-1];
    }

    twoSumAlt(nums: number[], target: number) {
        const map:Map<number, number> = new Map();
        for(let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                return [map.get(target - nums[i]), i];
            }
            map.set(nums[i], i);
        }

    }
}