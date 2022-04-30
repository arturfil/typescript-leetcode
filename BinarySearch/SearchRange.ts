export class SearchRange {
    searchRange(nums: number[], target: number):number[] {
        let left = 0, right = nums.length-1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
        
            if (nums[mid] === target) {
                let first = mid-1;
                while (nums[first] === target && first >= 0) 
                    first--;
                
                let last = mid+1;
                while (nums[last] === target && last <= nums.length-1) 
                    last++;

                return [first+1, last-1];
            }

            if (nums[mid] < target) 
                left = mid + 1;
            else
                right = mid - 1;
        }

        return [-1, -1];
    }
}

/*
    let s = new SearchRange();
    console.log(s.searchRange([5,7,7,8,8,10], 8));
 */