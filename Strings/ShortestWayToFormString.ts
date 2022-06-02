export class ShortestWayToFormString {
    shortestWay(source: string, target: string): number {
        let count = 0;
        let start = 0;

        while (start < target.length) {
            let end = start;

            for (let i = 0; i < source.length; i++) {
                if (source[i] === target[end])
                    end++;
            }

            if (end === start) return -1;
            start = end;
            count++;
        }
        return count
    }
}

/*
    TESTING
    let tests = [
        ["abc","abcbc"],
        ["abc","acdbc"],
        ["xyz","xzyxz"]
    ]
    let shortest = new ShortestWayToFormString();
    tests.forEach(test => shortest.shortestWay(test[0], test[1]));
*/