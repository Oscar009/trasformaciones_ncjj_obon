import React from 'react'

const Matrix = () => {
    
    let matrix1 = [
        [2,4,1],
        [6,9,8],
        [1,2,5]
    ];
    let matrix2 = [
        [5,4,8],
        [6,2,3],
        [1,5,5]
    ]; 
    const multMatrix = () => {
        let matrix3 = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]; 
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    for (var l = 0; l < 3; l++) {
                        if (j === k) {
                            matrix3[j][i] = matrix3[j][i] + (matrix1[k][l] * matrix2[l][i]);
                        }
                    }
                }
            }
        }
        console.table(matrix3);
    }    

  return (
    <>
        <div>{multMatrix()}</div>
    </>
  )
}

export default Matrix