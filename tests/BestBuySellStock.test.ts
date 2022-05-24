import { BestBuyStockSellStock } from "../Arrays/BestBuySellStock";

let test = new BestBuyStockSellStock();

it("With [2,4,1] should return 2", () => {
    expect(test.maxProfix([2,4,1])).toBe(2);
})

it("With [1,2] should return 1", () => {
    expect(test.maxProfix([1,2])).toBe(1);
})

it("With [7,1,5,3,6,4] should return 5", () => {
    expect(test.maxProfix([7,1,5,3,6,4])).toBe(5);
})

it("With [2,1,2,0,1] should return 1", () => {
    expect(test.maxProfix([2,1,2,0,1])).toBe(1);
})
