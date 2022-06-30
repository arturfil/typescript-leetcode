export class BackSpaceStringCompare {
    backspaceCompare(s: string, t: string): boolean {
        let sArr = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "#") {
                sArr.pop()
            } else {
                sArr.push(s[i]);
            }
        }
        
        let tArr = []
        for (let i = 0; i < t.length; i++) {
            if (t[i] === "#") {
                tArr.pop();
            } else {
                tArr.push(t[i]);
            }
        }
        let sStr = sArr.join("");
        let tStr = tArr.join("");
        return sStr === tStr;
    }
}

/* 
    TESTING
    let backComp = new BackSpaceStringCompare();
    console.log(backComp.backspaceCompare("ab##", "c#d#"));
    
*/