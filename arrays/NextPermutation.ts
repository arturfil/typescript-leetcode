export class NextPermutation {
    nextPermutation2(nums: number[]):number[] | void {
        if (nums.length <= 1) return;

        let firstDesc = nums.length - 2;
        while (firstDesc >= 0 && nums[firstDesc] >= nums[firstDesc + 1]) firstDesc--;
        if (firstDesc === -1) return nums.reverse();

        let toSwap = firstDesc + 1;
        while (nums[toSwap + 1] > nums[firstDesc]) toSwap++;

        [nums[firstDesc], nums[toSwap]] = [nums[toSwap],nums[firstDesc]]

        for (let leftIdx = firstDesc + 1, rightIdx = nums.length - 1; leftIdx < rightIdx; leftIdx++, rightIdx--) {
            [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx],nums[leftIdx]]
        }
    }

    nextPermutation(nums: number[]): number[] {
        for (let i = nums.length-2; i >= 0; i--) {
            let j = i+1;

            if (nums[i] < nums[j]) {
                while (nums[j] > nums[i] && j < nums.length-1) j++;
                if (nums[j] <= nums[i]) j--;
                // swap
                [nums[i], nums[j]] = [nums[j], nums[i]];
                
                let stack = [];
                while (i + 1 < nums.length) stack.push(nums.pop()) // reverse numbers at i
                while (stack.length) nums.push(stack.shift()!);
                return nums;
            }
        }
        nums.sort((a, b) => a-b); // if max value, return the smallest value
        return nums;
    }

}

/*
    let n = new NextPermutation();
    console.log(n.nextPermutation([1,2,3]));
*/