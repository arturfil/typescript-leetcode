export class GenerateParentheses {
    generateParentheses(n: number): string[] {
        const res:string[] = []
        this.create(n,n,"", res);
        return res;
    }

    create(left: number, right: number, s: string, res: string[]) {
        if (left > right) return; // should always have less "(" than ")";

        if (left === 0 && right === 0) {
            res.push(s);
            return
        }

        if (left > 0) this.create(left-1, right, s + "(", res)
        if (right > 0) this.create(left, right-1, s + ")", res);
    }

    dpGenerateParenthesis(n: number) {
        if (n <= 0) return [""];

        const base = this.dpGenerateParenthesis(n - 1);
        const variations:Set<string> = new Set();

        for (let i = 0; i < base!.length; i++) {
            const currentVariation:any = base![i];
            for (let j = 0; j < currentVariation.length; j++) {
                variations.add(currentVariation.slice(0, j) + "()" + currentVariation.slice(j));
            }
            variations.add(currentVariation + "()");
        }
        return Array.from(variations); // converts set to an array;
    }
}

/*
    TESTING
    let gen = new GenerateParentheses();
    console.log(gen.generateParentheses(3));
*/