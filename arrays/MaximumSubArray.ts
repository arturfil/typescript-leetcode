export class MaximumSubArray {
    maxSubArray(nums: number[]): number {
        let max = nums[0];
        let current = nums[0];
        for(let i = 0; i < nums.length; i++) {
            current = Math.max(current + nums[i], nums[i]);
            max = Math.max(max, current);
        }
        
        return max;
    }
}

/*
    TESTING
    const max = new MaximumSubArray();
    const test = [-2,1,-3,4,-1,2,1,-5,4];
    console.log(max.maxSubArray(test) );

    EXPLANATION
*/