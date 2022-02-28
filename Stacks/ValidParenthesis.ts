class ValidParenthesis {

    parenthesis:any = {'(': ')', '{':'}', '[':']'};
    
    isValid(s: string): boolean {
        let stack:string[] = [];
        for(let i = 0; i < s.length; i++) {
            if (s[i] in this.parenthesis) 
                stack.push(this.parenthesis[s[i]]);
            else if (s[i] === stack[stack.length-1] && stack) 
                stack.pop();
            else return false;
        }
        return stack.length === 0;
    }
}

export default ValidParenthesis;

/*
    TESTING:
    let test = "()";
    let test2 = "{()}[]";
    const par = new ValidParenthesis();
    console.log(par.isValid("[)

    EXPLANATION:
    - You want to check if the key exists, if so, you add
    the value to the stack.
    - If current s[i] equals the last char of the stack and stack is not 0
    you pop the character.
    - if there is a non-valid character or there is no more characters,
    just return false.
*/