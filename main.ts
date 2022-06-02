import { CoinChange } from "./DynamicP/CoinChange";
import { LongestPalindromicSubstring } from "./DynamicP/LongestPalindromicSubstring";
import { ShortestWayToFormString } from "./Strings/ShortestWayToFormString";

class Main {

    main() {
        let tests:any = [
            [[1,2,5], 11],
            [[2], 3],
            [[1], 0]
        ]

        let coin = new CoinChange();
        tests.forEach((test:any) => coin.coinChange(test[0], test[1]));
    }
}

const mainClass = new Main();
mainClass.main();