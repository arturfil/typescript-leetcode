export class CourseSchedule {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let preMap = new Map<number, Array<number>>();
        let inDeg = new Array<number>(numCourses).fill(0); // fill array with num of courses, to zero
        let completed = new Array<number>();

        for (let i = 0; i <prerequisites.length; i++) {
            let entry = preMap.get(prerequisites[i][1]) || [];
            entry.push(prerequisites[i][0]);
            preMap.set(prerequisites[i][1], entry);
            inDeg[prerequisites[i][0]]++;
        }

        for (let i = 0; i < numCourses; i++) {
            if (inDeg[i] === 0) {
                completed.push(i)
            }
        }

        while (completed.length > 0) {
            let item = completed.shift();
            const neighbors = preMap.get(item!) || [];
            for (let neighbor of neighbors) {
                inDeg[neighbor]--;
                if (inDeg[neighbor] === 0) {
                    completed.push(neighbor);
                }
            }
        }
        return inDeg.every(item => item === 0);
    }
}

/*
    TESTING
    let testArr0 = [[1,0]];
    let testArr = [[1,0],[0,1]];
    let testArr2 = [[1, 0], [2, 1], [3, 2]];
    let testArr3 = [[1,4],[2,4],[3,1],[3,2]];
    let course = new CourseSchedule();
    console.log(course.canFinish(2, testArr3));

    EXPLANATION
    - you want multiple hashmaps in order to make sure that a prerequisite
    doesn't overlap with the classes you have are currently trying to take
    - you could have a scenarion where you have a prerequisite for multiple
    classes
*/