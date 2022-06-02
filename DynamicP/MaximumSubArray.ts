export class MaximumSubArray {
    maxSubArray(nums: number[]): number {
        let sum = nums[0], current = 0;
        for (let i = 0; i < nums.length; i++) {
            current = Math.max(current + nums[i], nums[i])
            sum = Math.max(current, sum);
        }
        return sum;
    }
}
/*
    TESTING
    const max = new MaximumSubArray();
    const test = [-2,1,-3,4,-1,2,1,-5,4]; // 6
    console.log(max.maxSubArray(test) );
    [5,4,-1,7,8]

    EXPLANATION
*/