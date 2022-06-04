export class CoinChange {
    coinChange(coins: number[], amount: number): number {
        const dp = Array(amount + 1).fill(Infinity); // infinity values are biggest int possible number int32?
        dp[0] = 0; // because to get 0 you need 0 coins => dp[0] = 0
        for (const coin of coins) {
            for (let i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}

/*
    TESTING
    let tests:any = [
            [[1,2,5], 11],
            [[2], 3],
            [[1], 0]
        ]

    let coin = new CoinChange();
    tests.forEach((test:any) => coin.coinChange(test[0], test[1]));
*/