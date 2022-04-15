export class NeedleHaystack {
    strStr(haystack: string, needle: string) {
        if (needle.length === 0) return 0;

        for (let i = 0; i <= haystack.length; i++) {
            if (haystack[i] === needle[0]) {
                if (haystack.substring(i, i + needle.length) === needle) {
                    return i
                }
            }
        }
        return -1;
    }
}

/*
    TEST
    let ndle = new NeedleHaystack();
    console.log(ndle.strStr("Hello", "ll"));

    EXPLANATION
    - You want to check if the first haystack character matches the needle's
    first character, if so, you check if the substring of haystack contains needle
*/