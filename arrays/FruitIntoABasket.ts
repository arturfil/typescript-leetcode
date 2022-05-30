export class FruitIntoABasket {
    totalFruits(fruits: number[]): number {
        const map = new Map();
        let max = 0;
        
        for (let left = 0, right = 0; right < fruits.length; right++) {
            
            let current = fruits[right];
            let count = map.get(current) ?? 0; // if map.get(current) === null return 0 : map.get(current);
            map.set(current, count+1);
            
            while (map.size > 2) {
                map.set(fruits[left], map.get(fruits[left]) - 1)
                if (map.get(fruits[left]) === 0) {
                    map.delete(fruits[left])
                }
                left++;
            }

            max = Math.max(max, right - left + 1)
        }
        
        return max;
    }
}

/*
    - Understand the problem really well.
    READ EVERYTHING TWICE!
    - Make assumptions
    - Ask interviewer questions with examples to 
    solidify your assumptions
    - build code
    - check for edge cases
    - refactor.

    TESING
    let f = new FruitIntoABasket();
    f.totalFruits([1,2,3,2,2,3,2,0]);
*/
