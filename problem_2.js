/**
 * Problem 2:
 * Write a program that takes a integer N and an array of N integers as input. Your program should output the minimum absolute
 * difference between two different elements from the array. Note: The integer N will be given in the first line and the array
 * of N integers will be given in the second line (each integer separated by a single space).
 * Note 2: Note that two elements are different if they're in different positions.
 * Example:
 * Case 1:
 * For the input provided as follows:
 * 3
 * 1 2 3
 * Output of the program will be:
 * 1
 * Description of the output:
 * Both pairs (1,2) and (2,3) give difference 1.
 * Case 2:
 * For the input provided as follows:
 * 4
 * 1 1 1 1
 * Output of the program will be:
 * 0
 */

function minimumDifference(size, array) {
    if(size > 0) {
        var minDifference = 10;
        for (let index = 0; index < array.length; index++) {
            if( minDifference > Math.abs(array[index] - array[index + 1])) {
                minDifference = Math.abs(array[index] - array[index + 1]);
            }
        }
        console.log(minDifference);
    } else {
        return null
    }
}

minimumDifference(3, [1,2,3]);
minimumDifference(4, [1,1,1,1]);