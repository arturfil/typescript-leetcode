import { JumpGame } from "./Arrays/JumpGame";

class Main {
    main() {
        let jump = new JumpGame();
        let tests = [
            [2,3,1,1,4],
            [3,2,1,0,4]
        ]
        console.log(jump.canJump(tests[0]));
    }
}

const mainClass = new Main();
mainClass.main();