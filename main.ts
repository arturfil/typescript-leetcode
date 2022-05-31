import { MaximumProductSubArray } from "./Arrays/MaximumProductSubArray";
import { MaximumSubArray } from "./Arrays/MaximumSubArray";
import { LetterCombPhoneNumbers } from "./Recursion/LetterCombPhoneNumbers";



class Main {

    main() {
		// word search II
		// maximum product sub array
        let max = new MaximumProductSubArray();
        let tests = [
            [2,3,-2,4], // 6
            [-2],       // -2
            [-3,-1,-1]  // 3
        ]
        
        tests.forEach(test => {
            console.log(max.maxProduct(test));
        });

        
    }
}

const mainClass = new Main();
mainClass.main();
