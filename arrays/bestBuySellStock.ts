export class BestBuyStockSellStock {
    maxProfix(prices: number[]): number {
        // vairables for max_profit and min should start at the first indexs
        let max = 0, min = prices[0];
        // loop linearly to see al data
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < min)
                min = prices[i];
            else if (prices[i] - min > max) 
                max = prices[i] - min;
        }
        return max;
    }
}


/*
    TESTING

*/