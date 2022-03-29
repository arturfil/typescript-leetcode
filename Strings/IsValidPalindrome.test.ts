import { IsValidPalindrome } from "./IsValidPalindrome";


describe("Tests the strings problems", () => {
    it("Should return true if palindrome is valid", () => {
        const pal = new IsValidPalindrome();
        expect(pal.isPalindrome("tennet")).toBe(true);
    })
})