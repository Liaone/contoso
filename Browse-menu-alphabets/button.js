
//const p = document.getElementById('errors');
const div = document.getElementById('apartments');
/* const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C'); */
const browse = document.getElementById("browse-meal")
/* const D = document.getElementById('D');
const E = document.getElementById('E');
const F = document.getElementById('F');
 */

browse.onclick = async (event) => {
    const mealName = event.target.innerHTML;
    console.log(mealName);
    //e.preventDefault()
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`);
    const data = await api_call.json();
    let items = data.meals;
    console.log(items);
    div.innerHTML = "";
    items = items.map(item => {
        const {strMealThumb, strMeal, strTags, strYoutube, strSource, strArea,idMeal} = item;
        div.innerHTML += 
    ` <div class="card" style="width: 8rem; height: 120px;">
    <a href="${strSource}"  target="_blank">
    <img src="${strMealThumb}" class="card-img-top"  style="width: 100%; height: 80px;" alt="..."></a>
    <div class="card-body" style="padding: 5px; text-align:center;" >
    <h5 class="card-title"  style="font-size: 10px;">${strMeal.length
        < 50 ? `${strMeal}` :
        `${strMeal.substring(0, 40)}...`}  </h5>
    </div>
    </div> `;
})
    
}; 
     
