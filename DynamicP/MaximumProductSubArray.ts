export class MaximumProductSubArray {
    
    maxProduct(nums:number[]): number {
        if (nums.length === 0) return 0;
        let max = nums[0], min = nums[0], product = max;

        for (let i = 1; i < nums.length; i++) {
            let current = nums[i];
            let tempMax = Math.max(current, max * current, min * current);
            min = Math.min(current, max * current, min * current);
            max = tempMax;
            product = Math.max(max, product);
        }
        return product;
    }
    
    maxProduct_BruteForce(nums:number[]): number {
        if (nums.length === 0) return 0;

        let product = nums[0];
        let accumulator = 0;

        for (let i = 0; i < nums.length; i++) {
            accumulator = 1;
            for (let j = i; j < nums.length; j++) {
                accumulator *= nums[j];
                product = Math.max(product, accumulator);
            }
        }
        return product;
    }
}

/*
    TESTING
    let max = new MaximumProductSubArray();
    let tests = [
        [2,3,-2,4], // 6
        [-2],       // -2
        [-3,-1,-1]  // 3
    ]
    
    tests.forEach(test => {
        console.log(max.maxProduct(test));
    });
*/