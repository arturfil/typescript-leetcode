export class NextPermutation {

    nextPermutation(nums: number[]): void {
        for(let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                console.log(`${nums[i]}, ${nums[j]}`)
            }
            
        }
    }


}