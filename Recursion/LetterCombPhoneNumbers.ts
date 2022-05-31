export class LetterCombPhoneNumbers {
    map:Map<number, string> = new Map([
        [2, "abc"],
        [3, "def"],
        [4, "ghi"],
        [5, "jkl"],
        [6, "mno"],
        [7, "pqrs"],
        [8, "tuv"],
        [9, "wxyz"],
    ]);

    letterCombinations(digits: string): string[] {
        if (digits === null || digits.length === 0) return [];
        const combinations:string[] = [];
        this.backtracking(0, '', digits, combinations);
        return combinations;
    }

    backtracking(i:number, s:string, digits: string, combinations: string[]) {
        if (i === digits.length) {
            combinations.push(s);
            return;
        }
        for (const c of this.map.get(Number(digits[i]))!) {
            this.backtracking(i + 1, s + c, digits, combinations);
        }
    };
}

/*
    TESTING
    let comb = new LetterCombPhoneNumbers();
    console.log(comb.letterCombinations("23"));
*/