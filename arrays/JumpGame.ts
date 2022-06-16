export class JumpGame {
    canJump(nums:number[]): boolean {
        let last = nums.length - 1;
        for (let i = nums.length-2; i >= 0; i--) {
            if (i + nums[i] >= last) {
                last = i;
            }
        }
        return last === 0;
    }
}

/*
    I will create a start pointer and a jump pointer
    If there is a number where jump is at that equals 0,
    then start++; to see if there is way to avoid it
    if start == jump and didn't reach the end, return false.
    else true
*/