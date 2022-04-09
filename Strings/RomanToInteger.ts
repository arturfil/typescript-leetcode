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