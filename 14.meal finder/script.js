const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("results-heading"),
  single_mealEl = document.getElementById("single-meal");

function searchMeal(e) {
  e.preventDefault();

  //clear single meal
  single_mealEl.innerHTML = "";

  //get the search term
  const term = search.value;

  //check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        resultHeading.innerHTML = `<h2>Search results for "${term}":</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Please, try again!</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) => `<div class="meal">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="meal-info" data-mealID="${meal.idMeal}">
          <h3>${meal.strMeal}</h3>
          </div>
          </div>`
            )
            .join("");
        }
      });
    //clear search text
    search.value = "";
  } else {
    alert("please enter a search term");
  }
}
//fetch meal by id

function getMealByID(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealTODOM(meal);
    });
}

//Fetch meal random
function randomMeal() {
  //clear meals
  mealsEl.innerHTML = "";
  resultHeading.innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealTODOM(meal);
    });
}

//Add meal to dom
function addMealTODOM(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; ++i) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  single_mealEl.innerHTML = `
  <div class='single-meal'>
  <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />  
       <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
      </div>
      <h2>Ingredients</h2>
        <ul>
          ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
    
      <div class="main">
        <p>${meal.strInstructions}</p>
       
      </div>
  </div>`;
}

//Event listeners
submit.addEventListener("submit", searchMeal);

random.addEventListener("click", randomMeal);

mealsEl.addEventListener("click", (e) => {
  let targetEl = e.target;
  if (e.target.nodeName === "H3") {
    targetEl = e.target.offsetParent;
  }
  if (Array.from(targetEl.classList).includes("meal-info")) {
    const mealID = targetEl.getAttribute("data-mealid");
    getMealByID(mealID);
  }
});
