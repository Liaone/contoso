
//*************************************
// Example 09-1: Asynchronous API call
//*************************************


const search = document.getElementById('search-items');
const form = document.getElementById('form');



/* Searching products */
form.addEventListener("submit", async (e) => {
    const mealName = e.target.elements.mealName.value;
    e.preventDefault()
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`);
    const data = await api_call.json();
    let items = data.meals;
    console.log(items);
    search.innerHTML = "";
    items = items.map(item => {
        const {strMealThumb, strMeal, strTags, strYoutube, strSource, strArea,idMeal} = item;
        search.innerHTML += 
    ` <div class="card" style="width: 6rem; height: 110px;">
    <a href="${strSource}"  target="_blank">
    <img src="${strMealThumb}" class="card-img-top"  style="width: 100%; height: 60px;" alt="..."></a>
    <div class="card-body" style="padding: 6px; text-align:center;" >
    <h5 class="card-title"  style="font-size: 10px;">${strMeal}</h5>
    </div>
    </div> `;
})
    
});
        


