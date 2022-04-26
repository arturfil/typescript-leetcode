import { SearchRange } from "./BinarySearch/SearchRange";



class Main {

    main() {
        let s = new SearchRange();
        console.log(s.searchRange([5,7,7,8,8,10], 8));

    }
}

const mainClass = new Main();
mainClass.main();