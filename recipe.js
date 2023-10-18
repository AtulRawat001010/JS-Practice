let container = document.querySelector(".container");

let meals = document.querySelector("#meals");

// let fav = false;

getRandomMeal();
// fethcFavMeals();



async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await resp.json();

    let randomMeal = data.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
}




async function getMealById(id){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?l="+id);

    const data = await res.json();
    const meal = data.meals[0];

    return meal;
}



async function getMealBySearch(term){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+term);

    const data = await res.json();
    const meals = data.meals[0];

    return meals;
}




function addMeal(mealData, random = false) {
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = 
        `<div class="meal-header">
            ${random ? '<span class="random">Random Recipe</span>' : ''}
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>

        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button id="fav-btn" class="fav-btn"><i class='bx bxs-heart'></i></button>
        </div>`;

        let fav_btn = meal.querySelector(".fav-btn");

        fav_btn.addEventListener("click", ()=>{

            if(fav_btn.classList.contains("active")){
                removeMealsFromLS(mealData.idMeal);
                fav_btn.classList.remove("active");
            }
            else{
                addMealsToLS(mealData.idMeal);
                fav_btn.classList.add("active");
            }
        });

    meals.appendChild(meal);
}



function addMealsToLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}



function removeMealsFromLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter(id => id !== mealId)));
}



function getMealsFromLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}


async function fethcFavMeals() {
    const mealIds = getMealsFromLS();

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];

        let meal = await getMealById(mealId);
        
        addMealToFav(meal);
    }
}