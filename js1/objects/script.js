// OBJECT ITERATION

const car = {
    brand: "Honda",
    model: "Civic",
    year: 1999,
    isManual: true,
    color: "silver",
    wheels: 4,
};
// console.log(car[0]); // this wont work unless its in an array

let keys = Object.keys(car);
// console.log(keys);

// keys.push("petrolType"); // this will only push to new copy called keys
let carValues = Object.values(car);

keys.map((key, i) => {
    if(car[key] !== carValues[i]) {
        console.log("The car has changed");
    }
});

car.brand = "Mazda";
car.clutch = "yes";
let carEntries = Object.entries(car);

carEntries.map((kvp, i) => {
    if(kvp[0] !== keys[i]) {
        console.log("The key has changed");
    }

    if(kvp[1] !== carValues[i]) {
        console.log("The value has changed");
    }
});
