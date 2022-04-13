export class ValidParenthesis {
    parenthesis:Map<string, string> = new Map([
        ["[", "]"],
        ["(", ")"],
        ["{", "}"]
    ]);
    stack:string[] = [];

    isValid(str: string): boolean {
        for(let i = 0; i < str.length; i++) {
            if (this.parenthesis.has(str[i])) {
                this.stack.push(this.parenthesis.get(str[i])!);
            } else {
                this.stack.pop();
            }
        }
        
        return this.stack.length === 0;
    }
}