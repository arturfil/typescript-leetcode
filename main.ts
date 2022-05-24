import { BestBuyStockSellStock } from "./Arrays/BestBuySellStock";


class Main {

    main() {
        let buyStk = new BestBuyStockSellStock();
        console.log(buyStk.maxProfix([2,4,1]));

    }
}

const mainClass = new Main();
mainClass.main();