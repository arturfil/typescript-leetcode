// export function letterCombinations(digits: string): string[] {
//     let map = {
//         2: "abc",
//         3: "def",
//         4: "ghi",
//         5:"jkl",
//         6: "mno",
//         7: "pqrs",
//         8: "tuv",
//         9: "wxyz"
//     }
//     let out:string[] = combinations(map, digits, [], "", digits.length);
//     return out
// }

// export function combinations(map: any, digits: string, outcomes: string[], current: string, len: number) {
//     if (current.length === len)
//         return outcomes.push(current);
    
//     for (let i = 0; i < digits.length; i++) {
//         let char = digits[i];
//         let str = map[char];
//         let newDigits = digits.slice(i+1);
//         for(let j = 0; j<str.length; j++) {
//             combinations(map, newDigits, outcomes, current + str[j], len);
//         }
//     }
//     return outcomes;
// }
