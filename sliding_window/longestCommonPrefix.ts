export default function longestCommonPrefix(strs:string[]) {
    let prefix = strs[0];
    for(let i = 1; i<strs.length; i++) {
        for(let j = 0; j < prefix.length; j++) {
            if (strs[i][j] !== prefix[j]) 
                prefix = prefix.slice(0,j);
        }       
    }
    return prefix;
}