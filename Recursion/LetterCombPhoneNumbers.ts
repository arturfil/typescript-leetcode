// export class LetterCombPhoneNumbers {
//     combinations:string[] = [];
//     map:Map<string, string> = new Map([
//         ["2", 'abc'],
//         ["3", 'def'],
//         ["4", 'ghi'],
//         ["5", 'jkl'],
//         ["6", 'mno'],
//         ["7", 'pqrs'],
//         ["8", 'tuv'],
//         ["9", 'wxyz']
//     ]);

//     letterCombinations(digits: string): string[] {
//         if (digits.length == 0) return [];
//         this.backtracking("", 0, digits.length, digits)
//         return this.combinations;
//     }

//     backtracking(prevString: string, index: number, len: number, digits: string) {
//         if (index === len) 
//             return this.combinations.push(prevString);
//         const possibleLetters = this.map.get(digits[index]);
        
//         for (let char of possibleLetters!.split("")) {
//             this.backtracking(prevString + char, index + 1, len, digits);
//         }
//     }
    
// }