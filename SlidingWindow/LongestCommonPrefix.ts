export class LongestCommonPrefix {
    
    longestPrefix(strs: string[]): string {
        let prefix = strs[0];
        for(let i = 1; i<strs.length; i++) {
            for(let j = 0; j < prefix.length; j++) {
                if (strs[i][j] !== prefix[j]) {
                    prefix = prefix.slice(0,j);
                }
            }       
        }
        return prefix;
    }
}


/*
    TETSING:
    let test = ["flowers", "florida", "flight"];
    const lng = new LongestCommonPrefix();
    console.log(lng.longestPrefix(test));

    EXPLANATION:
    - Every time you check each word, either it matches
    the prefix or it has a shorter matching thus, the new
    prefix will be assign to where the new word matches the
    previous prefix
*/