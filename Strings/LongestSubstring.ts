export class LongestSubstring {
    lengthOfLongestSubstring(s: string): number {
        const map = new Map();
        let start = 0;
        let len = 0;
        for(let end = 0; end < s.length; end++) {
            if (map.has(s[end]) && map.get(s[end]) >= start) {
                start = map.get(s[end]) + 1;
            }
            len = Math.max(len, end - start + 1)
            map.set(s[end], end);
        }
        return len;
    }
} 

/*
    TEST
    const test1 = "abcabcbb"
    const lng = new LongestSubstring();
    console.log(lng.lengthOfLongestSubstring(test1));

    EXPLANATION
    - Here you are trying to see which is the longest substring and 
    return that length
    - For that you need to have a pointer to the first character and 
    a pointer to the characters along the non repeating characters
    - I.E. if you test for racoon. first pointer and end pointer in "r",
    in the for loop you move the end pointer until you find an already seen
    character => "raco", the second "o" is repeated so the first pointer moves to
    the "a" and you restart and check other substrings until you traverse the 
    while string
    - Every time you go through the forloop to check substring you have a current-
    total-length and after the loop you have the maxTotal. every time you find a repeated
    charater you have to compare the current vs the max and upate total with the 
    highest value.
    - Once you are done with the loop, you return the max.
    
    "abcabcbb"

*/