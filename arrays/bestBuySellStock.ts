export class BuyStockSellStock {
    maxProfit(prices:number[]): number {
        let min_price = prices[0];
        let max_price = 0;
 
        for(let i = 0; i < prices.length; i++) 
            if (prices[i] < min_price)
                min_price = prices[i];
            else if (prices[i] - min_price > max_price)
                max_price = prices[i] - min_price;
        
        return max_price;
    }

    maxProfitAlt(prices:number[]): number {
        let tot = 0, max = 0;
        let min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < min) 
                min = prices[i];
            else (prices[i] > max) 
                max = prices[i];
            tot = Math.max(tot, max - min);
        }
        return tot;
    }
}
