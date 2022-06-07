export class NextPermutation {
    // [1,2,3] // 
    // [3,2,1]
    // [1,1,5]
    nextPermutation(nums: number[]): number[] {
        
        for (let i = nums.length-2; i >= 0; i--) {
            let j = i+1;

            if (nums[i] < nums[j]) {
                while (nums[j] > nums[i] && j < nums.length-1) j++;
                if (nums[j] <= nums[i]) j--;
                // swap
                [nums[i], nums[j]] = [nums[j], nums[i]];
                
                let stack = [];
                while (i + 1 < nums.length) stack.push(nums.pop()) // reverse numbers at i
                while (stack.length) nums.push(stack.shift()!);
                return nums;
            }
        }
        nums.sort((a, b) => a-b); // if max value, return the smallest value
        return nums;
    }


}