export class CourseSchedule {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let prereqMap = new Map<number, Array<number>>(); // map of num, number[]
        let inDegree = new Array<number>(numCourses).fill(0); // fill array with num of courses, to zero
        let completed:number[] = [];

        for (let i = 0; i <prerequisites.length; i++) {
            let entry = prereqMap.get(prerequisites[i][1]) || [];
            entry.push(prerequisites[i][0]);
            prereqMap.set(prerequisites[i][1], entry);
            inDegree[prerequisites[i][0]]++;
        }

        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                completed.push(i)
            }
        }

        while (completed.length > 0) {
            let item = completed.shift();
            const neighbors = prereqMap.get(item!) || [];
            for (let neighbor of neighbors) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    completed.push(neighbor);
                }
            }
        }
        return inDegree.every(item => item === 0);
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