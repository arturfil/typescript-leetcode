export class MergeIntervals {
    merge(intervals: number[][]): number[][] {
        intervals.sort((a,b) => a[0] - b[0])       
        let merged = [intervals[0]];

        for(let interval of intervals) {
            let lastInterval = merged[merged.length-1];

            if (interval[0] <= lastInterval[1]) {
                lastInterval[1] = Math.max(interval[1], lastInterval[1])
            } else {
                merged.push(interval)
            }
        }
        return merged
    }
}

/*
    TESTING
    let tests = [
        [[1,3],[2,6],[8,10],[15,18]],
        [[1,4],[2,3]],
        [[1,4],[0,0]],
        [[1,4],[0,2],[3,5]],
        [[1,4],[4,5]]
    ]
    let inter = new MergeIntervals();
    tests.forEach(test => inter.merge(test));

    EXPLANATION
*/