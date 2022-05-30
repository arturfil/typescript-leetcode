export class MostStonesRemoved {
    removeStones(stones: number[][]): number {
        const visited = new Set<string>();
        let valid = 0;

        for (const [x,y] of stones) {
            const key = `${x}-${y}`;
            if (visited.has(key)) continue;
            this.traverse(x, y, visited, stones);
            valid++;
        }
        return stones.length - valid;
    }

    traverse(row: number, col: number, visited: Set<string>, stones: number[][]) {
        const key = `${row}-${col}`;
        if (visited.has(key)) return;

        visited.add(key);
        for (const [x, y] of stones) {
            if (row === x || col === y) this.traverse(x,y,visited,stones);
        }
    }
}

/* 
    TESTING:
    let test = [[0,0], [0,1], [1,0], [1,2], [2,1], [2,2]];
    let st = new MostStonesRemoved();
    console.log(st.removeStones(test));
*/