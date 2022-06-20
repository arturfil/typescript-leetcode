export class LongestSubstringWithAtMostTwo {
    lengthOfLongestSubstring(s: string):number {
        if (s.length < 3) return s.length; // because it could be two or less
        let first = 0, last = 0;
        let maxLen = 2;
        let chars = new Map();
        
        while (last < s.length) {
            chars.set(s[last], last);
            last++;
            if (chars.size === 3) {
                let del = Math.min(...chars.values());
                chars.delete(s[del]);
                first = del + 1;
            }
            maxLen = Math.max(maxLen, last - first);
        }
        return maxLen;
    }
}

/*
    Rules of the game
    - Substring can only can at most two distinct characters
    a.k.a could be aaabbbbaabbb but not aabbbvaa
    - For this I could use a hashSet where I could keep track of only two characters
    when I find a new one, I can delete the last one and move the pointer to the second last one
    - For this I will use a map instead.

    TESTING
    let lng = new LongestSubstringWithAtMostTwo();
    console.log(lng.lengthOfLongestSubstring("eceebbbbbbba"));
*/