// JS types
// typeof 15; // Prediction: {your answer here} int
// typeof 5.5; // Prediction: ... int(double)
// typeof NaN; // Prediction: int
// typeof "hello"; // Prediction: string
// typeof true; // Prediction: bool
// typeof (1 != 2); // Prediction: bool
// "hamburger" + "s"; // Prediction: hamburgerss
// "hamburgers" - "s"; // Prediction: NaN
// "1" + "3"; // Prediction: 13
// "1" - "3"; // Prediction: -2
// "johnny" + 5; // Prediction: johnny5
// "johnny" - 5; // Prediction: NaN
// 99 * "luftbaloons"; // Prediction: NaN

// const myString = "hello world";
// myInt = 25; //declarded as global var if no let or const
// const myBool = 1;
// let myNewString = myString + " world string";
// myNewString = "Hi World";

// const true = "harry";

// const firstName = "Harrison";
// const lastName = "Powell";
// const age = 25;

// console.log(firstName + " " + lastName);
// console.log("Age: " + age);
// console.log(myInt);

// for (i = 0; i < firstName.length; i++) {
//   let firstname = firstName[i];
//   console.log(firstname);
// }

// console.log(
//   `Hi, my name is ${firstName} ${lastName} and I am ${age} years old`
// );

// console.log(++false); trying to see what this does

// Challenge: Working with ages
// MVP
// Create a variable that contains your age
// Add 10 to your age variable and log the output to the console
// Subtract 7 from your age variable and log the output to the console
// Multiple your age variable by 11 and log the output to the console
// Challenge: Calculating Moon Rotations
// MVP
// Create two variables
// The first for the number of earth days. (You can choose any number of days)
// One to hold the number of earth days it takes for the moon to rotate.
// Log the number of rotations of the moon given the number of earth days you specified
// Challenge: Calculating Moon Orbits
// MVP
// Create another variable to store the number of earth days it takes for the moon to orbit the earth
// Log the number of orbits the moon can do, given the number of earth days

// challenge 1
let age = 25;
age += 10;
console.log(age);
age -= 7;
console.log(age);
age *= 11;
console.log(age);
// MVP complete
// challenge 2--------------------------------------------------------------------------
const numDaysEarth = 4000;
const numDaysRotate = 200;
console.log(numDaysEarth / numDaysRotate);
// MVP complete
//Extra---------------------------------------------------------------------------------
// const moonRoations = numDaysEarth / numDaysRotate;
// console.log(moonRoations);
// -------------------------------------------------------------------------------------
// challenge 3
const numDaysOrbit = 400;
console.log(numDaysEarth / numDaysOrbit);
// MVP complete-------------------------------------------------------------------------
//Extra
// const totalOrbit = numDaysEarth / numDaysOrbit;
// console.log(totalOrbit);
