//By Id
// const taskInput = document.getElementById("taskInput");
// console.log(taskInput); //check correct
// //By Class
const container = document.getElementsByClassName("container");
// console.log(container);

const styleBtn = document.getElementById("styleButton");
const body = document.getElementById("body");
console.log(styleBtn);

styleBtn.addEventListener("click", () => {
    //this allows you to toggle between element classes
    body.classList.toggle("body--nightMode"); // <-- vanilla JS way to do it
    // toggleClass(body, "body--nightMode"); // <-- this is JQuery the css class you want to toggle

    //change both container colors
    for(let i = 0; i < container.length; i++) {
        container[i].classList.toggle("container--nightMode");
    }
});


