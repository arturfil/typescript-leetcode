export class ValidParenthesis {
    parenthesis:Map<string, string> = new Map([
        ["[", "]"],
        ["(", ")"],
        ["{", "}"]
    ]);
    stack:string[] = [];

    isValid(str: string): boolean {
        for(let i = 0; i < str.length; i++) {
            if (this.parenthesis.has(str[i])) 
                this.stack.push(this.parenthesis.get(str[i])!);
            else if (str[i] === this.stack[this.stack.length-1] && this.stack)
                this.stack.pop();
            else 
                return false;
        }
        
        return this.stack.length === 0;
    }
}

/*
    TESTING
    const par = new ValidParenthesis();
    console.log(par.isValid("[()]")); // should give true;

    EXPLANATION
    - You want to push the opposite of the parenthesis that you encounter
    that way when you see the reciprocal parenthesis you pop it out of the 
    stack. i.e. 
        .1) "(" -> push ")" ;
        .2) ")" -> pop parenthesis;
*/