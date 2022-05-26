export class MostStonesRemoved {
    removeStones(stones: number[][]): number {
        let removed = 0;
        let i = 0, j = i + 1;
        while (stones.length > 2) {
            for (; j < stones[i].length; j++) {
                if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                    stones.pop();
                    removed++;
                }
            }
        }
        console.log(stones);
        return removed;
    }
}