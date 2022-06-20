/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

 export const readN = function(read4: any) {

    return function(buf: string[], n: number): number {
        let copied = 0, read = 4;
        let buf4 = new Array(4);
        
        while (copied < n && read === 4) {
            read = read4(buf4);
            
            for (let i = 0; i < read; i++) {
                if (copied === n) 
                    return copied;
                buf[copied] = buf4[i];
                copied += 1;
            }
        }
        return copied;
    };
};

/*
    how to handle a buffer

*/