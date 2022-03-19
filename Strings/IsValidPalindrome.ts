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

// racecar
// rr, aa, cc, 