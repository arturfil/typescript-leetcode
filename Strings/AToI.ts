export class AToI {
    myAtoi(s: string): number {
        let new_s = s.replace(/[^0-9 -]/g, "");
        let p_int = parseInt(new_s);
        console.log(p_int);
        return p_int;
    }
}