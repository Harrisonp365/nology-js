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
// let age = 25;
// age += 10;
// console.log(age);
// age -= 7;
// console.log(age);
// age *= 11;
// console.log(age);
// MVP complete
// challenge 2--------------------------------------------------------------------------
// const numDaysEarth = 4000;
// const numDaysRotate = 200;
// console.log(numDaysEarth / numDaysRotate);
// MVP complete
//Extra---------------------------------------------------------------------------------
// const moonRoations = numDaysEarth / numDaysRotate;
// console.log(moonRoations);
// -------------------------------------------------------------------------------------
// challenge 3
// const numDaysOrbit = 400;
// console.log(numDaysEarth / numDaysOrbit);
// MVP complete-------------------------------------------------------------------------
//Extra
// const totalOrbit = numDaysEarth / numDaysOrbit;
// console.log(totalOrbit);

//Booleans

// console.log(parseInt("Roisin"));
//
// 2 == "2"; //returns true
// 2 === 2; // returns true
// 2 === "2"; //returns false
// "2" + 3 == 23; // returns true (string + 3 = 23 ==23)
// "2" + 3 === 5; // returns false
// 10 % 3; // returns 1 3 goes into 10 3 times remainder 1
// 10 % 3 === 1; // returns true
// (100 % 7) % 5; // 7 goes into 100 14 times r 2 (2 % 5) just = 2 as 2 is remainder
// (100 % 7) % 5 !== 0; // returns true
// (100 % 7) % 9 == 2; // returns true
// !(10 % 2); // 10 % 2 == 0 but negate the 0 equals 1 == true
// !!!!((10 % 7) % 3); // (10 % 7 = 3) (3 % 3 = 0) !!!!0 = false
// 10 % 3 === -1 % 2; // (10 % 3 = 1) (-1 % 2 = -1) returns false // console logged equations
// (892783 != "89278" + 3) == 0; // (892783 != "89278" + 3) = false == 0 returns true
// true && false; // false
// false || true; // true
// true || false; // true
// true || false; // true
// true || false + true; // true
// true * false && false + true; // returns 0 or false? falsey value of 0 converted into ints?
// 10 && 123 && -1 && 3; // all values are truthey so returns 3 (needs to read all ints)
// 10 && 123 && 0 && 3; // returns 0 as falsey value
// (10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1;
// had to break down problem 2nd half of && = 0 first = 123 so returns 0 as falsey value
// 3 && "Calum" && ("" || 26); // final truthey val is 26 so returns 26
// 3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //same as above read though all and return final truthey val of "CatDog"

// Control flow

// const price1 = 5;
// const max = 10;

// if (max >= price1) {
//   console.log(max);
// }

// const n = 15;

// if (n % 2 == 0) {
//   console.log("n is even");
// } else {
//   console.log("n is odd");
// }

// const x = 8;
// const y = 9;

// if (Number.isInteger(x) && Number.isInteger(y)) {
//   console.log("Both values are ints");
//   if (x > y) {
//     console.log(`${x} is greater than ${y}`);
//   } else if (x < y) {
//     console.log(`${x} is smaller than ${y}`);
//   } else {
//     console.log(`${x} is equal to ${y}`);
//   }
// } else {
//   console.log("invalid contents");
// }
//-------------------------------------------------------------------------------------------------------
// const errorCode = 0;

// switch (errorCode) {
//   case 0:
//     console.log("Success");
//     break;
//   case 1:
//     console.log("Error code 1");
//     break;
//   case 2:
//     console.log("Error code 2");
//     break;
//   case 3:
//     console.log("Error code 3");
//     break;

//   default:
//     console.log("unidentified error code");
//     break;
// }

//FUNCTIONS BRUZ

// function myFunc() {
//   x = 5;

//   return x;
// }

// let myNum = myFunc();

// console.log(myNum);

// function rectArea(width, length) {
//   return width * length;
// }

// let myRect = rectArea(10, 5);

// console.log(myRect);

//Challenges
// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// Challenge: Working with Circles
// MVP
// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83
// Challenge: Years to Days & Seconds
// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

// const moonOrbit = 27;

// function moonOrbits(days) {
//   let orbitsOfMoonGivenDays = days / moonOrbit;
//   return orbitsOfMoonGivenDays;
// }
// console.log(moonOrbits(54));

// function circleArea(radius) {
//   let area = null; //check to see if you can init a val first
//   area = radius ** 2 * Math.PI;
//   return area;
// }
// console.log(circleArea(10));

// function circlePerim(radius) {
//   let perim = 2 * Math.PI * radius;
//   return perim;
// }
// console.log(circlePerim(10));

// function ageInDays(yearsOld) {
//   return yearsOld * 365;
// }
// console.log(ageInDays(25));

// function ageInSeconds(yearsOld) {
//   let secsInDay = 24 * 60 * 60;
//   return ageInDays(yearsOld) * secsInDay;
// }
// console.log(ageInSeconds(25));

// const circAreaArrowFunc = (radius) => {
//   const area = Math.PI * radius ** 2;
//   return area;
// };

// circAreaArrowFunc(10);
// console.log(circAreaArrowFunc.area);

// const myFunc = () => {
//   const fName = "Harry";
//   return fName;
// };

// const myFunc2 = () => {
//   const lName = "Powell";
//   const firstName = myFunc();
//   console.log(firstName);
//   return lName;
// };

// console.log(myFunc);
// console.log(myFunc2);

// let birdArr = ["Mango", "Squeaky", "grape"];

// function feedMyBorb(birdArr) {
//   console.log(birdArr + " gets fed");
// }

// feedMyBorb(birdArr[2]);
//----------------------------------------------------------------------------------------------------
// const n = 10;

// function sum(num) {
//   let total = 0;

//   for (let i = 0; i <= num; i++) {
//     total += i;
//     // console.log(i);
//   }
//   return total;
// }

// console.log(sum(n));

//Non forloop way of sum of num
const n = 10;
function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfN(n));
