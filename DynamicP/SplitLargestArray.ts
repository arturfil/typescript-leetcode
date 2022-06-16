export class SplitLargestArray {
    splitArray(nums: number[], m:number):number {
        let low = Math.max(...nums);
        let high = 0, ans = 0;
        for(let num of nums) {
            high += num;
        }
        
        while(low <= high) {
            let mid = Math.floor(low + (high - low) / 2); // to prevent overflow
            if(this.isPossible(nums, mid, m)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    };
    
    isPossible(arr:number[], mid:number, noParts:number) {
        let part = 1;
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if(sum > mid) {
                part++;
                sum = arr[i];
            }
        }
        return part <= noParts; 
    }
}