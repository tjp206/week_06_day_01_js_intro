var sports = ['football', 'tennis', 'rugby'];

// var numberOfElements = sports.length;
// console.log('Number of elements:', numberOfElements);

// var firstSport = sports[0];
// console.log('First sport:', firstSport);

sports.push('curling'); // .push() adds to end of array
sports.push('snooker');
sports.push('darts');
// console.log('Sports:', sports);

// var removedElement = sports.pop(); // .pop() removes from end of array
// console.log('sports:', sports);
// console.log(removedElement);

// var removedSport = sports.shift();  // .shift() removes from start
// console.log('removed sport:', removedSport);

// sports.unshift('basketball'); // .unshift adds to start
// console.log(sports);

// var removedSport = sports.splice(3, 1);
// console.log(removedSport)
// console.log(sports);

// for (var currentSport of sports) {
//     var upperCaseSport = currentSport.toUpperCase();
//     console.log(upperCaseSport);
// }

for (var i = 0; i < sports.length; i++) {  // for (initialise counter, condition, increment counter)
    var currentSport = sports[i];
    var upperCaseSport = currentSport.toUpperCase();
    console.log(upperCaseSport);
}




