
//*************************************
// Example 09-1: Asynchronous API call
//*************************************
const p = document.getElementById('errors');
const div = document.getElementById('countries');
/* const get = document.getElementById('get-countries'); */

async function getCountries() {
    try {
        // Call the API to fetch data
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        
        //const result = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        // Await the result from the server and store
        // the result in a variable named customers
        // const { data: countries } = await result;
        // Iterate over the returned result
        data.categories.map(country => {
            
            div.innerHTML +=
                `<div class="card" style="width: 10rem;">
                <img src="${country.strCategoryThumb}" class="card-img-top" style="width:100%; height: 8rem;"; alt="...">
                <div class="card-body" style="height:75px; padding:2px; ">
                <h5 style="font-size:12px; text-align:center;">${country.strCategory}</h5>
                <p class="card-text" style="font-size:9px;">${country.strCategoryDescription.length
                    < 50 ? `${country.strCategoryDescription}` :
                    `${country.strCategoryDescription.substring(0, 100)}...`}</p>
                </div>
                </div>`;
        });
    }
    catch (err) {
        
        console.log("getCustomers: ERROR", err);
    }
}

getCountries();


