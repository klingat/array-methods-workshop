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


//Exercise 2

/* Similar to the previous exercise, write a function called getPositives that takes an 
array and uses the filter method to return a new array with only the positive numbers. */

function getPositives (array) {
    return array.filter(function (item) {
        return item > 0;
        });
}

console.log(getPositives([1, -2, 3, -4, 5, -6, 7, 8]));