export class LongestPalindromicSubstring {
    longestPalindrome(s: string): string {
        let currentStr = "", maxStr = "";

        for(let i = 0; i < s.length; i++) {
            let oddString = this.expand(s, i, i); // pointint at one index as the center
            let evenString = this.expand(s, i, i+1); // ponting at two indexes as the center
            currentStr = oddString.length > evenString.length ? oddString : evenString;    
            maxStr = maxStr.length > currentStr.length ? maxStr : currentStr;
        }
        return maxStr;
    }

    expand(s: string, left:number, right: number): string  {
        while(left >= 0 && right <= s.length && s[left] === s[right]) {
            left  -= 1; // make left go outwards;
            right += 1; // make right go outwards;
        }
        return s.substring(left + 1, right); // same principal as including right, but using the left pointer
    }

}

/*
    TESTING
    let lngSubPalindrome = new LongestPalindromicSubstring();
    console.log(lngSubPalindrome.longestPalindrome("dadar"));

    EXPLANATION
    - You want to traverse through each string's index and expand outwards from there.
    if it's a palindrome, assign to max str. do that for everystring account for an even string
    palindrome a.k.a "bb" and an odd one "xbx" (where "x" aren't tested yet);
    - If the new substrings are larger than maxStr, reassign maxStr to newly calculated one.
*/