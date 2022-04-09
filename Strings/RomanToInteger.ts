export class RomanToInteger {
    nums:any = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000  
    }
    // MCMXCIV
    // VIX
    romanToInt(s: string): number {
        let tot = 0;
        for(let i = 0; i < s.length; i++)
            tot += this.nums[s[i]] < this.nums[s[i+1]] ? 
                - this.nums[s[i]] : 
                + this.nums[s[i]];
        return tot;
    }   
}

/*
    TESTING
    let rom = new RomanToInteger();
    console.log(rom.romanToInt("LVIII"));

    EXPLANATION
    - You want to check the values for each key in the "nums"
    dictionary.
    - Because roman numbers usually go from big to small, i.e. 19 => XIX
    that woul be case that the next number is bigger and hence that current 
    number should be substacted rather than added. =>  +10, -1, +10
*/