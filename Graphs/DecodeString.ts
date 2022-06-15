export class DecodeString {
    decodeString(s: string):string {
        let stack:(string|number)[] = [];
        let str = "";
        let current = 0;
        for (let i = 0; i < s.length; i++) {
            // starting a recursion
            if (s[i] === "[") {
                stack.push(str);
                stack.push(current);
                str = "";
                current = 0;
            } else if (s[i] === "]") {
                // when you have a closing bracket, you finished a recursion
                let prevNum = stack.pop()!;
                let prevStr = stack.pop();
                str = prevStr + str.repeat(Number(prevNum));
            } else if (s[i] >= '0' && s[i] <= '9') {
                // in the case you find 32[ab]
                current = current * 10 + Number(s[i]);
            } else {
                // here you just keep on adding on the substring that will be
                // pushed onto the stack
                str += s[i]
            }
        }
        return str;
    }

}

/*
    TESTING
    let tests = [
        "3[a]2[bc]",
        "3[a2[c]]",
        "2[abc]3[cd]ef",
    ]
    let dec = new DecodeString();
    tests.forEach(test => console.log(dec.decodeString(test)))

*/