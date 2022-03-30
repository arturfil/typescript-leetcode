import { FloodFill } from "./Graphs/FloodFill";


class Main {

    main() {
        // image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
        const testImage = [[1,1,1],[1,1,0],[1,0,1]];
        const f = new FloodFill();
        f.floodFill(testImage, 1, 1, 2);
    }
}

const mainClass = new Main();
mainClass.main();