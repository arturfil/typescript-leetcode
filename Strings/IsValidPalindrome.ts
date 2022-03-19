export class IsValidPalindrome {
    isPalindrome(s: string):boolean {
        let i = 0;
        let j = s.length-1;
        for(; i < s.length/2 && j >= s.length/2; i++, j--) {
            if (s[i] !== s[j]) return false;
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