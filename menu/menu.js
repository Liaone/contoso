
//*************************************
// Example 09-1: Asynchronous API call
//*************************************

//const p = document.getElementById('errors');
const div = document.getElementById('countries');

/* const get = document.getElementById('get-countries'); */


//getting the products Display menu
 class Products {
    async getProducts() {
        try {
            // Call the API to fetch data
            let result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
            let data = await result.json();
            let products = data.meals;
            products = products.map(item => {
                const { strMealThumb, strMeal, strTags, strYoutube, strSource, strArea,idMeal} = item;
                
                return {strMealThumb, strMeal, strTags, strYoutube,strSource, strArea,idMeal } 
            
            })
                return products;
        } catch (err) {
        
            console.log("getCustomers: ERROR", err);
        }
        
    }
}

//display products
class UI{
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result +=
                ` <div class="card" style="width: 10rem; height: 180px;">
            <img src="${product.strMealThumb}" class="card-img-top"  style="width: 100%; height: 90px;" alt="...">
            <div class="card-body" style="padding: 5px; text-align:center;" >
                <h5 class="card-title"  style="font-size: 9px;">${product.strMeal}</h5>
                <p class="card-text" style="font-size: 8px; margin:0px;">${product.strTags}</p>
                <a href="${product.strYoutube}" class="btn-sm btn-secondary" target="_blank"style="font-size: 6px;" >youtube</a>
                <a href="${product.strSource}" class="btn-sm btn-secondary" target="_blank"  style="font-size: 6px;" >ingradients</a>
            </div>
            </div> `;

        });
        div.innerHTML = result; 
}
}

// local storage
class Storage{

}



document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // get all products
    products.getProducts().then(products => ui.displayProducts(products))    
});  
