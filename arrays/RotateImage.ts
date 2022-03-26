export class RotateImage {
    rotate(matrix: number[][]):void {
        let len = matrix.length;
        let temp = 0;        
        for(let i = 0; i < len; i++) {
            for(let j = i+1; j < len; j++) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for(let i = 0; i < len; i++) {
            for(let j = 0; j < Math.floor(len/2); j++) {
                temp = matrix[i][j]
                matrix[i][j] = matrix[i][len-j-1];
                matrix[i][len-j-1] = temp;
            }
        }
    }
}

/*
    TEST
    const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
    const rt = new RotateImage();
    rt.rotate(matrix1);

    EXPLANATION:
    TODO:
*/