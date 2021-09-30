//Covering
//Blocking and non blocking code
//Promises
//.then, async/await
//fetch

//Vocab
//promise
//synchronous, asynchronous
//callback -> func to be called at some point in the future
//event

//Blocking & Non-Blocking
//Blocking/synchronous -> starting a process and waiting to do anything before process ends
//Non-blocking/asynchronous -> startings a process and being able to do other things while process is happening

//Blocking code
// let count = 10;
// count += 2;
// console.log(count);

//Non-Blocking code / Async
// const button = document.querySelector("#btn");

// button.addEventListener("click", (event) => {
//     alert('clicked!!')
// });

// console.log("I happen before button was clicked");

//Non-Blocking code / Async
// setTimeout(() => {
//     alert("I happen in 3 seconds");
// }, 3000);

// console.log("I happen before the time out callback");

//------------------------------------------------------------------------------------------------------

//PROMISES
//May or may not happen in the future, two or more parties, delayed, cancelled

// const getNum = () => {
//     return Math.ceil(Math.random() * 100);
// }

// const getNumPromise = () => {
//     return new Promise((resolve, reject) => {
//         const n = Math.ceil(Math.random() * 100);
//         if(n > 50) {
//             reject(n);
//         } else {
//             resolve(n);
//         }
//     });
// };

// console.log(getNum());
// console.log(typeof getNum());
// console.log(getNumPromise());
// console.log(typeof getNumPromise());
// console.log(getNumPromise().constructor.name);

//CAN'T USE .THEN TO HANDLE REJECT ONLY USED WITH RESOLVE
// const numPromise = getNumPromise();
// console.log(numPromise);
// numPromise.then((n) => {
//     console.log(`The promise was resolved with: ${n}`);
// }).catch((n) => {
//     console.log(`The promise was rejected with: ${n}`);
// });

//You can call many .THEN bcause .then returns a promise so can keep calling .then 
// numPromise //20, promise
//     .then((n) => { //21 promise fullfilled
//         console.log(`Incriment n => ${n}`);
//         return n + 1;
//     })
//     .then((n) => { //22 promise fullfilled
//         console.log(`Incriment n => ${n}`);
//         return n + 1;
//     })
//     .then((n) => { //23 promise undefined due to no return 
//         console.log(`final val of n => ${n}`);
//     })

//MORE PRACTICAL EXAMPLE
const delayedInc = (iVal, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(iVal + 1);
    },timeout);
    });
};

const incrimentPromise = delayedInc(10, 2000);
const start = Date.now() / 1000;

//This will only run when promise is fullfilled so after the delayed incriment
incrimentPromise
.then((n) => {
    console.log(Date.now() / 1000 - start);
    console.log(`my new n is ${n}`);
    return delayedInc(n, 3000);
})
.then((n) => {
    console.log(Date.now() / 1000 - start);
    console.log(`my new n is ${n}`);
})

console.log("I'm first");
