export class ShortestPathInBinaryMatrix {
    shortestPathBinaryMatrix(grid:number[][]):number {
        if (grid[0][0] === 1) return -1;

        const queue = [[0,0,1]];
        const directions = [
            [1,1], [1,-1], [-1, 1], [-1, -1], // diagonal 
            [0,1], [1, 0], [0,-1], [-1, 0] // vert or horiz.
        ];

        while (queue.length > 0) {
            let [i, j, length] = queue.shift()!;
            if (i === grid.length && j === grid[0].length) {
                return length;
            }
            for (let [moveI, moveJ] of directions) {
                const newI = moveI + i;
                const newJ = moveJ + j;
                if (this.inBound(newI, newJ, grid.length, grid[0].length) && 
                    grid[newI][newJ] === 0) {

                    queue.push([newI, newJ, length+1])
                }
            }
        }

        return -1;
    }

    inBound(i:number, j:number, rowLen:number, colLen: number) {
        return i <= rowLen-1 && j <= colLen-1 && i >= 0 && j >= 0;
    }
}