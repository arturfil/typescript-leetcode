export class IsValidPalindrome {
    isPalindrome(s: string):boolean {
        let c_str = s.replace(/[^0-9A-Z]+/gi, '').toLowerCase();
        console.log(c_str);
        let i = 0;
        let j = c_str.length-1
        while(i < j) {
            if (c_str[i++] !== c_str[j--]) return false;
        }
        return true;
    }
}

/*
    TEST
    const pal = new IsValidPalindrome();
    console.log(pal.isPalindrome("racecar"));

    EXPLANATION
    - You want to iterate (outwards) towards the middle OR
    indwards, starting in the middle towards the edges
    - Every iteration you check whether the characters match.
    - If all characters match till the middle, the word is a
    valid palindrome
*/