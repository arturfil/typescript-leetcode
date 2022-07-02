export class CourseSchedule {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const visited = new Set<number>();
        const current = new Set<number>();
        const preReqs = new Array<number[]>(numCourses);
        for (let i = 0; i < preReqs.length; i++) preReqs[i] = []; // you do this to avoid same reference in all array

        for (let [c,p] of prerequisites) {
            console.log(Array.isArray(preReqs[p]));
            preReqs[p].push(c);
        }
        for (let i = 0; i < numCourses; i++) {
            if (!this.dfs(i, current, visited, preReqs)) return false;
        }
        return true;
    }

    dfs(val: number,  current: Set<number>, visited: Set<number>, preReqs:number[][]) {
        if (visited.has(val)) return true;
        if (current.has(val)) return false;
        current.add(val);
        for (let crs of preReqs[val]) {
            if (!this.dfs(crs, current, visited, preReqs)) return false;
        }
        current.delete(val);
        visited.add(val);
        return true;
    }
}

/*
    TESTING
    let tests: [number,number[][]][] = [
        [2, [[1,0]]],
        [2, [[1,0],[0,1]]],
        [5, [[0,1], [0,2], [1,3], [1, 4], [2,3]]]
    ]
    let course = new CourseSchedule();
    tests.forEach(test => course.canFinish(test[0], test[1]))

    EXPLANATION
    - you want multiple hashmaps in order to make sure that a prerequisite
    doesn't overlap with the classes you have are currently trying to take
    - you could have a scenarion where you have a prerequisite for multiple
    classes
*/