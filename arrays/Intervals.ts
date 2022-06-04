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