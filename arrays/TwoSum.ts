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

/*
    TEST
    const test = [2,7,11,15];
    const test2 = [3,2,4]
    const target = 9; // i.e. two numbers must add up to 9
    const t = new TwoSum();
    console.log(t.twoSumAlt(test, target));

    EXPLANATION
    You want to save the index where you currently found that number in the case
    that you haven't found the other product for the resulting value of the addition "target"
    Hence when you find it, you return the index where you found that number and the current
*/