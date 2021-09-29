//By Id
// const taskInput = document.getElementById("taskInput");
// console.log(taskInput); //check correct
// //By Class
const container = document.getElementsByClassName("container");
// console.log(container);

const styleBtn = document.getElementById("styleButton");
const body = document.getElementById("body");
console.log(styleBtn);
//CREATE A BUTTON TO CHANGE COLORS EG DARKMODE
styleBtn.addEventListener("click", () => {
    //this allows you to toggle between element classes
    body.classList.toggle("body--nightMode"); // <-- vanilla JS way to do it
    // toggleClass(body, "body--nightMode"); // <-- this is JQuery the css class you want to toggle

    //change both container colors
    for(let i = 0; i < container.length; i++) {
        container[i].classList.toggle("container--nightMode");
    }

    // for(let i = 0; i < buttons.length; i++) {  //This is for if you wanted to change buttons as well
    //     buttons[i].classList.toggle("button--nightMode");
    // }
});

// CREATE A BUTTON THAT ALLOWS ME TO ADD ITEMS TO THE TODO LIST
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("tasks");
const addTaskBtn = document.getElementById("addButton");

//FUNC TO APPEND A CHILD NODE TO PARENT NODE A NICEER WAY TO DO THE COMMENTED CODE

const appendChild = (elemType, input, parentNode) => {
    const newElem = document.createElement(elemType);
    const textNode = document.createTextNode(input);
    newElem.appendChild(textNode);
    parentNode.appendChild(newElem);
};

// FUNC TO REMOVE CHILD FROM PARENT NODE
const removeElem = (parentId, childId) => {
    const parentNode = document.getElementById(parentId);
    const childNode = document.getElementById(childId);

    parentNode.removeChild(childNode);
};


addTaskBtn.addEventListener("click", () => {
    if(taskInput.value === "") {
        alert("Please fill out tasks");
    }
    appendChild("p", taskInput.value, addTask);
    taskInput.value = "";

    if(addTask.childNodes.value === "You have nothing to do!") {
        removeElem(addTask, "nothingPara");
    }
})

// addTaskBtn.addEventListener("click", () => {
//     const newElem = document.createElement("p");
//     const textNode = document.createTextNode(taskInput.value);
//     newElem.appendChild(textNode);
//     addTask.appendChild(newElem);
//     taskInput.value = "";

    // if(addTask.childNodes.length > 1) {
    //     const parentNode = addTask;
    //     const child = document.getElementById("nothingPara"); //this line errors as keeps trying to delete nothing para
    //     parentNode.removeChild(child);
    // }
// });


