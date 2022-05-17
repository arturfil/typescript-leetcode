export class ThreeSum {
    threeSum(nums: number[]): number[][] {
        let res = [];
        nums.sort((a,b) => a - b);
        for(let i = 0; i < nums.length-2; i++) {
            if (nums[i] > 0) break; // one of the constraints is that there is negative values
            if (i > 0 && nums[i] === nums[i-1]) continue; // next iteration, avoid duplicates. i.e if i = 3, if you encoutner another 3, skip

            let left = i + 1; // one more than current index
            let right = nums.length - 1; // left most index

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    while (left < right && nums[left] === nums[left-1]) left++; // if the next number is the same add 1 to left
                }
            }
        }
        return [[]];
    }
}

/* 
    EXPLANATION
    - You want to iterate through the array and  
*/