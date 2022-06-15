export class FindAndReplaceInString {
    findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
        const chars = s.split("");

        for (let i = 0; i < indices.length; i++) {
            const [index,  source, target] = [indices[i], sources[i], targets[i]]
            if (s.substring(index).startsWith(source)) {
                chars[index] = target;
                for (let j = 1; j < source.length; j++) {
                    chars[index+j] = "";
                }
            }
        }
        return chars.join("");
    }
}