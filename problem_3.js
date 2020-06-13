/**
 * Problem 3:
 * Write a program that takes two integers N (N between 2 and 20, both inclusive) and M (M between 2 and 20, both inclusive).
 * And the takes a matrix A with N rows and M columns. You start at the upper-left position and you need to output the size
 * of the biggest strictly increasing sequence of elements goinf only down or to the right.
 * Example:
 * Case 1:
 * For the input provided as follows:
 * 33
 * 123
 * 241
 * 156
 * Output of the progam will be:
 * 5
 * Description of the output:
 * The biggest path goes like 1->2->4->5->6, having total size of 5.
 * Case 2:
 * For the input provided as follows:
 * 22
 * 10
 * 21
 * Output of the progam will be:
 * 2
 * Description of the output:
 * The biggest path goes like 1->2, having total size of 2.
 */

function biggestSequence(n, m, array) {
    if((n >= 2 && n <= 20) && (m >= 2 && m <= 20)) {
        var sequence = [], i = 0, j = 0;
        for (let index = 0; index < n * m; index++) {
            if(i == 0 && j == 0) {
                sequence.push(array[i][j])
            }
            if(i == (n - 1)) {
                if (array[i][j-1] > array[i][j+1] ) {
                    sequence.push(array[i][j-1])
                } else if(array[i][j+1] == undefined || array[i][j-1] == undefined) {
                    break;
                } else {
                    sequence.push(array[i][j+1])
                }
                break;
            }
            if((array[i+1][j] > array[i][j+1]) || (array[i+1][j] == array[i][j+1])) {
                sequence.push(array[i+1][j]);
                i++;
            } else {
                sequence.push(array[i][j+1]);
                j++;
            }
        }
        console.log(sequence.join('->'));
    } else {
        return null;
    }
}

biggestSequence(3,3,[[1,2,3],[2,4,1],[1,5,6]]);
biggestSequence(2,2,[[1,0],[2,1]]);