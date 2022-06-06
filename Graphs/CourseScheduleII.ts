export class CourseScheduleII {
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        let map:Map<number, number[]> = new Map();
        for (let i = 0; i < numCourses; i++) {
            map.set(i, []);
        }

        for (let [course, prereq] of prerequisites) {
            if (map.has(prereq)) {
                let current = map.get(prereq);
                current?.push(course)
                map.set(prereq, current!)
            } else {
                map.set(prereq, [course])
            }
        }

        let cycle:Set<number> = new Set(), seen:Set<number> = new Set(), stack:number[] = [];
        for (let i = 0; i < numCourses; i++) {
            if (this.dfs(i, cycle, seen, stack, map) === "cycle") return []
        }

        return stack.reverse()
    }

    dfs(i: number, cycle: Set<number>, seen: Set<number>, stack: number[], map:Map<number, number[]>) {
        if (cycle.has(i)) return "cycle"
        if (seen.has(i)) return

        seen.add(i)
        cycle.add(i)

        for (let prereq of map.get(i)!) {
            if (this.dfs(prereq, cycle, seen, stack, map) === "cycle")return "cycle"
        }
        cycle.delete(i);
        stack.push(i)
    }
}