export class ContainerWithMostWater {

    maxArea(height: number[]): number {
        let max_area = 0, left = 0, right = height.length-1;
        while (left < right) { // for the loop to only run half-way
            max_area = Math.max(max_area, Math.min(height[left], height[right]) * (right - left)); // calculate max_area
            if (height[left] < height[right]) left++;
            else right--;
        }
        return max_area;
    }
}

/*
    TESTING
    let con = new ContainerWithMostWater();
    con.maxArea([1,8,6,2,5,4,8,3,7])

    EXPLANATION

    |
    |
    |         |                   |
    |         |  x    x    x    x |  x    x |
    |         |  x |  x    x    x |  x    x |
    |         |  x |  x    x    x |  x    x |
    |         |  x |  x    x |  x |  x    x |
    |         |  x |  x    x |  x |  x |  x |
    |         |  x |  x |  x |  x |  x |  x |
    |____|____|__x_|__x_|__x_|__x_|__x_|__x_|____|  
     
    x = water
    - Here we see what the maximum lever of whater a range of columns could hold
    - We start at both extrems an interate inwards. every time we iterate we calculate
    if the colum, havin a bigger height (more possible area) does contribute to higher area
    rather than the current column postions that may have more horizontal magnitude.
    - Thus, you have to calculate also every iteration the Max(current_height, max_height) and 
    assign that result to max_height. 
*/