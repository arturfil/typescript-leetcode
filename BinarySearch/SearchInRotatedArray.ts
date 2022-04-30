export class SearchInRotatedArray {
    // [4,5,6,7,0,1,2];
    search(nums: number[], target: number): number {
        let low = 0, high = nums.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            const num = (nums[mid] < nums[0]) === (target < nums[0])
                ? nums[mid]
                : target < nums[0] ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
            
            if (num < target) low = mid + 1;
            else if (num > target) high = mid;
            else return mid;
        }

        return -1;
    }
}

/*
    let s = new SearchInRotatedArray();
    s.search([4,5,6,7,0,1,2], 4);

    EXPLANATION
    - You want to compare the nums[mid] if the number is biger than the target,
    you turn them into either +inf or -inf
    - if it's in rage you do an ordinary binary search
*/