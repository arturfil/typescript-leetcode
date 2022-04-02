export class ReverseString {
    reverseString(s: string[]) {
        for(let i = 0, j = s.length-1; i < s.length/2; i++, j--) {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
        return s;
    }
}

/*
    TEST
    const rev = new ReverseString();
    console.log(rev.reverseString(['h', 'e', 'l', 'l', 'o']));

    EXPLANATION
    - You want to iterate from both end towards the 
    middle and every time you flip
    each character from each pointer "j" and "i". 
    - once you reach the middle, you are done
*/