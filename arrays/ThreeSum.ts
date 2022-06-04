export class ThreeSum {
    threeSum(nums: number[]): number[][] {
        const answers:number[][] = [];
        nums.sort((a,b) => a - b); // asc ord

        for (let i = 0; i < nums.length-2; i++) {
            let left = i + 1, right = nums.length-1;
            if (i > 0 && nums[i] == nums[i - 1]) continue; // to next number;
            
            while (left < right) {
                if (nums[i] + nums[left] + nums[right] < 0) {
                    left++;
                } else if (nums[i] + nums[left] + nums[right] > 0){
                    right--;
                } else {
                    answers.push([nums[i], nums[left], nums[right]])
                    left++;
                    while (nums[left] === nums[left - 1] && left < right) left++ // if left === left - 1, go to next left
                }
            }
        }
        return answers;
    }
}


/* 
    EXPLANATION
    - The technique you want to use is the three pointers technique.
    you have nums[i] then left = i + 1, right = nums.length - 1;
    - For this you have to sort the nums array asc order.
    - you check that nums[i] + nums[left] + nums[right] === 0;
    - is sum too little left += 1;
    - if sum too big, rigth -= 1;
    - if sum === 0, answers.push(nums[i], nums[left], nums[right]);

    TESTING
    let three = new ThreeSum();        
    console.log(three.threeSum([-1,0,1,2,-1,-4]));
*/