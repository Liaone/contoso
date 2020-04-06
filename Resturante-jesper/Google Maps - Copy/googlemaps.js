const price = document.getElementById('price');

const apart = document.getElementById('apart');


renderList = (apartment) => {

    return `
                <div id="output">
                    <h5 id="apart"><a id=mapView target='_blank' href="http://maps.google.com?q=${apartment.address}">${apartment.description}</a></h5>
                    <p id="price"><a id=mapView target='_blank' href="http://maps.google.com?q=${apartment.address}">${apartment.price}</a></p>
                    <h5 id="adress"><a id=mapView target='_blank' href="http://maps.google.com?q=${apartment.address}">${apartment.address}</a></h5>
                    <p id="information"><a id=mapView target='_blank' href="http://maps.google.com?q=${apartment.address}">Bedrooms: ${apartment.bedrooms + " / " + apartment.neighborhood}</p>               
                </div>
                `;
}

clearApartments = () => { apart.innerHTML = ""; }

const loadData = async (query) => {

    clearApartments()

    try {
        
        const result = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

        const { data: apartment } = await result;

        for (let i = 0; i < apartment.apartments.length; i++) {
            if (query == undefined || query == apartment.apartments[i].city)
                apart.innerHTML += renderList(apartment.apartments[i]);
        }

    }
    catch (err) {
        price.innerHTML = `Couldn't reach the API.`
        console.log("getApartments: ERROR", err);
    }
}

loadData();


