const joke = document.querySelector('.joke');
const button = document.querySelector('.btn');
const randomJokeUrl = "https://api.chucknorris.io/jokes/random";
const categoryOfJokes = "https://api.chucknorris.io/jokes/categories";
const categoryButton = document.querySelector('.btn-category');

/* function fetchData(){
    const randomJoke = fetch(randomJokeUrl)
       .then(response => response.json())
       .then(data =>{
        joke.innerHTML = data.value;
       })
}; */
/* function fetchData(){
         const response = await fetch(randomJokeUrl);
         const data = await response.json();
         joke.innerHTML = data.value;
}; */

let categoriesOfFetchJokes = [];
async function fetchData(){
    try {
         const response = await fetch(randomJokeUrl);
         const data = await response.json();
         joke.innerHTML = data.value;
        } catch (err){
            console.log(err)
        }
};

async function fetchCategory (){
    try {
        const categoryRespons = await fetch(categoryOfJokes);
        const categories = await categoryRespons.json();
        categoriesOfFetchJokes = categories;
       } catch (err){
           console.log(err)
       }
}
function btnClick( ){
    fetchData()
};

function categoryClick( ){
    fetchCategory
    
}
button.addEventListener('click',btnClick);
categoryButton.addEventListener('click',categoryClick)