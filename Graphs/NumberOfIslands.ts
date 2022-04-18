export class NumberOfIslands {

    numIslands(grid: string[][]):number {
        let islands = 0;

        for(let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === "1") {
                    islands++;
                    this.dfs(grid, row, col);
                }
            }
        }
        return islands;
    }

    dfs(grid: string[][], row: number, col: number) {
        if (grid[row][col] === "0") return;

        grid[row][col] = "0";
        if (row > 0) this.dfs(grid, row - 1, col);
        if (row < grid.length -1) this.dfs(grid, row + 1, col);
        if (col > 0) this.dfs(grid, row, col - 1 );
        if (col < grid[0].length - 1) this.dfs(grid, row, col + 1);
    }
}

/*
    TESTING
    let grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ]
    let lands = new NumberOfIslands();
    console.log(lands.numIslands(grid));

    EXPLANATION
    - You want to see how many 1's are connected with each other
    and so, count them as one entity or "island", if you find a separation,
    you move on to that separation and count them as a seperate "island".
    - Everytime we find a one, we convert it to zero so we can check for other 
    non-connected ones on the grid.
*/