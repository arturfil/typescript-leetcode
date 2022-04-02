export class TwoValidPalindrome {
    
    validPalindrome(s: string): boolean {
        let i = 0, j = s.length-1;
        while(i < j) {
            if (s[i] !== s[i]) 
                return (this.isPalindrome(s, i + 1, j) || this.isPalindrome(s, i, j-1));
            i++;
            j--;
        }
        return true;
    }

    private isPalindrome(s: string, i: number, j: number): boolean {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}