export class CutOffTreesForGolfEvent {
    cutOffTrees(forest: number[][]): number {
        let current = this.dfs(forest, 0, 0);
        return current;
    }

    dfs(forest: number[][], row: number, col: number) {
        if (forest[row][col] === 0) return 0;
        
        console.log(`current ${forest[row][col]}`);
        
        forest[row][col] = 0;
        if (row > 0) this.dfs(forest, row - 1, col);
        if (row < forest.length-1) this.dfs(forest, row + 1, col);
        if (col > 0) this.dfs(forest, row, col - 1);
        if (col < forest[0].length-1) this.dfs(forest, row, col + 1);

        return 1;
    }
}

/*
    TESTING
    let forest = [[1,2,3],[0,0,4],[7,6,5]];
    let cut = new CutOffTreesForGolfEvent();
    console.log(cut.cutOffTrees(forest));

*/