import { NextClosestTime } from "./Arrays/NextClosestTime";

class Main {
    main() {
        let n = new NextClosestTime();
        console.log(n.nextClosestTime("19:39"));
    }
}

const mainClass = new Main();
mainClass.main();