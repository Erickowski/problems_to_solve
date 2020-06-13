/**
 * Problem 1:
 * Write a program that takes a single linked list of integers (from 0 to 10) of positive size N and gives as output the number
 * that occurs the maxium number of times, from the inputted list. The input will be given in one line in the following format:
 * N
 * a1 a2 a3 a5... an
 * 'N' is the size of the list and a1, a2, a3, ..., an, are the integers present on the list indicating that a1 has a link to
 * a2, a2 has a link to a3 and so on.
 * If more than one number appear the maximum number of times, you should give as output the greatest one.
 * Example
 * Case 1:
 * For the input provided as follows:
 * 7
 * 1 5 1 4 9 0 4
 * Output of the program will be:
 * 4
 * Description:
 * Both 1 and 4 appear the maximum number of times (two times), but 4 is the greatest one out the two, so the output is 4.
 * Case 2:
 * For the input provided as follows:
 * 7
 * 1 10 0 5 2 3 9
 * Output of the program will be:
 * 10
 * Description:
 * All numbers appear onlu once, so you should choose the greatest one that is 10
*/

function dontRepeat(size, list) {
    if(size > 0) {
        var numbers = [], numberMax = 0;
        for (let index = 0; index < list.length; index++) {
            if(list.charAt(index) == ' ') {
                continue;
            }
            if(list.charAt(index) == '1' && list.charAt(index + 1) == '0') {
                index++;
                numbers.push(10);
                continue;
            }
            numbers.push(list.charAt(index));
        }
        var repeated = numbers.filter(function(item, index, array) {
            return array.indexOf(item) !== index;
        });
        if(repeated.length > 0) {
            for (let index = 0; index < repeated.length; index++) {
                if(numberMax < repeated[index]){
                    numberMax = repeated[index];
                }
            }
        } else {
            for (let index = 0; index < numbers.length; index++) {
                if(numberMax < numbers[index]){
                    numberMax = numbers[index];
                }
            }
        }
        console.log(numberMax);
    } else {
        return null;
    }
}

dontRepeat(7,'1 5 1 4 9 0 4');
dontRepeat(7,'1 10 0 5 2 3 9');