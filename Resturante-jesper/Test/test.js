const apart = document.getElementById("apart");
const p = document.getElementById("error");

renderList = (categories) => {
  return `
    <div id="output">
        <h5 id="apart" >${categories.strCategory}</h5>
                  
    </div>
    `;
};

clearFood = () => {
  apart.innerHTML = "";
};

const loadData = async (query) => {
  clearFood();
  try {
    const result = axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    const { data: categories } = await result;

    if (query != undefined) {
      categories.categories = categories.categories.filter((element) => {
        return element.strCategory === query;
      });
    }

    for (let i = 0; i < categories.length; i++) {
      if (query == undefined || query == categories.categories[i].strCategory)
        apart.innerHTML += renderList(categories.categories[i]);
    }
    console.log(categories);
  } catch (err) {
    console.log("getApartments: ERROR", err);
    p.innerHTML = `Couldn't reach the API.`;
  }
};
loadData();
