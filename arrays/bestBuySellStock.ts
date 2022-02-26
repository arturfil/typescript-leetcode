

const maxProfit = (prices:number[]) => {
    let min_price = prices[0];
    let max_price = 0;
    for(let i = 0; i < prices.length; i++) 
        if (prices[i] < min_price)
            min_price = prices[i];
        else if (prices[i] - min_price > max_price)
            max_price = prices[i] - min_price;
    
    return max_price;
}

export default maxProfit;