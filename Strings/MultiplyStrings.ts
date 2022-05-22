export class MultiplyStrings {
    multiply(num1: string, num2: string): string {
        if (num1 === "0" || num2 === "0") 
            return "0";
        let len1 = num1.length, len2 = num2.length;
        // declare and initialize array with zeros
        const res = new Array(len1 + len2).fill(0); 

        for (let i = len1-1; i >= 0; i--) {
            for (let j = len2-1; j >= 0; j--) {
                const prd1 = i + j, prd2 = i + j + 1;
                let sum = res[prd2] + Number(num1[i]) * Number(num2[j])
                res[prd2] = sum % 10;
                res[prd1] += Math.floor(sum/10);
            }
        }
        // get rid of all 0's in the beginning
        if (res[0] === 0) res.shift(); 
        return res.join("");
    }
}
