export class GroupAnagrams {

    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for(let i = 0; i < strs.length; i++) {
            let word = strs[i].split("").sort().join("")
            
            if (map.has(word)) {
                let arr_words = map.get(word);
                arr_words!.push(strs[i])
            } else {
                map.set(word, [strs[i]]);
            }
        }
        
        return Array.from(map.values());
    }
}