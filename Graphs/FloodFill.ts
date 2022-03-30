export class FloodFill {
    // where sr = source row, sc = source col.
    floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
        let color = image[sr][sc];
        if (color != newColor) this.dfs(image, sr, sc, color, newColor);
        return image;
    }

    dfs(image: number[][], r: number, c: number, color: number, newColor: number) {
        image[r][c] == newColor;
    
        if (c-1 >= 0 && image[r][c-1] == color) 
            this.dfs(image, r, c-1, color, newColor);
    
        if (c+1 < image[r].length && image[r][c+1] == color)
            this.dfs(image, r, c+1, color, newColor);
    
        if (r-1 >= 0 && image[r-1][c] == color)
            this.dfs(image, r-1, c, color, newColor);
        
        if (r+1 < image.length && image[r+1][c])
            this.dfs(image, r+1, c, color, newColor);
    }
    
}

/*
    TESTING
    const testImage = [[1,1,1],[1,1,0],[1,0,1]];
    const f = new FloodFill();
    f.floodFill(testImage, 1, 1, 2);

    EXPLANATION
    - You want to do a depth search first where you check that 
    the current "pixel" has an original color that you want to change.
    - If that first condition is met, then you change it to the new color,
    and also the other 4 vertical and horizontal adjacent pixels.
    - For this, you can use a recursive helper function.
*/