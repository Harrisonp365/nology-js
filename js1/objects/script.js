// OBJECT ITERATION

const car = {
    brand: "Honda",
    model: "Civic",
    year: 1999,
    isManual: true,
    color: "silver",
    wheels: 4,
};

let keys = Object.keys(car);
console.log(keys);

keys.push("petrolType"); // this will only push to new copy called keys
let carValues = Object.values(car);

car.color = "blue";
car.wheels = 3;



keys.map((key, i) => {
    if(car[key] !== carValues[i]) {
        console.log("The car has changed");
    }
});