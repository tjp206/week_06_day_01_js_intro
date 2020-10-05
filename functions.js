// Named Function Declarations 

// function sayHello(greeting, name = 'World') {
//     return `${greeting} ${name}!`;
// }

// console.log('sayHello Message:', sayHello('Hi','TJ'));


// Anonymous Function Expressions

// var add = function(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// };

// console.log('1 + 3 with add:', add(1, 3));

// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

// function totalAmount (numbersArray) {
//     var total = 0;
//     for (var number of numbersArray){
//         total += number;
//     }
//     return total
// }

// console.log('Total', totalAmount([1, 2, 3]));
// // Define an anonymous function expression that takes two arguments:
// // an object, for example, { name: 'Wojtek', age: 30 }
// // a string, for exmaple, 'name'
// // Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string.
// //  Store this function in an appropriately named variable to invoke it.

// var isKey = function(object, string) {
//     for (var key in object) {
//         if (key === string) {
//             return true;
//         }
//     }
//     return false;
// };

// var person = {
//     name: 'TJ',
//     age: 34
// }

// console.log(isKey(person, 'age'));

// Arrow Function Expression

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log('Multiply 2 by 5:', multiply(2,5));