// var name = 'TJ';

// var secretsFunction = function () {
//     var pinCode = [0, 0, 0, 0];
//     console.log('name inside function', name);
// }

// secretsFunction();
// console.log('pincode outside function', pinCode);

// var filterNamesByFirstLetter = function(names, letter) {
//     let filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         }
//     }
//     return filteredNames;
// }

// var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];

// var filteredStudents = filterNamesByFirstLetter(students, 'A');

// console.log('Filtered Students:', filteredStudents); 


// let isItFive = function(num) {
//     let result;
//     if (num === 5) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(isItFive(5));
// console.log(isItFive(4));

// const calculateEnergy = function(mass) {
//     const speedOfLight = 299792458;
//     // speedOfLight = speedOfLight + 1;
//     return mass * speedOfLight **2;
// }
// // console.log('Speed of Light:', speedOfLight);
// console.log('My energy:', calculateEnergy(83));

// const song = {
//     title: 'Rasberry Beret',
//     artist: 'Prince'
// };

// song.year = 1986;

// console.log('Song:', song);
// song.title = 'When doves cry';
// console.log('Song after change:', song);

const students = ['Alice', 'Bob', 'Alyshha', 'Babs'];
students.push('Brian');
students[0] = 'TJ'
console.log('Students:', students);
