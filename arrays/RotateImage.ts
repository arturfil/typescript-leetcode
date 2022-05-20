export class RotateImage {
    rotate(matrix: number[][]):void {
        this.transpose(matrix);
        this.relfect(matrix);
    }

    transpose(matrix: number[][]) {
        let n = matrix.length;
        for(let i = 0; i < n; i++) {
            for (let j = i+1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }

    relfect(matrix: number[][]) {
        let n = matrix.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < Math.floor(n/2); j++) {
                [matrix[i][j], matrix[i][n-j-1]] = [matrix[i][n-j-1], matrix[i][j]];
            }
        }
    }
}

/*
    TEST
    const test_matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
    const rt = new RotateImage();
    rt.rotate(matrix1);

    EXPLANATION:
    TODO:
*/