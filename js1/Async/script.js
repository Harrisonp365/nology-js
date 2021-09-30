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
let count = 10;
count += 2;
console.log(count);

//Non-Blocking code / Async
const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
    alert('clicked!!')
});

console.log("I happen before button was clicked");

//Non-Blocking code / Async
setTimeout(() => {
    alert("I happen in 3 seconds");
}, 3000);

console.log("I happen before the time out callback");

//------------------------------------------------------------------------------------------------------

//PROMISES

