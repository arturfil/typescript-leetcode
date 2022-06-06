import { CourseSchedule } from "./Graphs/CourseSchedule";


class Main {
    main() {
        
        let tests:[number, number[][]][] = [
            [2, [[1,0]]],
            [4, [[1,0],[2,0],[3,1],[3,2]]],
            [1, []]
        ]

        let course = new CourseSchedule();
        tests.forEach(test => course.canFinish(test[0], test[1]))
        course.canFinish
    }
}

const mainClass = new Main();
mainClass.main();