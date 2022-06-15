export class InsertInterval {
    insert(intervals: number[][], newInterval: number[]): number[][] {
        let result:number[][] = [];
        for(let [index, interval] of intervals.entries()) {
            if (newInterval[1] < interval[0]) {
                result.push(newInterval, ...intervals.slice(index))
                return result
            } else if (newInterval[0] > interval[1]) {
                result.push(interval);                
            } else {
                newInterval[0] = Math.min(newInterval[0], interval[0])
                newInterval[1] = Math.max(newInterval[1], interval[1])
            }
        }
        result.push(newInterval);
        return result;
    }
}

/*
    explanation
    - go to the first interval where it collides, else put at begining
    - traverse when it lastly it collides, if not put after that interval or at last
        - as you traverse you have to merge all those overlaping intervals
    ---
    are intervals sorted? I see so, are all numbers positive integers?, come in pairs ✅
*/ 