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