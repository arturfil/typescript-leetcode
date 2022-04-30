export class Search2DMatrix {
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let left = 0;
        let right = rows * cols -1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            // Caluclate Mid
            let value = matrix[Math.floor(mid / cols)][mid % cols];

            if (value === target) 
                return true;
            else if (value > target) 
                right = mid-1;
            else 
                left = mid+1;
        }
        return false;
    }
}