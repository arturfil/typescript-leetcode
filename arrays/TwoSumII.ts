export class TwoSumII {
    twoSum(numbers: number[], target: number) {
        const map:Map<number, number> = new Map();

        for(let i = 0; i < numbers.length; i++) {
            if (!map.has(target - numbers[i]))  {
                map.set(numbers[i], i);
            } else {
                return [map.get(target - numbers[i])! + 1, i + 1]
            }
        }
    }

    twoSum2Pointers(numbers: number[], target: number) {
        numbers.sort((a,b) => a - b); // sort in asc ord. 
        // sorting is n * log(n)
        // hashmap is n
        let left = 0, right = numbers.length - 1;
        while (left < right) {
            if (numbers[left] + numbers[right] < target) {
                left += 1;
            } else if (numbers[left] + numbers[right] > target) {
                right += 1;
            } else {
                return [left, right]; // if they ask you to return index 1 as zero,
                // just add left + 1, right + 1
            }
        }
    }
}

/*
    EXPLANATION
    let two = new TwoSumII();
    console.log(two.twoSum([2,3,4], 6));
*/