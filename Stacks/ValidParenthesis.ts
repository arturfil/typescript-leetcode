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