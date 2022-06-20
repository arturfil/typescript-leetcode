import { idText } from "typescript";

export class PlusOne {
    plusOne(digits: number[]):number[] {
        let index = digits.length-1;

        while (index >= 0) {
            if (digits[index] === 9) {
                digits[index] = 0;
            } else {
                digits[index] += 1;
                return digits;
            }
            index--;
        }
        digits.unshift(1);
        return digits;
    }
}

/*
    TESTING
    let dig = new PlusOne();
    let tests = [
        [1,2,3],
        [9,9,9],
        [8,9,9,9]
    ]
    tests.forEach(test => console.log(dig.plusOne(test)));
*/