// Brief

// Using your knowledge about scope and variable declarations in JavaScript,
// look at the following code snippets and predict what the output or error will be and why.
// Copy the following episodes into a JavaScript file and add comments under each one
// detailing the reason for your predicted output.


// Episode 1 

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
const verdict = declareMurderer();
console.log(verdict);

// Will output 'The murderer is Miss Scarlet' because the object does not change
// when it is referenced in the function & logged to the console.

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Will give assignment error because murderer can't be re-assigned as it's a 'const' value

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Professor Plum is hoisted so will print inside second verdict when the program loops back to the top(I think?)

// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Suspect three will be returned as Colonel Mustard when it is first logged because its been changed in the first function.
// The second log will output Mrs Peacock because it is not returning 'suspects' so it hasn't been changed.

// Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Will output 'revolver' as the weapon because 'weapon' has been updated when 'changeWeapon' function is called

// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Will return 'Mrs White' as 'murderer' because the plotTwist function holds the most recently declared value of 'murderer'

// Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// 