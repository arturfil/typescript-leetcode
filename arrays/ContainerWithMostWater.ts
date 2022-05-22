export class ContainerWithMostWater {
    maxArea(height: number[]): number {
        let left = 0, right = height.length-1;
        let max = 0;
        while (left < right) {
            let width = right - left;
            let current_height = Math.min(height[left], height[right]);
            max = Math.max(max, width * current_height);
            if (height[left] < height[right]) left++;
            else right--;
        }
        return max;
    }
}

/*
    TESTING
    let con = new ContainerWithMostWater();
    con.maxArea([1,8,6,2,5,4,8,3,7])

    EXPLANATION

    |
    |
    |         |                        |
    |         |  x    x    x    x    x |  x    x |
    |         |  x |  x    x    x    x |  x    x |
    |         |  x |  x    x |  x    x |  x    x |
    |         |  x |  x    x |  x |  x |  x |  x |
    |         |  x |  x    x |  x |  x |  x    x |
    |         |  x |  x |  x |  x |  x |  x |  x |
    |____|____|__x_|__x_|__x_|__x_|__x_|__x_|__x_|____|  
     
    x = water
    - Here we see what the maximum lever of whater a range of columns could hold
    - We start at both extrems an interate inwards. every time we iterate we calculate
    if the column, havin a bigger height (more possible area) does contribute to higher area
    rather than the current column postions that may have more horizontal magnitude.
    - Thus, you have to calculate also every iteration the Max(current_height, max_height) and 
    assign that result to max_height. 
*/