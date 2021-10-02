//Fetch
//Fetch always returns a promise and will always be non blocking

const CATS_URL = "https://catfact.ninja";

const getBreeds = async (pageNum) => {
    const response = await fetch(`${CATS_URL}/breeds?page=${pageNum}`);
    const data = await response.json();
    console.log(data);
    return data.data;
};

const btn = document.querySelector("#getBreeds");

btn.addEventListener("click", async (event) => {
    const input = document.querySelector("#pageNum");
    const pageNum = parseInt(input.value);
    if(!pageNum)
        return;


    const breeds = await getBreeds(pageNum);
    const listItems = breeds.map((breed) => {
        const element = document.createElement("li");
        const breedText = `${breed.breed} is from ${breed.country}`;
        const textNode = document.createTextNode(breedText);
        element.appendChild(textNode);
        return element;
    });
    const list = document.querySelector("#breeds");
    const append = parent => child => parent.appendChild(child);
    listItems.forEach(append(list));
});

const getFact = async () => {
    const response = await fetch(`${CATS_URL}/fact`);
    const data = await response.json();
    console.log(data);
    return data.data;
}

getFact();
const factBtn = document.querySelector("#getFacts");
//Fetching Data from API and rendering it to the page