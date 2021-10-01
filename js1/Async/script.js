const sleep = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${timeout / 1000} seconds have elapsed`);
            resolve();
        }, timeout);
    });
};

// console.log("this is my console.log");

//CREATING AN SYNC FUNC

// const syncFunc = (num) => num + 1;
// console.log(syncFunc(10)); //returns 11

// //CREATING AN ASYNC FUNC

// const asyncFunc = async(num) => num + 1;
// console.log(asyncFunc(10)); //returns a promise with {<fulfilled> : 11};
//Async will always return a promise regardless of code inside

// const delayedIncrement = async (i, n, timeout) => {
//     console.log("before sleep");
//     await sleep(timeout); //awaits for sleep to finish before adding i + n
//     console.log("after sleep");
//     return i + n;
// };

// console.log("before delayed increment");
// console.log(delayedIncrement(10, 5, 2000));
// console.log("after delayed increment");

const startMircowave = async (food, time) => {
    await sleep(time);

    if(food == "popcorn" && time > 5000) {
        throw new Error("house has exploded");
    } else {
        return "Enjoy your meal";
    }
}

const tasks = async () => {
    const microwavePromise = startMircowave("popcorn", 5500);
    console.log("put washing in");
    console.log("feed cat");
    console.log(await microwavePromise);
}

tasks();
