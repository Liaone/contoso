const apart = document.getElementById("apart");
const p = document.getElementById("error");
const outputList = document.getElementById('output-list');

/*HamburgerNav*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Dropdown*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/*API CALL*/
renderList = (categories) => {
  return `
    <div class="output-food"> 
    <img src="${categories.strCategoryThumb}">  
    <h5 id="categories-text">${categories.strCategory}</h5>
                  
    </div>
    `;
};
clearFood = () => {
  outputList.innerHTML = "";
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

    for (let i = 0; i < categories.categories.length; i++) {
      outputList.innerHTML += renderList(categories.categories[i]);
    }
  } catch (err) {
    console.log("getApartments: ERROR", err);
    p.innerHTML = `Couldn't reach the API.`;
  }
};
loadData();
