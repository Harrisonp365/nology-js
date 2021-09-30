// OBJECT ITERATION

// const car = {
//     brand: "Honda",
//     model: "Civic",
//     year: 1999,
//     isManual: true,
//     color: "silver",
//     wheels: 4,
// };
// // console.log(car[0]); // this wont work unless its in an array

// let keys = Object.keys(car);
// // console.log(keys);

// // keys.push("petrolType"); // this will only push to new copy called keys
// let carValues = Object.values(car);

// keys.map((key, i) => {
//     if(car[key] !== carValues[i]) {
//         console.log("The car has changed");
//     }
// });

// car.brand = "Mazda";
// car.clutch = "yes";
// let carEntries = Object.entries(car);

// carEntries.map((kvp, i) => {
//     if(kvp[0] !== keys[i]) {
//         console.log("The key has changed");
//     }

//     if(kvp[1] !== carValues[i]) {
//         console.log("The value has changed");
//     }
// });

//complex data with aidan

const coaches = [
    {
        id: 1,
        firstName: "Remi",
        lastName: "Hoeppe",
        age: 30,
        title: "Junior Coach",
    },
    {
        id: 2,
        firstName: "Calum",
        lastName: "Hill",
        age: 24,
        title: "Senior Coach",
    },
    {
        id: 3,
        firstName: "Aidan",
        lastName: "Tesselaar",
        age: 27,
        title: "Coach",
    },
];

const stuff = document.querySelector("#stuff");

const coachElements = coaches.map((coach) => {
    const coachStr = `${coach.lastName}, ${coach.lastName}`;
    const coachElement = document.createElement("p");
    const textNode = document.createTextNode(coachStr);
    coachElement.appendChild(textNode);
    return coachElement;
});

for(let i =0; i < coachElements.length; i++) {
    stuff.appendChild(coachElements[i]);
}


console.log(
    "Senior coachs",
    coaches.filter((coach) => coach.title.includes("Senior"))
);

console.log(
    "Above 25",
    coaches.filter((coach) => coach.age > 25)
);

console.log(
    "Find by Id that exists",
    findCoachById(coaches, 3)
);

function findCoachById(coachArray, idToFind) {
    const coach =  coachArray.find((coach) => coach.id === idToFind);

    if(!coach) {
        throw new Error(`Coach with ID ${idToFind} not found`);
    }

    return coach;
};

console.log(
    "listing coach names",
    coaches.map((coach) => `${coach.lastName}, ${coach.firstName}`)
);
