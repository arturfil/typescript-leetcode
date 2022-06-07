class ValidParenthesis {
    map:Map<string, string> = new Map([
        ["[", "]"],
        ["{", "}"],
        ["(", ")"]
    ]);
    isValid(s: string): boolean  {
        let stack:string[] = [];
        for (let i = 0; i < s.length; i++) {
            if (this.map.has(s[i]))
                stack.push(this.map.get(s[i])!);
            else if (stack[stack.length-1] === s[i])
                stack.pop();
            else
                return false;
        }
        return stack.length === 0;
    }
}

export default ValidParenthesis;

/*
    TESTING:
    let tests = [
        "()", // true
        "()[]{}", // true
        "(]", // false
        "]", // false
        "{()}[]" // true
    ]
    const par = new ValidParenthesis();
    tests.forEach(test => {
        console.log(par.isValid(test));
    });

    EXPLANATION:
    - You want to check if the key exists, if so, you add
    the value to the stack.
    - If current s[i] equals the last char of the stack and stack is not 0
    you pop the character.
    - if there is a non-valid character or there is no more characters,
    just return false.
*/