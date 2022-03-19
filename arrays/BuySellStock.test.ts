import {BuyStockSellStock} from "./BestBuySellStock";

describe("Arrays Tests", () => {
    it('Should return the max profit of the stocks', () => {
        const bStock = new BuyStockSellStock();
        const test_arr = [7,1,5,3,6,4]; // should return 5
        expect(bStock.maxProfit(test_arr)).toBe(5);
    })
})