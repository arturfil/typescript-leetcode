export class ValidAnagram {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        let count:any = [];
        for (let c of s) {
            // charcode of each char
            let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[i] = (count[i] || 0) + 1;
        }
        for (let c of t) {
            let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!count[i]) return false;
            count[i]--;
        }
        return true;
    }

    isAnagramAlt(s: string, t: string): boolean {
        let str1 = s.split("").sort().join(""); // n * log(n) > n
        let str2 = t.split("").sort().join("");
        console.log(`s1: ${str1}, s2: ${str2}`);
        
        return str1 === str2;
    }
}

/*
    sort both and if they match ✅ , they are a valid anagram
*/ 