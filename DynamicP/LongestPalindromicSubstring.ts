export class LongestPalindromicSubstring {
    longestPalindrome(s: string): string {
        let max = "", current = "";
		for(let i = 0; i < s.length; i++) {
            let even = this.expandOut(i,i,s);
            let odd  = this.expandOut(i,i+1,s);
            current = even.length > odd.length ? even : odd;
            max = max.length > current.length ? max : current;
		}
		return max;
	}

	expandOut(left:number, right:number, str:string):string {
        while(left >= 0 && right <= str.length && str[left] === str[right]) {
            left -= 1;
            right += 1;
        };
        return str.substring(left, right - 1);
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
