// Exercise 1

/* Write a function called printPositives that takes an array and uses the forEach method 
to print only the positive numbers. */
// var arrayNumbers = [];

function printPositives(array) {
    array.forEach(function(item) {
        if (item > 0) {
            console.log(item);
        }
    })
}

printPositives([1, -2, 3, -4, 5, -6, 7, 8]);


// Exercise 2

/* Similar to the previous exercise, write a function called getPositives that takes an 
array and uses the filter method to return a new array with only the positive numbers. */

function getPositives(array) {
    return array.filter(function(item) {
        return item > 0;
    });
}

console.log(getPositives([1, -2, 3, -4, 5, -6, 7, 8]));


// Exercise 2B

/* Re-do exercise 1 by first filtering the input array, and then printing the numbers 
from the filtered array. Your code will look something like:
`return arr.filter(…).forEach(…) */

function getPositives2(array) {
    return array.filter(function(item) {
        return item > 0;
    }).forEach(function(item) {
        console.log(item);
    })
}

getPositives2([1, -2, 3, -4, 5, -6, 7, 8]);



// Exercise 3

/* Write a function called filterArray that takes an array AND a function as arguments. 
Your filter function should return a new array that contains only the elements where the 
passed function returns a truthy value.

NOTE: You are allowed to use Array.prototype.filter to answer this question.

NOTE 2: This is a bit of a trick question, the answer is a one-liner :) */

function filterArray(array, func) {
    return array.filter(func)
}


// How to call the function filterArry if we have a function that returns true:

// function isPos (number) {
//     return (number > 0);
// }

// // console.log(filterArray([1, 2, 3, 4, -1, false], isPos));



// Exercise 4

/* Write a function called longestWord that takes a string as argument, and returns the 
longest word in the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split to split the string into an array of words. */

function longestWord(str) {
    var splitStr = str.split(" ");

  return splitStr.reduce(function(initialWord, nextWord) {
        if (nextWord.length > initialWord.length) {
            return nextWord;
        }
        else {
            return initialWord;
        }
    }, "");
}


console.log(longestWord("I am taking the decodeMTL coding bootcamp."))
