export class FindMissingRanges{
    findMissingRanges(nums: number[], lower: number, upper: number): string[] {
        let res:string[] = [];

        nums = [lower-1, ...nums, upper+1];
        //[0,1,3,50,75]
        for (let i = 1; i < nums.length; i++) {
            let gap = nums[i] - nums[i -1];
            if (gap === 2) { // if there is exactly two in between 1, gap, 3
                res.push(`${nums[i - 1] + 1}`)
            } else if (gap > 2){
                res.push(`${nums[i-1]+1}->${nums[i] - 1}`) // i.e. |1, (...2,3,4) 5|
            }
        }
        return res;
    }
}

/*
    TESTING
    let find = new FindMissingRanges();
    console.log(find.findMissingRanges([-1], -1, -1));
*/