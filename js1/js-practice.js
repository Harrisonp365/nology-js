//Just a file for me to practice array methods to get more comfortable

const cars = [
    {
        name: "Honda",
        price: 10000,
        count: 2
    },
    {
        name: "Toyota",
        price: 5000,
        count: 3
    },
    {
        name: "Nissan",
        price: 15000,
        count: 4
    }
];

// const totalCarsValue = (carArr) => {
//     const totalProdValue = carArr.map(item => item.price * item.count);

//     return totalProdValue;
// };

// console.log(totalCarsValue(cars));
//Returns an array with total value for each car at each index
//Returns this ->[20000, 15000, 60000]

const totalCarsValue = (carArr) => {
    const totalProdValue = carArr.map(item => ({
        name: item.name,
        totalValue: item.price * item.count
    }));
    return totalProdValue;
};

console.log(totalCarsValue(cars));
//This returns an array of objects, giving the name and total value
//Returns [{name: "Honda", totalValue: 20000}, {name: "Toyota", totalValue: 15000},{..etc}];
console.log(cars[0].name);