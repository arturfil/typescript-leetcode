export class ThreeSum {
    threeSum(nums: number[]): number[][] {
        let res = [];
        nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length-2; i++) {
            if (nums[i] > 0) break; // there has to be negative values other wise, no solution

            if (i > 0 && nums[i] === nums[i - 1]) continue; // next iteration, avoid duplicates

            let l = i + 1; // one more than i
            let r = nums.length - 1; // left most index

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    // if nums[l] === nums[l+1] skip current, go to next
                    while (l < r && nums[l] === nums[l-1]) l++; 
                }
            }
        }
        return res;
    }
}

/**
 * You want to first map all possible numbers as keys
 * Have three pointers? Possibly 2^n ?
 * 
 */