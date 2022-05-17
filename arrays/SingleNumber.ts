export class SingleNumber {
    findSingle(nums: number[]): number {
        let num = 0;
        for (let i = 0; i < nums.length; i++) {
            num ^= nums[i];
        }
        return num;
    }
}

/*
    TESTING
    const sngNum = new SingleNumber()
    console.log(sngNum.findSingle([2,3,1,2,3,4,4])); 

    EXPLANATION
    - You want to use bit manipulation where XOR returns one or the other TRUE
    but when both are true it returns false .i.e. OR but both exclusive
    - Therefore if all numbers have a pair, because XOR returns 0 when both are the same
    you will end up with the number that has no pair as a result
*/