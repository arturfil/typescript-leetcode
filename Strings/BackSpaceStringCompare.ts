export class BackSpaceStringCompare {
    backspaceCompare(s: string, t: string): boolean {
        let ptr_s = s.length-1;
        let ptr_t = t.length-1;

        while(ptr_s >= 0 || ptr_t >= 0) {
            if (s[ptr_s] === "#") {
                let spaces = 1;
                while(spaces >= 0) {
                    ptr_s -= 1;
                    if (s[ptr_s] === "#")
                        spaces += 1;
                    else 
                        spaces -= 1;
                }
                    
            }

            if (t[ptr_t] === "#") {
                let spaces = 1;
                while (spaces >= 0) {
                    ptr_t -= 1;
                    if (t[ptr_t] === "#")
                        spaces += 1;
                    else
                        spaces -= 1;
                }
            }

            if (t[ptr_t] !== s[ptr_s]) return false;
            ptr_s-- ,ptr_t--;
        }

        return true;
    }
}

/* 
    TESTING
    let backComp = new BackSpaceStringCompare();
    console.log(backComp.backspaceCompare("ab##", "c#d#"));
    
*/