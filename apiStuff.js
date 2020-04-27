const bajs = document.getElementById('things')
const urlSearch = document.getElementById('category-input')
const foodSearch = document.getElementById('food-button')
/* const urlpoop
 *//* fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a') */

/* fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

.then(res => res.json())

    .then(data => console.log(data.categories[1])); */



async function getFood(url) {
    const res = await fetch(url);

    return res.json()
}

function renderFood(meals) {
    return `
    <div class="meal-card">
        <div class="meal-card-inner">
            <div class="meal-card-front">
                <img src="${meals.strMealThumb}">
            </div>
            <div class="meal-card-back">
                <h2 class="meal-category"> ${meals.strCategory} </h2>
                <h3 class="meal-name"> ${meals.strMeal} </h3>
                <h3 class="meal-area"> ${meals.strArea} </h3>
            </div>
        </div>
    </div>
    `
}

async function bigFunction() {

    const searchFor = 'c' // add search functionality // 
    const data = await getFood(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchFor}`);

    console.log(data)
    console.log(data.meals[1].strMeal)

    for (let i = 0; i < data.meals.length; i++) {
        bajs.innerHTML += renderFood(data.meals[i])
    }

}

bigFunction()
