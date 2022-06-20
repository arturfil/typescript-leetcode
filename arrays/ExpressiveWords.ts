export class ExpressiveWords {
    expressiveWords(s: string, words: string[]):number {
        let num = 0;
        for (let word of words) {
            if (this.isStretchy(s, word)) num++;
        }
        return num;
    }

    isStretchy(s:string, w:string) {
        let j = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === w[j]) j++; 
            else if (s[i] === s[i-1] && s[i-1] === s[i-2]) continue; // if previous are the same
            else if (s[i] === s[i-1] && s[i] === s[i+1]) continue; // after
            else return false;
        }
        return j === w.length;
    }
}

/*
    EXPLANATION
    - You want to check three scenarios.
    you have i-x-x where i is the first occurence. 
    - isStretchy checks for that case in the first if
    - you have have x-x-i where i is the thrid and last repeated character
    - you can have x-i-x where x is in the middle
    - if you see the character for the first time you increase j++,
    if you see it repeated like in scenario 2 or three you don't do anything
    - At the end j and w.lenght should be equal, otherwise the word is not stretchy

    TESTING
    let tests: [string, string[]][] = [
        ["heeellooo",["hello", "hi", "helo"]],
        ["zzzzzyyyyy", ["zzyy","zy","zyy"]]
    ]
    let exp = new ExpressiveWords();
    tests.forEach(test => console.log(exp.expressiveWords(test[0], test[1])));
*/