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