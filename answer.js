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


console.log(longestWord("I am taking the decodeMTL coding bootcamp."));



// Exercise 5

/* Write a function called countVowels that takes a string and returns the number of 
vowels in the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split again. There is a way to use it to split a 
string by character. Try to Google it :)

Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if 
the current letter is a vowel. */

function countVowels(str) {
    var splitLetters = str.split('');
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    return splitLetters.reduce(function(counter, nextLetter) {
        if (vowels.indexOf(nextLetter) > -1) { // we set it bigger than -1, because indexOf returns a position, which is from 0 to infinity
            counter = counter + 1;
        }
        return counter;
    }, 0);
}

console.log(countVowels("I am taking the decodeMTL coding bootcamp."));


//Exercise 6

/* Write a function called highLow that takes an array of numbers, and returns an object 
with a property highest containing the highest number, and a property lowest containing 
the lowest number, using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], your function should return 
{highest: 40, lowest: -10}.

Hint: Javascript has a special value called Infinity, which is higher than any other 
number. See if you can initialize your reduce accumulator with Infinity and -Infinity :) */


function highLow(arr) {
    return arr.reduce(function(objectA, currentNumInArray) {
        if (objectA.highest < currentNumInArray) {
            objectA.highest = currentNumInArray;
        }
        if (objectA.lowest > currentNumInArray) {
            objectA.lowest = currentNumInArray;
        }
        return objectA;
    }, {
        highest: -Infinity,
        lowest: Infinity
    });
}

console.log(highLow([1, 2, 4, 99, -6, 8]));


// Exercise 7

/* Expanding on exercise 6, write a function called highLowTwo that takes an array of 
numbers, and returns the higest, second highest, lowest, and second lowest numbers.

For example, starting with [1, -10, 20, 40, 5], your function should return: */

function highToLow2(arr) {
    return arr.reduce(function(a, currentNumInArray) { // a is the object
        if (a.highest < currentNumInArray) {
            a.secondHighest = a.highest;
            a.highest = currentNumInArray;
        }
        if (a.lowest > currentNumInArray) {
            a.secondLowest = a.lowest;
            a.lowest = currentNumInArray;
        }
        if (currentNumInArray < a.highest && currentNumInArray > a.secondHighest) {
            a.secondHighest = currentNumInArray;
        }
        if (currentNumInArray > a.lowest && currentNumInArray < a.secondLowest) {
            a.secondLowest = currentNumInArray;
        }
        return a;
    }, {
        highest: -Infinity,
        secondHighest: -Infinity,
        lowest: Infinity,
        secondLowest: Infinity
    });
}

console.log(highToLow2([1, -10, 20, 40, 5]));




// Exercise 8

/* Write a function called countChars that takes a string, and returns an object where 
the keys are letters, and the value is the number of times that letter appears. */
function isNotSpace(letter) {
    if (letter !== " ") {
        return true;
    }
}

function countChars(str) {
    var keys = str.split("");
    var filteredKeys = keys.filter(isNotSpace);

    return filteredKeys.reduce(function(a, char) {
        if (a[char]) {
            a[char] += 1;
        }
        else {
            a[char] = 1;
        }
        return a;
    }, {})

}


console.log(countChars("hello world"))
